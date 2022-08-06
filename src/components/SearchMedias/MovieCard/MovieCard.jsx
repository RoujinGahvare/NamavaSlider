import './MovieCard.css';
import React from 'react';

const MovieCard = ({ media }) => {
	return (
		<div className="movie">
			<div>
				<img
					src={
						media.image_url !== 'N/A'
							? media.image_url
							: 'https://via.placeholder.com/400'
					}
					alt={media.name}
				/>
			</div>
			<div>
				<span>{media.name}</span>
			</div>
		</div>
	);
};

export default MovieCard;
