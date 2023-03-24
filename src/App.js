import { useContext } from "react"
import { Routes, Route } from "react-router-dom"
import { AppContext } from "./state/context"
import Home from "./routes/Home"
import SingleMovieDetail from "./components/single-movie-detail/SingleMovieDetail"
import ErrorPage from "./routes/ErrorPage"

function App() {
  let contextData = useContext(AppContext)
  console.log(contextData)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:movieId" element={<SingleMovieDetail getOneItem={contextData.getOneMovie} />} />
      <Route path="/movies/:movieId" element={<SingleMovieDetail getOneItem={contextData.getOneTV} />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App