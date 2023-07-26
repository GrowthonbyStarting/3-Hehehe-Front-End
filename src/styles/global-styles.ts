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
`;

export default GlobalStyle;
