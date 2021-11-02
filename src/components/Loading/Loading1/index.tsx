import { useEffect, useState } from 'react';

import Head from 'next/head';

import Loading2 from '../Loading2';
import { Container } from './styles';

export default function Homes() {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	}, []);

	return (
		<div>
			{loading ? (
				<Container>
					<div className="main">
						<Head>
							<title>Create Next App</title>
							<link rel="icon" href="/favicon.ico" />
						</Head>

						<main className="content">
							<div className="base-container">
								<h1 className="pulse">
									Bem vindo a{' '}
									<a className="zentu" href="/">
										Zentu
									</a>
								</h1>
							</div>
						</main>
					</div>
				</Container>
			) : (
				<div>
					<Loading2 />
				</div>
			)}
		</div>
	);
}
