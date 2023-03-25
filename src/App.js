import { useContext } from "react"
import { Routes, Route } from "react-router-dom"
import { AppContext } from "./state/context"
import Home from "./routes/Home"
import SingleMovieDetail from "./components/single-movie-detail/SingleMovieDetail"
import ErrorPage from "./routes/ErrorPage"

function App() {
  let contextData = useContext(AppContext)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:movieId" element={<SingleMovieDetail getOneItem={contextData.getOneSearch} />} />
      <Route path="/movies/:movieId" element={<SingleMovieDetail getOneItem={contextData.getOneMovie} />} />
      <Route path="/tv/:movieId" element={<SingleMovieDetail getOneItem={contextData.getOneTV} />} />
      <Route path="/family/:movieId" element={<SingleMovieDetail getOneItem={contextData.getOneFamily} />} />
      <Route path="/documentary/:movieId" element={<SingleMovieDetail getOneItem={contextData.getOneDocumentary} />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App