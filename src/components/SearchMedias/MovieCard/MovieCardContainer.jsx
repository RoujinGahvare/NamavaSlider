import React from 'react';
import MovieCard from './MovieCard';
import NoResualtFoundContent from '../ContentDescriptionOnSearch/NoResualtFoundContent';
import SearchMediaContent from '../ContentDescriptionOnSearch/SearchMediaContent';
import './MovieCardContainer.css';

const MovieCardContainer = ({ totalItems, query, items }) => {
	return (
		<>
			{totalItems > 0 ? (
				<div className="container-box">
					<div className="container">
						{items.map((item, index) => {
							return <MovieCard media={item} key={item.id} />;
						})}
					</div>
				</div>
			) : query && totalItems === 0 ? (
				<NoResualtFoundContent />
			) : (
				<SearchMediaContent />
			)}
		</>
	);
};

export default MovieCardContainer;
