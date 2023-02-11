import React from "react";
import style from './Pagination.module.css'

export default function Pagination ({videogamesPerPage, allVideogames, currentPage, paginate}){
    const pageNumbers = []

    for (let i = 0; i < Math.ceil(allVideogames/videogamesPerPage); i++){
        pageNumbers.push(i+1)
    }

    return(
        <nav>
            <ul className={style.paginado}>
                <h1 onClick= {() => {if(currentPage > 1){paginate(currentPage -1)}}} className={style.prev}>Prev</h1>
                { pageNumbers &&
                pageNumbers.map(number =>(
                    <li className={style.number} key={number}>
                    <a className={style.number2} onClick= {() => paginate(number)}>{number}</a>
                    </li>
                ))}
                <h1 onClick= {() => {if(currentPage < 7){paginate(currentPage +1)}}} className={style.next}>Next</h1>
                <span className={style.currentPage}>{` Pagina ${currentPage}`}</span>
            </ul>
        </nav>
    )
}