import classes from "./PopularMovies.module.css"
import Responsive from '../../ui/Responsive'
import SingleMovie from '../single-movie/SingleMovie'

function PopularMovies({category, movieData}) {
	let result = movieData.map(item => <SingleMovie key={item.id} id={item.id} title={item.title} image={item.poster_path} />)
	return (
		<section className={classes.container}>
			<h1>{category}</h1>
			<Responsive resultMovies={result} />
		</section>
	)
}
export default PopularMovies