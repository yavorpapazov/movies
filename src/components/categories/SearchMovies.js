import classes from "./SearchMovies.module.css"
import { useContext } from 'react'
import { AppContext } from "../../state/context"
import Responsive from '../../ui/Responsive'
import SingleMovie from '../single-movie/SingleMovie'

function SearchMovies() {
    let contextData = useContext(AppContext)
	let result = contextData.allSearchItems.map(item => <SingleMovie key={item.id} id={item.id} title={item.title} image={item.poster_path} categoryRoute="search" />)
	let myCarousel = (
		<section className={classes.container}>
			<h1>Search Items</h1>
			<Responsive resultMovies={result} />
		</section>
	)
	return (
		<div>
			<form onSubmit={contextData.handleSubmit}>
                <div>
                    <label htmlFor="movieItems"><h3>Search movies...</h3></label>
                </div>
				<div>
                    <input type="text" id="movieItems" value={contextData.movieItem} onChange={(e) => contextData.setMovieItem(e.target.value)}/>
                </div>
				<div>
                    <button>Search</button>
                </div>
			</form>
			<button onClick={() => contextData.setAllSearchItems([])}>Clear Search</button>
			{contextData.allSearchItems.length !== 0 && myCarousel}
		</div>
	)
}
export default SearchMovies