import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import SingleMovieDetail from "./components/single-movie-detail/SingleMovieDetail"
import ErrorPage from "./routes/ErrorPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:movieId" element={<SingleMovieDetail />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App