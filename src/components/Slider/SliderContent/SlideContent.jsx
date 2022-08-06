import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SlideContent.css';
import PlayButton from '../PlayButton/PlayButton';
import Casts from '../Casts/Casts';
import MoreInfoButton from '../MoreInfoButton/MoreInfoButton';
const NamavaURL = 'https://static.namava.ir';

const SlideContent = ({ slide }) => {
	const crews = [
		{
			title: 'ستارگان',
			crew: 'casts',
		},
		{
			title: 'کارگردان',
			crew: 'directors',
		},
	];
	const mediasPath = `${slide.id}-${slide.caption.replace(/\s/g, '-')}`;
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);
	return (
		<>
			<div className="slide-image-container">
				<img
					src={
						windowWidth >= 501
							? `${NamavaURL}${slide.coverLandscape}`
							: `${NamavaURL}${slide.coverPortrait}`
					}
					className="slide-image"
				/>
			</div>

			<div className="content">
				<div className="content-container">
					<Link to={mediasPath}>
						<img
							src={`https://static.namava.ir${slide.logoImageUrl}`}
							alt={slide.caption}
							className="content-logo"
						/>
					</Link>
					<div className="content-headline">
						<h2 className="content-caption">{slide.caption}</h2>
						{slide.isMarketable && (
							<span className="content-marketable">پردیس نماوا</span>
						)}
					</div>

					<p className="content-story">{slide.story} </p>

					<span className="content-teaser">{slide.teaserText}</span>

					<div className="content-btns">
						<PlayButton slide={slide} mediasPath={mediasPath} />
						{slide.trailerVideoUrl && (
							<button className="content-btn-trailer">پیش نمایش</button>
						)}
						<MoreInfoButton slide={slide} mediasPath={mediasPath} />
					</div>

					{crews.map((crew, index) => {
						return (
							<Casts
								crews={crew.crew}
								slide={slide}
								key={Math.floor(Math.random() * 100)}
							>{`${crew.title}:`}</Casts>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default SlideContent;
