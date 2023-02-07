const { Router} = require('express');
const axios = require('axios');
const router = Router();
const {Videogame, Genre} = require('../db')
const { YOUR_API_KEY } = process.env;
const {getAllGenresHandler} = require("../handlers/genresHandlers")

router.get("/", getAllGenresHandler);

module.exports = router;