import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({ id, coverImg, title, summary, genres }) {
	return (
		<div>
			<img src={coverImg} alt={title} />
			<h2>
				<Link to={`/movie/${id}`}>{title}</Link>
			</h2>
			<div>
				{genres.map((g) => (
					<span key={g}>[{g}]</span>
				))}
			</div>
			<p>
				{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
			</p>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string,
	genres: PropTypes.array,
};

export default Movie;
