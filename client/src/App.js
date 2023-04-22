import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import AddVideogame from './components/AddVideogame/AddVideogame';
import DetailVideogame from './components/DetailVideogame/DetailVideogame';
import axios from 'axios';
// Para ejecutar el Back en localhost!!!!!!!!!
//axios.defaults.baseURL = 'http://localhost:3001/';

// Para ejecutar el Back en la Web!!!!!!!!!!!
//axios.defaults.baseURL = 'pi-videogames-main-production-cd7f.up.railway.app';
axios.defaults.baseURL =
	process.env.REACT_APP_API ||
	'pi-videogames-main-production-cd7f.up.railway.app/';



function App() {
  return (
    <div className="App">
      <Route exact path = "/" component={LandingPage}/>
      <Route  path = "/home" component={Home}/>
      <Route  path = "/videogames" component={AddVideogame}/>
      <Route  exact path = "/videogame/:id" component={DetailVideogame}/>
    </div>
  );
}

export default App;
