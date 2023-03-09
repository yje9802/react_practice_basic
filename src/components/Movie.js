import PropTypes from "prop-types";

function Movie({ coverImg, title, summary, genres }) {
	return (
		<div>
			<img src={coverImg} alt={title} />
			<h2>{title}</h2>
			<div>
				{genres.map((g) => (
					<span key={g}>[{g}]</span>
				))}
			</div>
			<p>{summary}</p>
		</div>
	);
}

Movie.propTypes = {
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string,
	genres: PropTypes.array,
};

export default Movie;
