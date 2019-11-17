import { createGlobalStyle } from 'styled-components';
import { site, palette } from './style-constants';
import fonts from './style-fonts';

const StyleGlobal = createGlobalStyle`
  ${fonts}
  
  html {
    box-sizing: border-box;
    font-size: ${site.remValue};
    font-family: ${site.fontFirst};
    background: ${palette.html};
  }
  
  body {
    font-size: ${site.fontSize};
  }
`;

export default StyleGlobal;
