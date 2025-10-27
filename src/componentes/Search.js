/* Para los snippets usar la extension: ES7+ React/Redux/React-Native snippets*/
import React from 'react'

function Search({handleInput, search}) {
  return (
    <div className='searchbox-wrap'>
        <input type='text' 
        placeholder='Busca algo...' 
        className='searchbox' 
        onChange={handleInput}
        onKeyUp={search}
        />
    </div>
  )
}

export default Search