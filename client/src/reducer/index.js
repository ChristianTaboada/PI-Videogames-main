import { GET_ALL_VIDEOGAMES } from "../actions"
import {GET_GENRES,} from "../actions"
import { POST_VIDEOGAMES } from "../actions"
import { GET_NAME_VIDEOGAMES } from "../actions"
import {GET_DETAIL} from "../actions"
import { ORDER_BY_NAME } from "../actions"
import { ORDER_BY_RATING } from "../actions"
import { FILTER_BY_CREATED } from "../actions"
import { FILTER_BY_GENRE } from "../actions"

const initialState = {
    allVideogames: [],
    videogames:[],
    genres: [],
    detail:[],


}
function rootReducer(state= initialState,action){
    switch(action.type){
        case GET_ALL_VIDEOGAMES:
            return{
                ...state,
                videogames:action.payload,
                allVideogames:action.payload
            }
        case GET_GENRES:
            const filteresGenres = action.payload.filter((element) => element.name !== "")
            return{
                ...state,
                genres: filteresGenres,
            }
            case POST_VIDEOGAMES:
                return{
                    ...state,
                }
            case GET_NAME_VIDEOGAMES:
                return{
                    ...state,
                    videogames: action.payload
                }
            case GET_DETAIL:
                return{
                    ...state,
                    detail: action.payload
                }
            case ORDER_BY_NAME:
                const sortedName = action.payload === "A-Z"?
                state.allVideogames.sort((a,b) =>{
                    if(a.name > b.name){
                        return 1;
                    }
                    if(b.name > a.name){
                        return -1;
                    }
                    return 0
                })
                : state.allVideogames.sort((a,b) =>{
                    if(a.name > b.name){
                        return -1;
                    }
                    if(b.name > a.name){
                        return 1
                    }
                    return 0;
                })
                return {
                    ...state,
                    videogames: sortedName,
                };
            case ORDER_BY_RATING:
                const sortedRating = action.payload === "min_rating"?
                state.allVideogames.sort((a,b) =>{
                    if(a.rating > b.rating){
                        return 1;
                    }
                    if(b.rating > a.rating){
                        return -1;
                    }
                    return 0
                })
                : state.allVideogames.sort((a,b) =>{
                    if(a.rating > b.rating){
                        return-1;
                    }
                    if(b.rating > a.rating){
                        return 1;
                    }
                    return 0;
                })
                return {
                    ...state,
                    videogames: sortedRating,
                };
            case FILTER_BY_GENRE:
                const statusFiltered = action.payload === "All" ?
                state.allVideogames
                : state.allVideogames.filter((element) =>{
                    console.log(element)
                    if(element.genres)
                    return element.genres.includes(action.payload)
                })
                return {
                    ...state,
                    videogames: statusFiltered,
                }
            case FILTER_BY_CREATED:
                const createdFilter = action.payload === "Db" ? state.allVideogames.filter(element =>element.createdInDb)
                : state.allVideogames.filter(element => !element.createdInDb)
                return{
                    ...state,
                    videogames: action.payload === "Db" ? createdFilter : state.allVideogames
                }
        default:
            return state;

    }
}

export default rootReducer