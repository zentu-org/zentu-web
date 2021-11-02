import { useState } from 'react';

import Head from 'next/head';

import Header, { linkItem } from '../Home/NavLink';
import { Container } from './styles';

const Home: React.FC = () => {
	const [links] = useState<linkItem[]>([
		{
			to: 'inicio',
			text: 'Início',
			offset: 50,
		},
		{
			to: '#/about',
			text: 'Quem somos',
			offset: 50,
		},
		{
			to: 'equipe',
			text: 'Equipe',
			offset: 50,
		},
		{
			to: 'contato',
			text: 'Contato',
			offset: 50,
		},
	]);

	return (
		<>
			<Container>
				<Head>
					<title>Zentu</title>
				</Head>

				<Header links={links} />
			</Container>
		</>
	);
};

export default Home;
