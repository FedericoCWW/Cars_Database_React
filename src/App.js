import React, {useState} from "react";
import axios from 'axios';
import Search from './componentes/Search.js'
// https://api-ninjas.com/api/cars

function App() {
  const apiurl = './services/config.js'; 
  const search = (e) => {
    if (e.key === 'Enter') {
      axios(apiurl + "&s=")
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
      <header className="App-header">
        <h1>Holaaaa!!</h1>
      </header>
      <main> {/* Aca van los componentes (barra de busqueda, resultados, popups con detalles, etc)*/}
        <Search handleInput={handleInput}/>
      </main>
    </div>
  );
}

export default App;
