import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions/index";
import { useEffect } from "react";
import style from './DetailVideogame.module.css'

export default function Detail (props){
    //console.log(props)
    const dispatch = useDispatch();
    const id = props.match.params.id

    useEffect(() => {
        dispatch(getDetail(id));
        
      }, [dispatch, id]);

    const myVideogame = useSelector(state => state.detail)
    console.log(myVideogame)

    return (
        <div className={style.all}>
            {
                myVideogame.length >0 ?
                <div className={style.form}>
                    <h1 className={style.name}>{myVideogame[0].name}</h1>
                    <img  className={style.img} src= {myVideogame[0].image} />
                    <p className={style.description}>description: {myVideogame[0].description}</p>
                    <p className={style.rating}>rating: {myVideogame[0].rating}</p>
                    <h4 className={style.genres}>{!myVideogame[0].createdInDb? myVideogame[0].genres + ' ' : myVideogame[0].genres.map(element => element.name + (' '))}</h4>
                    <h4 className={style.platforms}>{myVideogame[0].platforms + ' '}</h4>
                    <p className={style.released}>released: {myVideogame[0].released}</p>
                    
                </div>
                : <p>Loading...</p>
            }

            <Link to = "/home">
                <button className={style.btn_home}>Volver</button>
            </Link>
        </div>
    )


}