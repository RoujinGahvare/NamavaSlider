import './Header.css';
import { useState, useEffect, useRef } from 'react';
import logo from '../../img/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import HomeIcon from '../Icons/HomeIcon';
import MovieIcon from '../Icons/MovieIcon';
import MagIcon from '../Icons/MagIcon';
import CategoryIcon from '../Icons/CategoryIcon';
import SeriesIcon from '../Icons/SeriesIcon';
import KidsIcon from '../Icons/KidsIcon';
import LatestIcon from '../Icons/LatestIcon';
import MobileNavIcon from '../Icons/MobileNavIcon';
import Magnify from '../Icons/Magnify';

const Header = () => {
	const headerTabs = [
		{ content: 'خانه', path: '/', icon: <HomeIcon /> },
		{ content: 'فیلم ها', path: '/movies', icon: <MovieIcon /> },
		{ content: 'سریال ها', path: '/series', icon: <SeriesIcon /> },
		{ content: 'دسته بندی', path: '/category', icon: <CategoryIcon /> },
		{ content: 'تازه ها', path: '/latest', icon: <LatestIcon /> },
		{ content: 'کودکان', path: '/kids', icon: <KidsIcon /> },
		{ content: 'نماوا مگ', path: '/mag', icon: <MagIcon /> },
	];
	const [isActive, setIsActive] = useState(false);
	const toggleClass = () => {
		setIsActive(!isActive);
	};
	return (
		<div className={isActive ? 'header nav-open' : 'header'}>
			<MobileNavIcon toggleClass={toggleClass} />
			<nav className="main-nav">
				<div className="main-nav-links">
					<a href="https://www.namava.ir/">
						<img className="logo" alt="Namava logo" src={logo} />
					</a>
					<ul className="main-nav-items">
						{headerTabs.map((item, index) => (
							<div className="nav-blocks" key={index}>
								<div className="Icons">{item.icon}</div>
								<NavLink
									to={item.path}
									key={Math.floor(Math.random() * 100)}
									style={({ isActive }) => ({
										color: isActive ? '#6eb8ff' : '#fff',
									})}
								>
									{item.content}
								</NavLink>
							</div>
						))}
					</ul>
				</div>

				<div className="left">
					<Link to="/search">
						<Magnify />
					</Link>
					<Link to="/" className="btn ">
						خرید اشتراک
					</Link>
					<Link to="/" className="btn btn-full">
						ورود/ ثبت نام
					</Link>
				</div>
			</nav>
		</div>
	);
};
export default Header;
