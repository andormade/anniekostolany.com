import React from 'react';
import { page } from './style.scss';
import Helmet from 'react-helmet';

const IMAGE_PATH = 'https://anniekostolany.com/images/';

export var Photo = props => (
	<img src={IMAGE_PATH + props.file} alt={props.alt} />
);

export var Page = props => {
	const title = props.title
		? props.title
		: 'Portrait &amp; Event Photography in Haarlem';

	return (
		<div className={page}>
			<Helmet>
				<meta name="description" content={props.description} />
				<title>{title} | Annie Kostolany</title>
				<meta
					property="og:title"
					content={title + ' | Annie Kostolany'}
				/>
				<meta property="og:description" content={props.description} />
				<meta property="og:image" content={IMAGE_PATH + props.image} />
			</Helmet>
			{props.children}
		</div>
	);
};
