import React from 'react';
import { useState, useEffect } from 'react';
import './Slider.css';
import { Route, Routes } from 'react-router';
import fetchSliderData from '../../services/fetchSliderData';
import Arrows from './Arrows/Arrows';
import SlideContent from './SliderContent/SlideContent';
import Dots from './Dots/Dots';

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [items, setItems] = useState([]);
	const [slideLength, setSlideLength] = useState(0);

	const nextSlide = () => {
		currentSlide < slideLength - 1
			? setCurrentSlide((prev) => prev + 1)
			: setCurrentSlide(0);
	};
	const prevSlide = () => {
		currentSlide > 0
			? setCurrentSlide((prev) => prev - 1)
			: setCurrentSlide((prev) => prev - 1 + slideLength);
	};

	useEffect(() => {
		fetchSliderData().then((res) => {
			setItems(res.items);
			setSlideLength(res.items.length);
			console.log(items, slideLength);
		});
	}, []);
	useEffect(() => {
		let interval = setInterval(nextSlide, 7000);
		return () => clearInterval(interval);
	}, [currentSlide, nextSlide]);

	useEffect(() => {
		setCurrentSlide(0);
	}, []);

	return (
		<>
			<div className="slider">
				{items.map((slide, index) => {
					return (
						<div
							className={index === currentSlide ? 'slide current' : 'slide'}
							key={slide.id}
						>
							{index === currentSlide && <SlideContent slide={slide} />}
							<Arrows handleNextSlide={nextSlide} handlePrevSlide={prevSlide} />
						</div>
					);
				})}
				<Dots slide={items} currentSlide={currentSlide} />
			</div>
		</>
	);
};

export default Slider;
