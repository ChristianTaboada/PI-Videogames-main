import axios from "axios";

export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES'
export const GET_GENRES = 'GET_GENRES'
export const POST_VIDEOGAMES = 'POST_VIDEOGAMES'
export const GET_NAME_VIDEOGAMES = 'GET_NAME_VIDEOGAMES'
export const GET_DETAIL= 'GET_DETAIL'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const ORDER_BY_RATING = 'ORDER_BY_RATING'
export const FILTER_BY_CREATED = 'FILTER_BY_CREATED'
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE'
export const RESET = 'RESET'

export function getAllVideogames(){
    return async function (dispatch){
        var apiData = await axios.get("/videogames"); //
        const videogames = apiData.data;

        return dispatch({
            type:GET_ALL_VIDEOGAMES,
            payload: videogames
        });
    }
}

export function getGenres(){
    return async function(dispatch){
        var apiData = await axios.get("/genres"); //
        const genres = apiData.data;
        return dispatch({
            type:GET_GENRES,
            payload: genres,
        })
    }
}

export function PostVideogames(payload){
    return async function(dispatch){
        try{
        const data = await axios.post("/videogames",payload) //http://localhost:3001/videogames
        alert('Formulario enviado')
        return data;
    } catch(error){
        alert('Server caido')
    }
    }

}

export function getNameVideogames(name){
    return async function(dispatch){
        try{
            var json = await axios.get("/videogames?name=" + name); //
            return dispatch({
                type:GET_NAME_VIDEOGAMES,
                payload: json.data
            })
        }catch(error){
            console.log(error)
        }
    }
}

export function getDetail(id){
    if(id){
    return async function (dispatch){
        try{
            var json = await axios.get(`/videogame/${id}`);
            return dispatch({
                type:GET_DETAIL,
                payload: json.data
            })
        } catch(error){
            console.log(error)
        }
    }
}
return {
    type: 'RESET',
}
};

export function filterByGenre(payload){
    console.log(payload)
    return{
        type:FILTER_BY_GENRE,
        payload
    }
}

export function filterByCreated(payload){
    return{
        type:FILTER_BY_CREATED,
        payload
    }
}

export function orderByName(payload){
    return{
        type:ORDER_BY_NAME,
        payload
    }
}

export function orderByRating(payload){
    return{
        type:ORDER_BY_RATING,
        payload
    }
}

export function reset(){
    return{
        type:RESET
    }
}

