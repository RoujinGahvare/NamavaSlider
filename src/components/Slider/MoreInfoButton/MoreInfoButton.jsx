import React from 'react';
import { Link } from 'react-router-dom';
import MoreInfoIcon from '../../Icons/MoreInfoIcon';
import './MoreInfoButton.css';

const MoreInfoButton = ({ slide, mediasPath }) => {
	return (
		<Link to={mediasPath} className="content-moreInfo">
			<MoreInfoIcon />
			<span>توضیحات بیشتر</span>
		</Link>
	);
};

export default MoreInfoButton;
