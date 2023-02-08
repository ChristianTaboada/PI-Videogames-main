const {Videogame, Genre} = require("../db");
const {getAllGenres} = require("../controllers/genresControllers")

const getAllGenresHandler = async(req,res) => {
    try{
        await getAllGenres();
        const allGenres = await Genre.findAll();
        res.status(200).send(allGenres);
        //console.log(allGenres)
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    getAllGenresHandler,
}