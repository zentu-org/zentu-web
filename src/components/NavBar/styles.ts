import styled from 'styled-components';

export const Container = styled.main`
	.container {
		margin: 0 auto;
	}

	.box--title {
		margin-bottom: 32px;

		.title {
			color: var(--yellow);
			font-size: 35px;
			font-weight: 400;
			text-align: center;
			text-transform: uppercase;

			&::before,
			&::after {
				content: '';
				display: inline-block;
				border-top: 1px solid var(--yellow);
				width: 80px;
				margin: 0 8px;
				transform: translateY(-12px);

				@media (min-width: 320px) and (max-width: 375px) {
					width: 30px;
				}
			}
		}

		h3 {
			color: #a6a6a6;
			font-size: 29px;
			text-align: center;
			font-weight: 300;

			@media (max-width: 320px) {
				font-size: 22px;
			}

			strong {
				color: var(--yellow);
			}
		}
	}
`;
