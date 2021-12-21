# TTD

- RESTful endpoint for TTD product CRUD operation

## How to run
- Make sure sequelize installed
- run command "sequelize db:migrate"
- run command "sequelize db:seed:all"
- node index.js / nodemon (if already installed)

### POST /product

> create product

_Request Header_

```
not needed

```

_Request Body_

```
{
    name: <name of the product>,
    qty : <quantity of the product>,
    picture: <picture of the product in base64 format>,
    expiredAt: <product's expired date in "yyyy-mm-dd" format>,
}
```

_Response (201)_

```
{
    message: `A product created`,
    result: {
        "id": <id of the product>,
        "name": <name of the product>,
        "qty": <quantity of the product>,
        "picture": <picture of the product in base64 format>,
        "expiredAt": <product's expired date>,
        "isActive": <true by default>,
        "createdAt": <the time when the product created>,
        "updatedAt": <the time when the product last modified>,
    },
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Error",
  "error": <returned error message>
}
```

### GET /product

> Get all Prodyct

_Request Header_

```
not needed

```

_Request Body_

```
not needed
```

_Response (200)_

```
{
    "message": "success retrieve product",
    "result": [{
        "id": <id of the product>,
        "name": <name of the product>,
        "qty": <quantity of the product>,
        "picture": <picture of the product in base64 format>,
        "expiredAt": <product's expired date>,
        "isActive": <true by default>,
        "createdAt": <the time when the product created>,
        "updatedAt": <the time when the product last modified>,
    },
    {},
    {},
    ....
    ]
}
```

_Response (500 - Internal Server Error)_

```
{
    message: "Error",
    error: <returned error message>,
}
```

### GET /product/:id

> Get a Product based on id

_Request Header_

```
{
    "access_token": <This access token generated automatically when you Log-in>
}

```

_Request Params_

```
{
    id: <id of the product>
}
```

_Response (200)_

```
{
    "message": "success retrieve product with id <id>",
    "result": {
        "id": <id of the product>,
        "name": <name of the product>,
        "qty": <quantity of the product>,
        "picture": <picture of the product in base64 format>,
        "expiredAt": <product's expired date>,
        "isActive": <true by default>,
        "createdAt": <the time when the product created>,
        "updatedAt": <the time when the product last modified>,
    }
}

```

_Response (400 - ID missing)_

```
{
    message: "Id is missing",
}
```

_Response (404 - product not found)_

```
{
    message: `product with id ${id} not found`,
    result: [],
}
```

_Response (500 - Internal Server Error)_

```
{
    message: "Error",
    error: <returned error message>,
}
```

### PUT /product/:id

> update a Product by id

_Request Header_

```
not needed
```

_Request Params_

```
{
    id: <id of the product>
}
```

_Request Body_

```
{
    name: <new name of the product>,
    qty : <new quantity of the product>,
    picture: <new picture of the product in base64 format>,
    expiredAt: <new product's expired date in "yyyy-mm-dd" format>,
}
```

_Response (200 - Ok)_

```
{
    message: `successfully update a product with id ${id}`,
}
```

_Response (400 - Something is missing in body)_

```
{
    message: "something is missing",
}
```

_Response (400 - missing ID)_

```
{
    message: "Id is missing",
}
```

_Response (404 - Not Found)_

```
{
    message: "Product not found",
}
```

_Response (500 - Internal Server Error)_

```
{
    message: "Error"
    error: <returned error message>
}
```

### DELETE /product/:id

> soft Delete a product based on id

_Request Header_

```
not needed
```

_Request Params_

```
{
    id: <ID of the product>
}
```

_Response (200 - Ok)_

```
{
    message: `successfully soft delete a product with id ${id}`,
}
```

_Response (400 - Missing Id)_

```
{
    message: "Id is missing",
}
```

_Response (404 - Not Found)_

```
{
     message: "Product not found",
}
```

_Response (500 - Internal Server Error)_

```
{
    message: "Error"
    error: <returned error message>
}
```
