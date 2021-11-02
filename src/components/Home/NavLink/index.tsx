/* eslint-disable prefer-destructuring */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';

import { Container, Menu } from './styles';

export interface linkItem {
	to: string;
	text: string;
	offset?: number;
}
export interface Links {
	links?: Array<linkItem>;
	backToHome?: boolean;
}

const Header: React.FC<Links> = ({ links, backToHome }) => {
	const menuRef = useRef<HTMLHeadElement>(null);
	const [isSticky, setSticky] = useState(false);

	const handleScroll = useCallback(() => {
		if (menuRef.current) {
			window.scrollY > menuRef.current.getBoundingClientRect().bottom
				? setSticky(true)
				: setSticky(false);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', () => handleScroll);
		};
	}, [handleScroll]);

	return (
		<Container ref={menuRef} className={isSticky ? 'sticky' : ''}>
			<nav>
				<input className="menu-btn" type="checkbox" id="menu-btn" />
				<label className="menu-icon" htmlFor="menu-btn">
					<span className="navicon" />
				</label>

				<Link activeClass="active" className="logo" to="inicio" spy smooth />

				<Menu className="menu">
					{backToHome && (
						<li>
							<a href="/">Home</a>
						</li>
					)}
					{links &&
						links.map(link => {
							let navigateTo: any = '';
							let customLink = '';
							if (link.to.indexOf('#/') !== -1) {
								navigateTo = link.to.split('#');
								customLink = navigateTo[1];
							}

							if (customLink !== '') {
								return (
									<li key={link.to}>
										<a href={customLink}>{link.text}</a>
									</li>
								);
							}
							return (
								<li key={link.to}>
									<Link
										activeClass="active"
										to={link.to}
										spy
										href={link.to}
										smooth
										offset={link.offset}
									>
										{link.text}
									</Link>
								</li>
							);
						})}
					<li>
						<a href="https://free.khui.com.br/ad/signup" className="signup">
							Comece agora
						</a>
					</li>
					<li>
						<a href="https://free.khui.com.br" className="signin">
							Acesso do aluno
						</a>
					</li>
				</Menu>
			</nav>
		</Container>
	);
};

export default Header;
