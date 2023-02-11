import CardContainerVideogame from "../CardContainerVideogame/CardContainerVideogame";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCreated, filterByGenre, getAllVideogames, getGenres, orderByName, orderByRating } from "../../actions";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader"
import axios from "axios";
import style from './Home.module.css'

const Home = () =>{

    const dispatch = useDispatch();
    const allVideogames = useSelector((state) => state.videogames)
    const genres = useSelector((state) =>state.genres)

    const [currentPage, setCurrentPage] = useState(1)
    const [videogamesPerPage, setVideogamesPerPage] = useState(15)
    const indexOfLastVideogames = currentPage * videogamesPerPage
    const indexOfFirstVideogames = indexOfLastVideogames - videogamesPerPage
    const currentVideogames = allVideogames.slice(indexOfFirstVideogames, indexOfLastVideogames)

    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }
    useEffect(()=>{
        dispatch(getAllVideogames());
        dispatch(getGenres())
    },[dispatch])

    const [orden,setOrden] = useState("")

    if(!allVideogames.length){
        return <Loader/>;
    }

function handleOrderByName(element){
    element.preventDefault()
    dispatch(orderByName(element.target.value));
    setOrden(`Ordenado ${element.target.value}`);
}

function handleOrderByRating(element){
    element.preventDefault()
    dispatch(orderByRating(element.target.value));
    setOrden(`Ordenado ${element.target.value}`);
}

function handleFilterByGenre(element){
    element.preventDefault()
    dispatch(filterByGenre(element.target.value));
}

function handleFilterByCreated(element){
    element.preventDefault()
    dispatch(filterByCreated(element.target.value));
}
function handleClick(element){
    element.preventDefault();
    dispatch(getAllVideogames());
}
    return(
        <div className={style.all}>
        <header className={style.header}>
        <h1 className={style.title}>Gamer Quest</h1>
        <SearchBar
        setCurrentPage={setCurrentPage}
        />
        <Link to='/videogames' className={style.btn_crear}>Crear Videogame</Link>
        </header>
        <br/>
        <button className={style.btn_refresh} onClick={element =>{handleClick(element)}}>
            Volver a cargar los Videojuegos
        </button>
        <div>
        <select className={style.btn_select} onChange={handleOrderByName}>
    <option className={style.btn_select} disabled selected defaultValue>Alphabetical order</option>
    <option className={style.btn_select} value = "A-Z">A-Z</option>
    <option className={style.btn_select} value = "Z-A">Z-A</option>
        </select>
        <select  className={style.btn_select} onChange={handleOrderByRating}>
    <option disabled selected defaultValue>Rating order</option>
    <option value = "min_rating">Min Rating</option>
    <option value = "max_rating">Max Rating</option>
        </select>
        <select className={style.btn_select} onChange={handleFilterByGenre}>
            <option disabled selected defaultValue>Genres</option>
            <option value = "All">All</option>
            {genres?.map((element) =>(
                        <option value={element.name}>{element.name}</option>
                    ))}
        </select>
        <select className={style.btn_select} onChange={handleFilterByCreated}>
            <option disabled selected defaultValue>All</option>
            <option value = "Api">Existentes</option>
            <option value = "Db">Creados</option>
        </select>
        </div>
        <Pagination
            videogamesPerPage = {videogamesPerPage}
            allVideogames = {allVideogames.length}
            paginate = {paginate}
            currentPage = {currentPage}
            />
        <CardContainerVideogame
        currentVideogames={currentVideogames}
        />
        </div>
    )
}

export default Home;