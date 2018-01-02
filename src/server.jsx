import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import routes from './routes';
import App from './App';
import React from 'react';
import fs from 'fs';

const context = {};

routes.forEach((route) => {
	const content = `<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
				<meta name="description" content="Family, portrait &amp; pre-wedding photography with a dreamy touch. Based in Haarlem, Netherlands, available worldwide. Let's create magic!" />
				<meta name="msvalidate.01" content="CC9A36425DA97869438FEFFB720A6432" />

				<link href="https://fonts.googleapis.com/css?family=Cardo|Cinzel|EB+Garamond|Lora" rel="stylesheet" />
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
				<link rel="canonical" href="https://anniekostolany.com${ route.path }" />

				<title>Portrait &amp; Event Photography in Haarlem | Annie Kostolany</title>

				<script>
				  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

				  ga('create', 'UA-104984108-1', 'auto');
				  ga('send', 'pageview');
				</script>

				<!-- Facebook Pixel Code -->
				<script>
				  !function(f,b,e,v,n,t,s)
				  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
				  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
				  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
				  n.queue=[];t=b.createElement(e);t.async=!0;
				  t.src=v;s=b.getElementsByTagName(e)[0];
				  s.parentNode.insertBefore(t,s)}(window, document,'script',
				  'https://connect.facebook.net/en_US/fbevents.js');
				  fbq('init', '190552224845834');
				  fbq('track', 'PageView');
				</script>
				<noscript><img height="1" width="1" style="display:none"
				  src="https://www.facebook.com/tr?id=190552224845834&ev=PageView&noscript=1"
				/></noscript>
				<!-- End Facebook Pixel Code -->

				<link href="/bundle.css" rel="stylesheet" />
			</head>
			<body>
				<div id="root">${ ReactDOMServer.renderToString(
						<StaticRouter location={route.path} context={context}>
							<App />
						</StaticRouter>
				)}</div>
				<script type="text/javascript" src="/app.js"></script>
			</body>
		</html>`;

	if (!fs.existsSync('./out')) {
		fs.mkdirSync('./out');
	}

	fs.writeFileSync(
		'./out' + (route.path === '/' ? '/index' : route.path) + '.html',
		content
	);
});
