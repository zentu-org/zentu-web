import styled from 'styled-components';

export const Container = styled.div`
	background-color: #000;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-height: 100vh;

	.slogan {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		flex: 1 1 0%;
		text-align: center;

		h1 {
			font-size: 60px;
		}
	}
	.gradient-text {
		background-color: #f3ec78;
		background-image: linear-gradient(45deg, #f3ec78, #af4261);
		background-size: 100%;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;
	}
`;
