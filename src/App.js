import React, {useState} from "react";
import axios from 'axios';
import Search from './componentes/Search.js'
import Results from './componentes/Results.js'
import { API_CONFIG } from './services/config.js';
import "@picocss/pico"; 
// https://api-ninjas.com/api/cars

function App() {
  const apiurl = API_CONFIG.base_url;
  const search = (e) => {
    if (e.key === 'Enter') {
      axios(apiurl + "/"+ state.s).then(({data}) => {
        let results = data.results
        console.log(data)
        setState(prevState => {
          return {...prevState, results:results}
        })
      });
    }
  }

  const [state, setState] = useState({
    s: "",
    resolve: [],
    selected: {}
  });

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return {...prevState, s:s}
    });
    console.log(state.s);
  }

  return (
    <div className="App">
      <header className="App-header container">
        <h1>Dios que hice</h1>
      </header>
      <main className="container"> {/* Aca van los componentes (barra de busqueda, resultados, popups con detalles, etc)*/}
        <Search handleInput={handleInput} search={search}/>
        <Results results={state.results}/>
      </main>
    </div>
  );
}

export default App;
