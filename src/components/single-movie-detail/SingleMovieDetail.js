import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function SingleMovieDetail({getOneItem}) {
	let [oneTrailer, setOneTrailer] = useState({})
	let {movieId} = useParams()
	let result = getOneItem(movieId)
	async function getOneTrailer(movieId) {
		let url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=66948c269eebd46447b46fb977e5def4&language=en-US`
		let response = await fetch(url)
		let responseData = await response.json()
		let myTrailer = responseData.results.find(item => item.type === "Trailer")
		setOneTrailer(myTrailer)
	}
	useEffect(() => {
		getOneTrailer(movieId)
	}, [movieId])
	if(!result) {
		return (
			<h1>Loading...</h1>
		)
	} else {
		return (
			<div>
				<Link to="/">Return Home</Link>
				<h1>Movie Details</h1>
				<div>
					<section>
						<h3>{result.title}</h3>
						<img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt='Movie' />
						<h3>Overview</h3>
						<p>{result.overview}</p>
					</section>
					{!oneTrailer ?
					<section>
						<h3>Trailer Not Available</h3>
					</section> :
					<section>
						<h3>Movie Trailer</h3>
						<iframe width="560" height="315" 
							src={`https://www.youtube.com/embed/${oneTrailer.key}`} 
							title={`${oneTrailer.name}`} allow="accelerometer; 
							autoplay; clipboard-write; encrypted-media; gyroscope; 
							picture-in-picture" allowFullScreen>
						</iframe>
					</section>}
				</div>
			</div>
		)
	}
}
export default SingleMovieDetail