const { Router} = require('express');
const axios = require('axios');
const router = Router();
const {Videogame, Genre} = require('../db')
const { YOUR_API_KEY } = process.env;
const {videoGameByIdRoute} = require("../handlers/videogameHandler")

router.get("/:id", videoGameByIdRoute);


module.exports = router;