import React from 'react';

const MobileNavIcon = ({ toggleClass }) => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="30"
				height="30"
				viewBox="0 0 30 30"
				className="icon-mobile-nav"
				onClick={() => {
					toggleClass();
				}}
			>
				<path
					fill="#fff"
					d="M23.7 21.122H6.98a.98.98 0 1 0 0 1.961H23.7a.98.98 0 1 0 0-1.961zm0-7.562H6.98a.981.981 0 1 0 0 1.961H23.7a.981.981 0 1 0 0-1.961zM6.98 7.96H23.7a.981.981 0 1 0 0-1.961H6.98a.981.981 0 1 0 0 1.961z"
				></path>
			</svg>
		</>
	);
};

export default MobileNavIcon;
