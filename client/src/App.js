import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import AddVideogame from './components/AddVideogame/AddVideogame';
import DetailVideogame from './components/DetailVideogame/DetailVideogame';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/'


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