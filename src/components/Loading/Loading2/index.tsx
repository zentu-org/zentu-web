import { useEffect, useState } from 'react';

import NavBar from '../../NavBar';
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
					<div className="slogan">
						<h1 className="gradient-text">Zentu</h1>
						<h2 className="gradient-text">
							<span>Para</span> você,
						</h2>
						<h3 className="gradient-text">
							<span>Por</span> você
						</h3>
					</div>
				</Container>
			) : (
				<div>
					<NavBar />
				</div>
			)}
		</div>
	);
}
