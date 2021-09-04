const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const searchNameRouter = require("./search/name/search-name-router");
const searchIdRouter = require("./search/id/search-id-router");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use("/api/search/name", searchNameRouter);
app.use("/api/search/id", searchIdRouter);

app.get("*", (req, res) => {
  res.json({ message: "Welcome to the Hero API" });
});

module.exports = app;
