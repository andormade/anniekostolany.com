import React from 'react';
import { Page, Photo } from '../pages/Page';

export class BlogPost extends React.Component {
	render() {
		const { date, title, children } = this.props;
		const website = 'https://anniekostolany.com/blog/';

		return (
			<Page {...this.props}>
				<h2>
					<a href={website + BlogPost.getPermalink(date, title)}>
						{title}
					</a>
				</h2>
				{children}
			</Page>
		);
	}

	static getPermalink(date, title) {
		const jsDate = new Date(date),
			year = jsDate.getFullYear(),
			month = jsDate.getMonth() + 1,
			day = jsDate.getDate(),
			monthLz = ('0' + month).slice(-2),
			dayLz = ('0' + day).slice(-2),
			urlifiedTitle = title
				.replace(/ /g, '-')
				.replace(/[^a-zA-Z0-9-]+/g, '')
				.toLowerCase();

		return year + '/' + monthLz + '/' + dayLz + '/' + urlifiedTitle;
	}
}

export { Photo };
