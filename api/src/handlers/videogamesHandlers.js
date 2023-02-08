const {Videogame, Genre} = require("../db")
const {getAllVideogames} = require("../controllers/videogamesControllers")

const getAllVideogamesHandler = async (req,res) => {
    const name = req.query.name;
    let videogamesTotal = await getAllVideogames();

    if(name) {
        let videogameName = await videogamesTotal.filter(element => element.name.toLowerCase().includes(name))
        videogameName.length ?
        res.status(200).send(videogameName) :
        res.status(404).send('No esta el Juego,sorry')
    }else{
        res.status(200).send(videogamesTotal)
    }
}

const getVideogamesHandler = async (req,res) => {
    const id = req.params.id;
    const videogamesTotal = await getAllVideogames()
    if(id){
        
        let videogamesId = await videogamesTotal.filter(element => element.id == id)
        videogamesId.length ?
        res.status(200).json(videogamesId) :
        res.status(404).send('No encontre el juego')
    }
}

    const postVideogamesHandler = async (req, res) => {
    try {
      let {
        name,
        image,
        description,
        released,
        rating,
        genres,
        platforms,
        createdInDb,
      } = req.body;
  
      let videogameCreated = await Videogame.create({
        name,
        image:
          image ||
          "https://www.trecebits.com/wp-content/uploads/2019/04/11854.jpg",
        description,
        released,
        rating,
        platforms,
        createdInDb,
      });
      let genresDb = await Genre.findAll({
        where: { name: genres},
      });
      //console.log(genresDb)
      await videogameCreated.addGenre(genresDb);

      res.status(200).send(genresDb);
    } catch (error) {
      console.log(error);
    }
  };


module.exports = {
    getAllVideogamesHandler,
    getVideogamesHandler,
    postVideogamesHandler,

}