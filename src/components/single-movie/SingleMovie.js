import classes from "./SingleMovie.module.css"
import React from 'react'
import { Link } from 'react-router-dom'

function SingleMovie({id, title, image}) {
	return (
		<div className={classes.container}>
            <div className={classes["image-div"]}>
                <Link to={`/movies/${id}`}>
				    <img src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} />
			    </Link>
            </div>
            <h3>{title}</h3>
		</div>
	)
}
export default SingleMovie