import classes from "./Home.module.css"
import { useContext } from 'react'
import { AppContext } from "../state/context"
import PopularMovies from "../components/categories/PopularMovies"
import SearchMovies from "../components/categories/SearchMovies"

function Home() {
  let contextData = useContext(AppContext)
  let movies = contextData.allMovies
  let tv = contextData.allTV
  let family = contextData.allFamily
  let documentary = contextData.allDocumentary
  if(movies.length === 0 || tv.length === 0 || family.length === 0 || documentary.length === 0) {
		return (
			<h1>Loading...</h1>
		)
	} else {
    return (
      <div className={classes.container}>
          <h1 className={classes["h1-header"]}>All Movies</h1>
          <SearchMovies />
          <PopularMovies category="Popular Movies" movieData={movies} categoryRoute="movies" />
          <PopularMovies category="Popular TV Series" movieData={tv} categoryRoute="tv" />
          <PopularMovies category="Family" movieData={family} categoryRoute="family" />
          <PopularMovies category="Documentary" movieData={documentary} categoryRoute="documentary" />
      </div>
    )
  }
}

export default Home