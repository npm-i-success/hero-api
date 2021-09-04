const express = require("express");
const axios = require("axios");

const router = express.Router();

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

router.get("/", (req, res) => {
  res.status(401).json({ message: "Please enter a search term" });
});

router.get("/:searchTerm", (req, res) => {
  const { searchTerm } = req.params;

  try {
    axios.get(`${BASE_URL}${API_KEY}/search/${searchTerm}`).then((response) => {
      res.json(response.data.results);
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
