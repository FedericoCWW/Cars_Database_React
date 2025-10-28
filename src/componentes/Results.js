import React from 'react'
import Result from './Result'

function Results({ results }) {
  console.log('🔍 Results - datos recibidos:', results);
  
  // Validación más específica
  if (!results || results.length === 0) {
    return (
      <div className='results'>
        <p>No hay resultados para mostrar</p>
      </div>
    );
  }

  console.log('✅ Primer elemento del array:', results[0]);
  
  return (
    <div className='results'>
      {results.map((result, index) => (
        <Result key={index} result={result} />
      ))}
    </div>
  )
}

export default Results