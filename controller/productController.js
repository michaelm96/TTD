const Product = require("../models").Product;

class ProductController {
  static async getAll(req, res) {
    try {
      const data = await Product.findAll({
        where: { isActive: true },
        order: [["id", "ASC"]],
      });

      return res.status(200).json({
        message: "success retrieve product",
        result: data,
      });
    } catch (error) {
      console.log(error, "error");
      return res.status(500).json({
        message: "Error",
        error: error,
      });
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          message: "Id is missing",
        });
      }

      const data = await Product.findOne({
        where: { id, isActive:true },
      });

      if(!data){
          return res.status(404).json({
            message: `product with id ${id} not found`,
            result: [],
          });
      }
      return res.status(200).json({
        message: `success retrieve product with id ${id}`,
        result: data,
      });
    } catch (error) {
      console.log(error, "error");
      return res.status(500).json({
        message: "Error",
        error: error,
      });
    }
  }

  static async create(req, res) {
    try {
      const { name, qty, picture, expiredAt } = req.body;

      if (!name || !qty || !picture || !expiredAt) {
        return res.status(400).json({
          message: "something is missing",
        });
      }

      const data = await Product.create({
        name,
        qty,
        picture,
        expiredAt,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return res.status(201).json({
        message: `A product created`,
        result: data,
      });
    } catch (error) {
      console.log(error, "error");
      return res.status(500).json({
        message: "Error",
        error: error,
      });
    }
  }

  static async update(req, res) {
    try {
      const { name, qty, picture, expiredAt } = req.body;
      const { id } = req.params

      if (!name || !qty || !picture || !expiredAt) {
        return res.status(400).json({
          message: "something is missing",
        });
      }

      if (!id) {
        return res.status(400).json({
          message: "Id is missing",
        });
      }

      const data = await Product.update(
        {
            name,
            qty,
            picture,
            expiredAt,
            updatedAt: new Date(),
        },
        { where: { id } }
      )

      if(!data){
        return res.status(404).json({
            message: "Product not found",
        });
      }

      return res.status(200).json({
        message: `successfully update a product with id ${id}`,
      });
    } catch (error) {
      console.log(error, "error");
      return res.status(500).json({
        message: "Error",
        error: error,
      });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({
          message: "Id is missing",
        });
      }

      const data = await Product.update(
        {
            isActive: false,
        },
        { where: { id } }
      )

      if(!data){
        return res.status(404).json({
            message: "Product not found",
        });
      }

      return res.status(201).json({
        message: `successfully soft delete a product with id ${id}`,
      });
    } catch (error) {
      console.log(error, "error");
      return res.status(500).json({
        message: "Error",
        error: error,
      });
    }
  }
}

module.exports = ProductController;
