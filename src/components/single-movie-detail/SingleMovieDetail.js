import classes from "./SingleMovieDetail.module.css"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LinkButton from '../../ui/LinkButton'

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
			<div className={classes.container}>
				<div>
					<LinkButton to="/">Return Home</LinkButton>
				</div>
				<h1>Movie Details</h1>
				<div className={classes.details}>
					<section className={classes["image-section"]}>
						<h3>{result.title}</h3>
						<div className={classes["image-div"]}>
							<img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt='Movie' />
						</div>
						<h3>Overview</h3>
						<p>{result.overview}</p>
					</section>
					{!oneTrailer ?
					<section className={classes["no-trailer-section"]}>
						<h3>Trailer Not Available</h3>
					</section> :
					<section className={classes["trailer-section"]}>
						<h3>Movie Trailer</h3>
						<div>
							<iframe width="560" height="315" 
								src={`https://www.youtube.com/embed/${oneTrailer.key}`} 
								title={`${oneTrailer.name}`} allow="accelerometer; 
								autoplay; clipboard-write; encrypted-media; gyroscope; 
								picture-in-picture" allowFullScreen>
							</iframe>
						</div>
					</section>}
				</div>
			</div>
		)
	}
}
export default SingleMovieDetail