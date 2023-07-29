import {createGlobalStyle} from '@lib/styled-components';
import {normalize} from '@lib/styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    background-color: ${({theme}) => theme.color.text[0]};
  }

  menu, ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  iframe {
    border: 0;
    border-radius: 10px;
  }

  .close {
    cursor: pointer;
    position: absolute;
    height: 30px;
    right: -5px;
    top: -55px;
    background: #6E63E0;
    border-radius: 50%;
    border: 0;
  }

  .popup-content {
    margin: auto;
    background: rgb(255, 255, 255);
    width: 340px;
    height: 600px;
    border-radius: 10px;
    border : 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  
  .popup-arrow {
    color: rgb(255, 255, 255);
  }
  .popup-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export default GlobalStyle;
