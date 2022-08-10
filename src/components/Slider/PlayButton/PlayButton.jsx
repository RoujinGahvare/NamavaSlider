import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Play from '../../Icons/Play';
import './PlayButton.css';

const PlayButton = ({ slide, mediasPath }) => {
	return (
		<Link to={mediasPath} className="content-btn-play">
			<Play />
			<span>
				{slide.type === 'PurchasableMovie'
					? 'خرید بلیط'
					: slide.type === 'Movie'
					? 'پخش فیلم'
					: 'پخش سریال'}
			</span>
		</Link>
	);
};

export default PlayButton;
