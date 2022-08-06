import React from 'react';
import './Arrows.css';

const Arrows = ({ handleNextSlide, handlePrevSlide }) => {
	return (
		<div className="arrow-container">
			<div className="arrow">
				<div className="circle next" onClick={handleNextSlide} />
				<div className="circle prev" onClick={handlePrevSlide} />
			</div>
		</div>
	);
};

export default Arrows;
