import styled from 'styled-components';

export const Container = styled.div`
	background: #000;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-height: 100vh;
	padding-top: 8px;
	padding-bottom: 8px;

	.content {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		flex: 1 1 0%;
		text-align: center;
	}
	.slogan {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		flex: 1 1 0%;
		text-align: center;
	}
	.gradient-text {
		background-color: #f3ec78;
		background-image: linear-gradient(45deg, #f3ec78, #af4261);
		background-size: 100%;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;
	}
	h1 {
		background-color: #f3ec78;
		background-image: linear-gradient(45deg, #f3ec78, #af4261);
		background-size: 100%;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;
	}
	.zentu {
		background-color: #f3ec78;
		background-image: linear-gradient(45deg, #f3ec78, #af4261);
		background-size: 100%;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;
		font-size: 56px;
		text-decoration: none;
	}

	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}
`;
