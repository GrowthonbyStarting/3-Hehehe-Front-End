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
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .close {
    cursor: pointer;
    position: absolute;
    height: 30px;
    right: -5px;
    top: -45px;
    background: #6E63E0;
    border-radius: 50%;
    border: 0;
  }
`;

export default GlobalStyle;
