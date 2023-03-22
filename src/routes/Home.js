import classes from "./Home.module.css"
import PopularMovies from "../components/categories/PopularMovies"

function Home() {
  return (
    <div>
        <h1 className={classes["h1-header"]}>All Movies</h1>
        <PopularMovies />
    </div>
  )
}

export default Home