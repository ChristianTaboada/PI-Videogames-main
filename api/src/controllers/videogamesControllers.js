const {Videogame, Genre} = require("../db");
const { YOUR_API_KEY } = process.env;
const axios = require("axios");

//Traigo info de api

const getApiInfo = async (id) => {
    try {
        let apiUrl = `https://api.rawg.io/api/games?key=${YOUR_API_KEY}`;
        const arrVideogames = []
        for(let i= 0; i< 5; i++){
            
        let pages = await axios.get(apiUrl);
        pages.data.results.map ((element => {
            arrVideogames.push ({
                id: element.id,
                name: element.name,
                image: element.background_image,
                genres: element.genres?.map((element) => element.name).toString(),
                released: element.released,
                rating: element.rating,
                platforms: element.platforms?.map((element) => element.platform.name).toString(),
                description: element.description,
                
            });
        }));
        apiUrl= pages.data.next;
    }
        return arrVideogames;
    } catch (error) {
        console.log(error)
    }
}
// Traigo info de la DB
const getDbInfo = async () => {
    try {
        const infoDb = await Videogame.findAll({
            include: {
                model: Genre,
                attributes: ["name"],
                through: {
                    attributes: [],
                },
            },
        });

        const mapInfoDb = infoDb?.map((element) =>{
            const platforms = element.platforms?.map((element) => element)
            return {
                id:element.id,
                name: element.name,
                image: element.image,
                genres: element.genres?.map((element) => element.name).toString(),
                description: element.description,
                released: element.released,
                rating: element.rating,
                platforms: platforms.toString(),
                createdInDb: element.createdInDb,
            };
        });
        return mapInfoDb;

    } catch (error) {
        console.log(error)
    }
}
// Sumo info + db
const getAllVideogames = async () => {
    try{
        const apiInfo = await getApiInfo();
        const dbInfo = await getDbInfo();
        const infoTotal = apiInfo.concat(dbInfo);
        return infoTotal;
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    getApiInfo,
    getDbInfo,
    getAllVideogames,
}
