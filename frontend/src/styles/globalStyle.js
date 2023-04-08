import { createGlobalStyle } from 'styled-components';
import { WINDOW_MIN_WIDTH, WINDOW_MAX_WIDTH } from '@constants/layout';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Pacifico&family=Quicksand&display=swap');@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Quicksand&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

  html {
    max-width: ${WINDOW_MAX_WIDTH}px;
    min-width: ${WINDOW_MIN_WIDTH}px;
    background-color: #f5f5f5;
    height: 100%;
    margin: auto;
  }

  header {
    width: 100%;
    max-width: ${WINDOW_MAX_WIDTH}px;
    min-width: ${WINDOW_MIN_WIDTH}px;
    margin: auto;
  }

  body {
    white-space: pre-line;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
    width: 100%;
    height: 100%;
    background-color: white;

  }

  a {
    text-decoration: none;
    color: #000;
  }
  h1 {
    font-size: 24px;
    color: rgb(50, 50, 50);
  }

  h2 {
    font-weight: 400;
    font-size: 20px;
  }
  button {
    outline: none;
    cursor: pointer;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  .MuiBottomNavigationAction-label.Mui-selected {
    font-size: 0.8rem !important;
  }
  
  .MuiDialog-paperFullWidth {
    max-height: 60vh;
    @media (max-width: 650px) {
      position: fixed !important;
      top: 20% !important;
      margin: 0 !important;
      width: calc(100% - 16px) !important;
    }
  }

  .question-send {
    .MuiPaper-root MuiDialog-paper {
      margin: 0 !important;
    }
  }
`;

export default GlobalStyle;
