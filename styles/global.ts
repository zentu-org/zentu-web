import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  :root {
    --yellow: ${colors.yellow};
    --dark: ${colors.dark};
    --light: ${colors.light};
    --gray: ${colors.gray};
  }

  #enjoy-the-way-page #contato, #starter-page #contato{
    border-top: none !important;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  body {
    background-color: #fefefe;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
  }

  body,
  input,
  textarea,
  button {
    font: 14px 'Titillium Web', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    background: transparent;
    text-transform: uppercase;
    font-weight: 700;

    &.btn--radius {
      padding: 8px 24px;
      color: var(--yellow);
      border: 1px solid var(--yellow);
      border-radius: 10px 0 10px 0;
      transition: background-color 0.2s linear;

      &:hover {
        background-color: rgba(254, 195, 43, 0.08);
      }
    }

    &.btn--flat {
      padding: 8px 24px;
      color: var(--dark);
      background: var(--yellow);
    }
  }

  .SRLThumbnailsButton,
  .SRLDownloadButton {
    display: none !important;
  }

  .row {
    margin: 0;
  }
`;
