const axios = require('axios')
const {Videogame, Genre} = require("../db")
const {getApiInfoById, getDbInfoById,
    getAllVideogamesById} = require("../controllers/videogameController")

const videoGameByIdRoute = async function(req, res) {
    const { id } = req.params;

    let videogamesById = await getAllVideogamesById(id);

    if(videogamesById != null) {
        res.status(200).json(videogamesById);
    } else {
        res.status(404).send("Id not found");
    }
};

module.exports={
    videoGameByIdRoute,
}