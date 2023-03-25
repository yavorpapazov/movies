import { useState, useEffect, createContext } from "react"

let AppContext = createContext()
function AppContextProvider({children}) {
  let [allMovies, setAllMovies] = useState([])
  let [allTV, setAllTV] = useState([])
  let [allFamily, setAllFamily] = useState([])
  let [allDocumentary, setAllDocumentary] = useState([])
  let [allSearchItems, setAllSearchItems] = useState([])
	let [movieItem, setMovieItem] = useState("")
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
  async function handleSubmit(e) {
		e.preventDefault()
		let url = `https://api.themoviedb.org/3/search/movie?api_key=66948c269eebd46447b46fb977e5def4&language=en-US&page=1&include_adult=false&query=${movieItem}`
		let response = await fetch(url)
		let responseData = await response.json()
		setAllSearchItems(responseData.results)
		setMovieItem("")
	}
  useEffect(() => {
    getMovies()
    getTV()
    getFamily()
    getDocumentary()
  }, [])
  function getOneMovie(oneMovieId) {
		let tempMovies = [...allMovies]
		let oneMovie = tempMovies.find(item => item.id === Number(oneMovieId))
		return oneMovie
	}
  function getOneTV(oneTVId) {
		let tempTV = [...allTV]
		let oneTV = tempTV.find(item => item.id === Number(oneTVId))
		return oneTV
	}
	function getOneFamily(oneFamilyId) {
		let tempFamily = [...allFamily]
		let oneFamily = tempFamily.find(item => item.id === Number(oneFamilyId))
		return oneFamily
	}
	function getOneDocumentary(oneDocumentaryId) {
		let tempDocumentary = [...allDocumentary]
		let oneDocumentary = tempDocumentary.find(item => item.id === Number(oneDocumentaryId))
		return oneDocumentary
	}
  function getOneSearch(oneSearchId) {
		let tempSearch = [...allSearchItems]
		let oneSearch = tempSearch.find(item => item.id === Number(oneSearchId))
		return oneSearch
	}
  let contextValue = {
    allMovies,
    allTV,
    allFamily,
    allDocumentary,
    getOneMovie,
    getOneTV,
    getOneFamily,
    getOneDocumentary,
    handleSubmit,
    allSearchItems,
    setAllSearchItems,
    movieItem,
    setMovieItem,
    getOneSearch
  }
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

export { AppContext, AppContextProvider }