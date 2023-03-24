import { useState, useEffect, createContext } from "react"

let AppContext = createContext()
function AppContextProvider({children}) {
  let [allMovies, setAllMovies] = useState([])
  let [allTV, setAllTV] = useState([])
  let [allFamily, setAllFamily] = useState([])
  let [allDocumentary, setAllDocumentary] = useState([])
  async function getMovies() {
    let url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=66948c269eebd46447b46fb977e5def4'
    let response = await fetch(url)
    let responseData = await response.json()
    setAllMovies(responseData.results)
  }
  async function getTV() {
    let url = 'https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=66948c269eebd46447b46fb977e5def4&language=en-US'
    let response = await fetch(url)
    let responseData = await response.json()
    setAllTV(responseData.results)
  }
  async function getFamily() {
    let url = 'https://api.themoviedb.org/3/discover/movie?with_genres=10751&api_key=66948c269eebd46447b46fb977e5def4'
    let response = await fetch(url)
    let responseData = await response.json()
    setAllFamily(responseData.results)
  }
  async function getDocumentary() {
    let url = 'https://api.themoviedb.org/3/discover/movie?with_genres=99&api_key=66948c269eebd46447b46fb977e5def4'
    let response = await fetch(url)
    let responseData = await response.json()
    setAllDocumentary(responseData.results)
  }
  useEffect(() => {
      getMovies()
      getTV()
      getFamily()
      getDocumentary()
  }, [])
  let contextValue = {
    allMovies,
    allTV,
    allFamily,
    allDocumentary
  }
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export { AppContext, AppContextProvider }