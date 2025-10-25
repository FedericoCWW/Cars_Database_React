import React from "react";
import Search from './componentes/Search.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Holaaaa!!</h1>
      </header>
      <main> {/* Aca van los componentes (barra de busqueda, resultados, popups con detalles, etc)*/}
        <Search />
      </main>
    </div>
  );
}

export default App;
