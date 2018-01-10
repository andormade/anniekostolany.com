import React from 'react';
import { Page, Photo } from './Page';
import BookNowButton from '../BookNowButton';
import Helmet from 'react-helmet';

export default () => (
	<Page>
		<Helmet>
			<meta name="description" content="Photo walk Amsterdam & Haarlem" />
			<title>Photo walk Amsterdam & Haarlem | Annie Kostolany</title>

			<meta
				property="og:title"
				content="Photo walk Amsterdam & Haarlem | Annie Kostolany"
			/>
			<meta
				property="og:description"
				content="Photo walk Amsterdam & Haarlem"
			/>
			<meta
				property="og:image"
				content="https://anniekostolany.com/images/rebellion/photo_walk_amsterdam/1.jpg"
			/>
		</Helmet>
		<h2> Photo walk Amsterdam & Haarlem </h2>
		<p>
			{' '}
			Amsterdam is the well-known city of freedom. You can be here who you
			are, and you don't have to be afraid of discrimination or
			negativity. But besides all of this, the city is utterly romantic
			too. As soon as you walk through the narrow streets and cross the
			canals on one of the million charming bridges you will immediately
			know what I mean. It is one of my favourite places on Earth. There
			is an other place too, less known but just as spectacular: Haarlem.
			This little town is exactly like a mini-Amsterdam. The reason I like
			is because it's not as crowded as the center of Amsterdam so it's
			easier to get the perfect photos here. Whatever location you prefer,
			leave the selfie stick home for now, and book a photo session with
			me instead! Contact me for further details and availability.
		</p>

		<Photo file="photo_walk_amsterdam/1.jpg" />
		<Photo file="photo_walk_amsterdam/2.jpg" />
		<Photo file="photo_walk_amsterdam/55.jpg" />
		<Photo file="photo_walk_amsterdam/3.jpg" />
		<Photo file="photo_walk_amsterdam/4.jpg" />
		<Photo file="photo_walk_amsterdam/88.jpg" />
		<Photo file="photo_walk_amsterdam/8.jpg" />

		<p>
			I cannot imagine a more romantic background for either couple shoots
			or simple portrait sessions. If you feel like windmills, bridges,
			canals and flowers are something you'd like to see on your photos,
			message me by clicking the button below.
		</p>
		<BookNowButton />
	</Page>
);
