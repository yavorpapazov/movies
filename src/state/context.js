import { useState, useEffect, createContext } from "react"

let AppContext = createContext()
function AppContextProvider({children}) {
    let [allMovies, setAllMovies] = useState([])
    async function getMovies() {
		let url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=66948c269eebd46447b46fb977e5def4'
		let response = await fetch(url)
		let responseData = await response.json()
		setAllMovies(responseData.results)
	}
    useEffect(() => {
        getMovies()
    }, [])
  let contextValue = {
    allMovies
  }
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export { AppContext, AppContextProvider }