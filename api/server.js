const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const searchRouter = require("./search/search-router");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use("/api/search", searchRouter);

app.get("*", (req, res) => {
  res.json({ message: "Welcome to the Hero API" });
});

module.exports = app;
