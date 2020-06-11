import React from 'react'
import '../index.css'
function Search ({ handleInput, search }) {
	return (
		<section className="searchbox-wrap">
			<input 
				type="text" 
				placeholder="Search for a movie..." 
				className="searchbox" 
				onChange={handleInput}
				
			/>
			<button  className="but" onClick={search}>SEARCH</button>
		</section>
	)
}

export default Search
