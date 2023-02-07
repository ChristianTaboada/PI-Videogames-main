const { Router} = require('express');
const axios = require('axios');
const router = Router();
const {Videogame, Genre} = require('../db')
const { YOUR_API_KEY } = process.env;
const {getAllVideogamesHandler, getVideogamesHandler, postVideogamesHandler} = require("../handlers/videogamesHandlers")

router.get("/", getAllVideogamesHandler);

router.get ("/:id", getVideogamesHandler);

router.post("/", postVideogamesHandler);



module.exports = router;