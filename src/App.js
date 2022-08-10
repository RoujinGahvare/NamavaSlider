import { useState, useEffect, useRef } from 'react';
import { Route, Rotes, Routes } from 'react-router';
import Header from './components/Header/Header';
import './App.css';
import SearchMedias from './components/SearchMedias/SearchMedias';
import Slider from './components/Slider/Slider';


const App = () => {



	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Slider />} />
				<Route path='search' element={<SearchMedias />} />
			</Routes>



		</>
	);
};

export default App;
