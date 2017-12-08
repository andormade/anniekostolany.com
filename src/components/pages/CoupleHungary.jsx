import React from 'react';
import { Page, Photo } from './Page';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page>
		<h2> Romantic fall theme couple shoot </h2>
		<p> I must say, love and pre-wedding photography is one of the fields I can express myself the best. I just really like how easy it is to shoot with couples as they tend to entertain each other, kiss, whisper and laugh.
			And while they do all that, I find the perfect light and angles and take their most romantic photos.
		</p>
			
			
		<Photo file="couple_shoots_hun/3.jpg" alt="Couple sitting in nature"/>
		<Photo file="couple_shoots_hun/2.jpg" alt="Couple smiling in nature"/>
		<Photo file="couple_shoots_hun/4.jpg" alt="Couple sitting by bonfire"/>
		<Photo file="couple_shoots_hun/5.jpg" alt="Couple sitting by bonfire"/>
		<Photo file="couple_shoots_hun/6.jpg" alt="Couple laughing by bonfire"/>
		<Photo file="couple_shoots_hun/7.jpg" alt="Couple looking each other on long street"/>
			
			<p> Couple shoots in Amsterdam are really sweet and precious but I also enjoy to work in nature, as it gives me endless inspiration. 
				We can discuss your ideas over a coffee or on Skype. I am also happy to help picking out the location and dresses so everything will match perfectly.
			</p>
		<BookNowButton />
	</Page>
);
