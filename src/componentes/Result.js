import React from 'react'

function Result({ result }) {
  console.log('🔍 Result - datos recibidos:', result);
  
  if (!result) {
    return (
      <div className='result'>
        <p>Error: No hay datos</p>
      </div>
    );
  }

  // Asegurarnos de que las propiedades existen
  const { url, anime_name } = result;
  
  console.log('✅ URL:', url);
  console.log('✅ Anime name:', anime_name);

  return (
    <div className='result'>
      <img 
        src={url} 
        alt={`Escena de ${anime_name}`}
        style={{ maxWidth: '300px', display: 'block' }}
      />
      <h3>{anime_name}</h3>
    </div>
  )
}

export default Result