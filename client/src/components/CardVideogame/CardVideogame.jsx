import style from './CardVideogame.module.css'
const CardVideogame = (props) =>{
    return(
        <div className={style.todo}>
        <div className={style.card}>
            <img className={style.img} src={`${props.image}`} alt = 'img not found' width='200px' height='350px'></img>
            <h3 className={style.name}>{props.name}</h3>
            <h3 className={style.genres}>Genero: {props.genres}</h3>
            <h3 className={style.rating}>Rating: {props.rating}</h3>
        </div>
        </div>
    )
}

export default CardVideogame