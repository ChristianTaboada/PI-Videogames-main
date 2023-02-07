import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameVideogames } from "../../actions";
import style from './SearchBar.module.css'

export default function SearchBar({setCurrentPage}){
    const dispatch = useDispatch()
    const [name,setName] = useState("")

    function handleInputChange(element){
        element.preventDefault()
        setName(element.target.value)
        console.log(name)
    }

    function handleSubmit(element){
        element.preventDefault()
        dispatch(getNameVideogames(name))
        setCurrentPage(1)
    }
    return(
        <div>
            <input  className={style.input} type= "text" placeholder="Buscar..." onChange={(element) => handleInputChange(element)}/>
            <button className={style.btn} type="submit" onClick={(element) => handleSubmit(element)}>Buscar</button>
            
        </div>
    )
}