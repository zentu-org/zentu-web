import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

import GlobalStyle from '../../styles/global';
import { GTMPageView } from '../lib/gtm';

import 'flexboxgrid/css/flexboxgrid.min.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	// Initiate GTM
	useEffect(() => {
		const handleRouteChange = (url: string) => GTMPageView(url);

		router.events.on('routeChangeComplete', handleRouteChange);

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Component {...pageProps} />
			<GlobalStyle />
			<ToastContainer autoClose={3000} />
		</>
	);
}
