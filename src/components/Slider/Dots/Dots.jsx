import React from 'react';
import './Dots.css';

const Dots = ({ slide, currentSlide }) => {
	return (
		<div className="dots">
			{slide.map((slide, indexSlide) => (
				<span
					key={indexSlide}
					className={indexSlide === currentSlide ? 'dot active' : 'dot'}
				/>
			))}
		</div>
	);
};

export default Dots;
