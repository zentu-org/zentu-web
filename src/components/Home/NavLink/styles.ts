import styled from 'styled-components';

export const Container = styled.header`
	position: fixed;
	top: 0;
	display: flex;
	align-items: center;
	width: 100%;
	height: 70px;
	z-index: 100;
	transition: all 0.2s linear;
	background: var(--dark);

	@media (min-width: 65rem) {
		padding: 0 30px;
		background: transparent;
	}

	&.sticky {
		background: var(--dark);
		box-shadow: rgba(27, 31, 35, 0.15) 0 2px 4px;
	}

	nav {
		width: 100%;

		@media (min-width: 65rem) {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.separator {
			display: none;
			flex: 1;

			@media (min-width: 65rem) {
				display: flex;
			}
		}

		> button {
			display: none;

			@media (min-width: 65rem) {
				display: flex;
			}
		}
	}

	.logo {
		display: flex;
		justify-content: center;
	}

	.menu-icon {
		cursor: pointer;
		position: absolute;
		display: inline-block;
		padding: 1.6rem 2.4rem;
		user-select: none;

		.navicon {
			background: #fefefe;
			display: block;
			height: 0.2rem;
			position: relative;
			width: 1.8rem;

			&::before {
				top: 0.5rem;
			}

			&::after {
				top: -0.5rem;
			}

			&::before,
			&::after {
				content: '';
				background: #fefefe;
				display: block;
				height: 100%;
				position: absolute;
				transition: all 0.2s ease-out;
				width: 100%;
			}
		}

		@media (min-width: 65rem) {
			display: none;
		}
	}

	.menu-btn {
		display: none;

		&:checked ~ .menu {
			max-height: 630px;
		}

		&:checked ~ .menu-icon .navicon {
			background: transparent;

			&::before {
				transform: rotate(-45deg);
			}

			&::after {
				transform: rotate(45deg);
			}
		}

		&:checked ~ .menu-icon:not(.steps) .navicon::before,
		&:checked ~ .menu-icon:not(.steps) .navicon::after {
			top: 0;
		}
	}
`;

export const Menu = styled.ul`
	position: absolute;
	width: 100%;
	top: 70px;
	margin: 0;
	padding: 0;
	list-style: none;
	overflow: hidden;
	clear: both;
	max-height: 0;
	background: var(--dark);
	transition: max-height 0.2s ease-out;

	@media (min-width: 65rem) {
		position: relative;
		top: 0;
		width: auto;
		clear: none;
		max-height: none;
		background: transparent;
	}

	li {
		padding: 0 20px;

		@media (min-width: 65rem) {
			padding: 0;

			+ li {
				margin-left: 32px;
			}
		}

		&:last-child {
			margin-bottom: 2.4rem;
		}

		@media (min-width: 65rem) {
			display: inline-block;

			&:last-child {
				margin-bottom: 0;
			}
		}

		a {
			display: block;
			color: #fefefe;
			transition: color 0.2s linear;
			position: relative;
			padding: 16px 0;
			font-weight: 600;
			text-transform: uppercase;
			text-align: center;

			&:hover,
			&.active {
				background-color: #f3ec78;
				background-image: linear-gradient(45deg, #f3ec78, #af4261);
				background-size: 100%;
				-webkit-background-clip: text;
				-moz-background-clip: text;
				background-clip: text;
				-webkit-text-fill-color: transparent;
				-moz-text-fill-color: transparent;
			}

			&.active::after {
				content: '';
				position: absolute;
				bottom: -0;
				left: 0;
				width: 100%;
				border-bottom: 2px solid var(--dark);
			}

			@media (min-width: 65rem) {
				border: none;
				text-align: initial;
				padding: 24px 0;
			}
		}

		a.signup,
		a.signin {
			color: var(--light);
		}
	}
`;
