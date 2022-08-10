import React from 'react';
import { Link } from 'react-router-dom';
import './Casts.css';

const Casts = ({ slide, crews, children }) => {
	return (
		<div className="content-casts">
			{slide[crews].length !== 0 && <span>{children}</span>}
			{slide[crews].map((crew, index, arr) => {
				return (
					<>
						<Link
							to={`person-${crew.castId}-${crew.castName.replace(/\s/g, '-')}`}
							key={`${crew.castId}${Math.floor(Math.random() * 100)}`}
						>
							{crew.castName}
						</Link>
						{arr.length - 1 !== index ? ' - ' : ''}
					</>
				);
			})}
		</div>
	);
};

export default Casts;
