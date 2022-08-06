import { useState, useEffect, useRef } from 'react';
import Tabs from '@mui/material/Tabs';
import { Tab } from '@mui/material';
import MovieCard from './MovieCard/MovieCard';
import './SearchMedias.css';
import MagnifyIcon from '../Icons/MagnifyIcon';
import ClearIcon from '../Icons/ClearIcon';
import debounce from 'lodash/debounce';
import fetchData from '../../services/fetchData';
import MovieCardContainer from './MovieCard/MovieCardContainer';
import WithLoading from './HOC/WithLoading';
const Enhanced = WithLoading(MovieCardContainer);

const SearchMedias = () => {
	const Medias = [
		{
			label: 'همه',
			category: 'all',
		},
		{
			label: 'فیلم ها',
			category: 'movie',
		},
		{
			label: 'سریال ها',
			category: 'series',
		},
	];

	const [query, setQuery] = useState('');
	const [pageNumber, setPageNumber] = useState(1);
	const [type, setType] = useState(0);
	const [items, setItems] = useState([]);
	const [totalItems, setTotalItems] = useState();
	const [show, setShow] = useState(false);
	const hasMore = useRef(false);
	const [isLoading, setIsLoading] = useState(false);

	let mediaType = Medias[type].category;

	useEffect(() => {
		setItems([]);
	}, [query, mediaType]);

	useEffect(() => {
		if (query) {
			setIsLoading(true);
			fetchData(query, pageNumber, mediaType).then((response) => {
				setIsLoading(false);
				if (!show) setShow((prev) => !prev);
				setItems((prev) => {
					return [...prev, ...response.items];
				});
				setTotalItems(response.total);
				hasMore.current = Boolean(response.items.length);
			});
		}
	}, [query, pageNumber, mediaType]);

	useEffect(() => {
		const handleScroll = debounce(
			(e) => {
				if (
					window.innerHeight + e.target.documentElement.scrollTop + 1 >=
						e.target.documentElement.scrollHeight &&
					hasMore.current
				) {
					setPageNumber((prev) => prev + 1);
				}
			},
			100,
			{ leading: true }
		);

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	function handleSearch(e) {
		setQuery(e.target.value);
		setPageNumber(1);
	}

	return (
		<div className="search-box-container">
			<div className="search-box">
				<MagnifyIcon />
				<input
					className="search-input"
					placeholder="فیلم، سریال، بازیگر و ژانر"
					value={query}
					onChange={handleSearch}
				/>
				<ClearIcon setSearchTerm={setQuery} setTotalItems={setTotalItems} />
			</div>

			{show && (
				<Tabs
					centered
					TabIndicatorProps={{
						style: {
							display: 'none',
						},
					}}
					className="nav-container"
					value={type}
					onChange={(event, newValue) => {
						setType(newValue);
						setPageNumber(1);
					}}
				>
					{Medias.map((item, index) => (
						<Tab
							sx={{
								color: 'white',
							}}
							className="nav-tabs"
							label={item.label}
							key={index}
						/>
					))}
				</Tabs>
			)}
			<Enhanced
				pageNumber={pageNumber}
				totalItems={totalItems}
				query={query}
				isLoading={isLoading}
				items={items}
			/>
		</div>
	);
};
export default SearchMedias;
