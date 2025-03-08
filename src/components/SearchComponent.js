import React from 'react'

function SearchComponent() {
  return (
    <div className='searchComponent'>
        
            <input 
                type='text' 
                placeholder='Search...' 
                className='searchInput' 
            />
            <button className='searchButton'>Search</button>

    </div>
  )
}

export default SearchComponent