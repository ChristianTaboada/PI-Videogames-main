import { useSelector } from "react-redux"
import CardVideogame from "../CardVideogame/CardVideogame"
import { Link } from "react-router-dom"
import style from './CardContainerVideogame.module.css'


const CardContainerVideogame = ({currentVideogames}) =>{
    
    const videogames = useSelector(state => state.videogames)
    return(
        <div className={style.card_grid}>
            {currentVideogames.map(videogame=>{
                return(
                    <div key ={videogame.id}>
                    <div>
                    <Link to={`/videogame/${videogame.id}`}>
                <CardVideogame
                name={videogame.name}
                genres={videogame.genres}
                image={videogame.image}
                rating={videogame.rating}
                />
                </Link>
                </div>
                </div>
                )
            })}

        </div>
    )
}

export default CardContainerVideogame