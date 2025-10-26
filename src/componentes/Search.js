/* Para los snippets usar la extension: ES7+ React/Redux/React-Native snippets*/
import React from 'react'

function Search({handleInput}) {
  return (
    <div className='searchbox-wrap'>
        <input type='text' 
        placeholder='Buscar un auto...' 
        className='searchbox' 
        onChange={handleInput}
        />
    </div>
  )
}

export default Search