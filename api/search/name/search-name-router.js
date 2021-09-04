const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

router.get("/", (req, res) => {
  res.status(401).json({ message: "Please enter a search term" });
});

router.get("/:name", (req, res) => {
  const { name } = req.params;

  try {
    axios.get(`${BASE_URL}${API_KEY}/search/${name}`).then((response) => {
      res.json(response.data.results);
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
