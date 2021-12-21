require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const routes = require("./routes/routes");

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(routes);

app.listen(port, () => {
  console.log(`starting server on port ${port}`);
});
