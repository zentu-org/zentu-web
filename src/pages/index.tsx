import Home from '../components/Home/Init';
import NavBar from '../components/NavBar';

// import { Container } from './styles';

const pages: React.FC = () => {
	return (
		<>
			<NavBar />
			<Home />
			<Home />
		</>
	);
};

export default pages;
