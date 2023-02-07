const {Videogame, Genre} = require("../db")
const { YOUR_API_KEY } = process.env;
const axios = require("axios");


const getAllGenres = async () => {
    try{
    const genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`)
    //console.log(genresApi)
    const genres = await genresApi.data.results?.map(element => element.name)
    //console.log(genres)

    const gen = genres.toString().split(",");
    //console.log(gen)
    
    gen.forEach(element => {
        Genre.findOrCreate({
            where: {name:element}
        })
    })
    }catch(error){
        console.log(error)
        }
    }

module.exports = {
    getAllGenres,
}