import classes from "./SearchMovies.module.css"
import { useContext } from 'react'
import { AppContext } from "../../state/context"
import Responsive from '../../ui/Responsive'
import SingleMovie from '../single-movie/SingleMovie'
import Button from "../../ui/Button"

function SearchMovies() {
    let contextData = useContext(AppContext)
	let result = contextData.allSearchItems.map(item => <SingleMovie key={item.id} id={item.id} title={item.title} image={item.poster_path} categoryRoute="search" />)
	let carousel = (
		<section>
			<h1>Search Items</h1>
			<Responsive resultMovies={result} />
		</section>
	)
	return (
		<div className={classes.container}>
			<div className={classes["container-form"]}>
				<form className={classes["search-form"]} onSubmit={contextData.handleSubmit}>
					<div>
						<label htmlFor="movieItems"><h3>Search movies...</h3></label>
					</div>
					<div className={classes["input-button"]}>
						<div>
							<input type="text" id="movieItems" value={contextData.movieItem} onChange={(e) => contextData.setMovieItem(e.target.value)} required/>
						</div>
						<div>
							<Button addClass="btn">Search</Button>
						</div>
					</div>
				</form>
				<div>
					<Button addClass="btn" onClick={() => contextData.setAllSearchItems([])}>Remove Items</Button>
				</div>
			</div>
			{contextData.allSearchItems.length !== 0 && carousel}
		</div>
	)
}
export default SearchMovies