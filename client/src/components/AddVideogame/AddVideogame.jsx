import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres,getAllVideogames,PostVideogames } from "../../actions";
import style from './AddVideogame.module.css'


const validate = (form) =>{
    var errors = {};
    if(!form.name){
        errors.name = 'Name is required';
    }else if(form.name.length > 80){
        errors.name = 'Name is too long(Max = 80 characters)'
    }

    if(!form.description){
        errors.description = 'Description is required';
    }else if(form.description.length > 1300){
        errors.description = 'Description is too long (Max = 1300 characters)'
    }
    
    if(!form.rating){
        errors.rating = 'Rating is required';
    }

    if(!form.released){
        errors.released = 'Date of release is required'
    }

    if(!form.image){
        errors.image = 'Image URL is required';
    }

    if(form.genres.length < 1){
        errors.genres = 'Minimun one Genre is required'
    }

    if(form.platforms.length < 1){
        errors.platforms = 'Minimun one Platforms is required'
    }

    return errors;
}

const AddVideogame = () =>{

    const dispatch = useDispatch();
    const genres = useSelector((state) =>state.genres)
    const platformsApi = [
        "PC", "PlayStation 5", "PlayStation 4", "PlayStation 3", "Xbox One", "Xbox Series S/X", "Xbox 360", "Xbox",
        "Nintendo Switch", "Nintendo 3DS", "Nintendo DS", "Nintendo DSi", "iOS", "Android", "macOS", "Linux"]
    //const platforms = useSelector((state) =>state.platforms)

    const [form,setForm] = useState({
        name: "",
        description: "",
        released: "",
        rating: "",
        genres: [],
        platforms: [],
        image:"",


    })

    const [errors,setErrors] = useState({
        name: "",
        description: "",
        released: "",
        rating: "",
        genres: [],
        platforms: [],
        image:"",
    })

    
    useEffect(()=>{
        dispatch(getGenres());
        dispatch(getAllVideogames());
    },[dispatch]);

    const changeHandler = (event) =>{
        const property= event.target.name;
        const value = event.target.value;
        
       setErrors(validate({...form, [property]:value}))
        
        setForm({...form, [property]:value})

    }
    
    const handleSelectGenre=(event)=>{
        
        const value = event.target.value;
        setForm({
            ...form,
            genres: [...form.genres, value]
        })
    }
    
    const handleSelectPlatforms=(event)=>{
        
        const value = event.target.value;
        setForm({
            ...form,
            platforms: [...form.platforms, value]
        })
    }
    const submitHandler = (event) =>{
        event.preventDefault()
        console.log(form);
        dispatch(PostVideogames(form))
        setForm({
            name: "",
            description: "",
            released: "",
            rating: "",
            genres: [],
            platforms: [],
            image:"",
        })
    }
    
    
    return(
        <form onSubmit={submitHandler} className={style.form}>
            <div className={style.contenedor}>
                <h2 className={style.titulo}>Crea Tu Propio Videojuego!</h2>
                <label className={style.label}>Nombre: </label>
                <input type="text" value= {form.name} onChange={changeHandler} className={style.input} name= "name"></input>
                {errors.name && <span className={style.error}> {errors.name}</span>}
            </div>
            <div className={style.contenedor}>
                <label className={style.label}>Descripcion: </label>
                <input type= "text" value = {form.description} onChange={changeHandler} className={style.input} name= "description"></input>
                {errors.description && <span className={style.error}> {errors.description}</span>}
            </div>
            <div className={style.contenedor}>
                <label className={style.label}>Fecha de lanzamiento: </label>
                <input type= "date" value = {form.released} onChange={changeHandler} className={style.input} name= "released"></input>
                {errors.released && <span className={style.error}> {errors.released}</span>}
            </div>
            <div className={style.contenedor}>
                <label className={style.label}>Imagen: </label>
                <input type = "text" value = {form.image} onChange={changeHandler} className={style.input} name= "image"></input>
                {errors.image && <span className={style.error}> {errors.image}</span>}
            </div>
            <div className={style.contenedor}>
                <label className={style.label}>Generos: </label>
                <select onChange={(event) =>handleSelectGenre(event)} className={style.input}>
                <option disabled selected defaultValue>Seleccionar</option>
                    {genres?.map((element) =>(
                        <option value={element.name}>{element.name}</option>
                    ))}
                </select>
                {errors.genres && <span className={style.error}> {errors.genres}</span>}
                <ul><li className={style.lista}>{form.genres.map(element =>element + " ,")}</li></ul>
            </div>
            <div className={style.contenedor}>
                <label className={style.label}>Plataformas: </label>
                <select onChange={(event) =>handleSelectPlatforms(event)} className={style.input}>
                <option disabled selected defaultValue>Seleccionar</option>
              {platformsApi?.map((element) => (
                  <option value={element} key={element}>
                  {element}
                </option>
              ))}
                </select>
              {errors.platforms && <span className={style.error}> {errors.platforms}</span>}
                <ul><li className={style.lista}>{form.platforms.map(element =>element + " ,")}</li></ul>
            </div>
            <div className={style.contenedor}>
                <label className={style.label}>Rating: </label>
                <input type= "number" min= "0" max ="10" value = {form.rating} onChange={changeHandler} className={style.input} name= "rating"></input>
                {errors.rating && <span className={style.error}> {errors.rating}</span>}
            </div>
            <button  disabled ={
                form.name === '' || errors.name ||
                form.description === '' || errors.description ||
                form.rating === '' || errors.rating ||
                form.released === '' || errors.released ||
                form.image === '' || errors.image ||
                form.genres === '' || errors.genres ||
                form.platforms === '' || errors.platforms
            } type ="submit">Crear Videojuego</button>
        </form>
    )
}

export default AddVideogame;