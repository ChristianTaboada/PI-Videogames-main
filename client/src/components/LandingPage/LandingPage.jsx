import React from "react";
import {Link} from "react-router-dom"
import style from './LandingPage.module.css'

const LandingPage = () =>{
    return(
        <div className={style.all}>
        <h1 className={style.title}>Gamer Quest</h1>
        <h2 className={style.subtitle}>Mas Que Un Entretenimiento,<br/> Una Aventura</h2>
        <Link to = '/home' style={{textDecoration: "none"}}>
            <button className={style.btn_home}>Ingresar</button>
        </Link>
        </div>
    )
}

export default LandingPage;