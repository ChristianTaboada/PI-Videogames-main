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
                { pageNumbers &&
                pageNumbers.map(number =>(
                    <li className={style.number} key={number}>
                    <a onClick= {() => paginate(number)}>{number}</a>
                    </li>
                ))}
                <span className={style.currentPage}>{` Pagina ${currentPage}`}</span>
            </ul>
        </nav>
    )
}