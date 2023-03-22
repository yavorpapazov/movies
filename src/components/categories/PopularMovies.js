import React, { useContext } from 'react'
import { AppContext } from '../../state/context'
import SingleMovie from '../single-movie/SingleMovie'

function PopularMovies() {
	let contextData = useContext(AppContext)
	let result = contextData.allMovies.map(item => <SingleMovie key={item.id} id={item.id} title={item.title} image={item.poster_path} />)
	return (
		<section>
			<h1>Popular Movies</h1>
            {result}
		</section>
	)
}
export default PopularMovies