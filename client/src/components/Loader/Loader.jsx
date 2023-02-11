import style from './Loader.module.css'

export default function Loader(){
    return(
        <div className={style.loader}>
            <div className={style.imagen}/>
            <h3 className={style.loading}>LOADING . . .</h3>
        </div>
    )
}