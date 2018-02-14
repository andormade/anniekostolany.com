import React from 'react';
import MenuBlock from './MenuBlock';
import MenuItem from './MenuItem';

export default () => (
	<div>
		<MenuBlock title="info">
			<MenuItem to="/about-me">about me</MenuItem>
			<MenuItem to="/investment">investment</MenuItem>
		</MenuBlock>
		<MenuBlock title="portraiture">
			<MenuItem to="/boudoir-session">boudoir</MenuItem>
			<MenuItem to="/autumns-scent">autumn's scent 🍂</MenuItem>
			<MenuItem to="/streetstyle">#streetstyle</MenuItem>
			<MenuItem to="/fashion-confession">fashion confession</MenuItem>
			<MenuItem to="/confidence-is-key">confidence is key</MenuItem>
			<MenuItem to="/rockn-roll-girl">rebellion</MenuItem>
			<MenuItem to="/tropical-vibes">tropical vibes 🌴</MenuItem>
			<MenuItem to="/dreamy-beach-photoshoot">
				dreamy beach photoshoot
			</MenuItem>
				<MenuBlock title="weddings 👰🏻">
			<MenuItem to="/forest-fairy-tale">forest fairy tale</MenuItem>
			<MenuItem to="/bridal-beauty">styled bridal</MenuItem>
			<MenuItem to="/lost-bride">the lost bride</MenuItem>
		</MenuBlock>
		</MenuBlock>
		<MenuItem to="/blog">blog</MenuItem>
		<MenuItem to="/contact">contact</MenuItem>
	</div>
);
