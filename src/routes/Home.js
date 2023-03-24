import classes from "./Home.module.css"
import React, { useContext } from 'react'
import { AppContext } from "../state/context"
import PopularMovies from "../components/categories/PopularMovies"

function Home() {
  let contextData = useContext(AppContext)
  let movies = contextData.allMovies
  let tv = contextData.allTV
  let family = contextData.allFamily
  let documentary = contextData.allDocumentary
  return (
    <div>
        <h1 className={classes["h1-header"]}>All Movies</h1>
        <PopularMovies category="Popular Movies" movieData={movies} />
        <PopularMovies category="Popular TV Series" movieData={tv} />
        <PopularMovies category="Family" movieData={family} />
        <PopularMovies category="Documentary" movieData={documentary} />
    </div>
  )
}

export default Home