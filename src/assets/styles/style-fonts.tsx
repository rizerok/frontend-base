import { css } from 'styled-components';

import RalewayRegular from 'fonts/Raleway-Regular.ttf';
import RalewayRegularItalic from 'fonts/Raleway-Regular-Italic.ttf';
import RalewayBold from 'fonts/Raleway-Bold.ttf';
import RalewayBoldItalic from 'fonts/Raleway-Bold-Italic.ttf';
import RalewayBlack from 'fonts/Raleway-Black.ttf';
import RalewayBlackItalic from 'fonts/Raleway-Black-Italic.ttf';

import { fontWeight as fwHash } from './style-constants';

const upperFirstLetter = (str: string): string => str[0].toUpperCase() + str.slice(1);
const checkWithPrefix = (
  check: boolean | undefined, prefix: string, value1: string, value2?: string
): string => (check ? prefix + value1 : value2 || '');

type FontWeight =
  'thin'
  | 'extra lite'
  | 'lite'
  | 'regular'
  | 'medium'
  | 'semi bold'
  | 'bold'
  | 'extra bold'
  | 'black';

interface FontFaceArgs {
  path: string;
  fontFamily: string;
  fontWeight: FontWeight;
  italic?: boolean;
  format?: string;
}

const fontFace = ({
  path,
  fontFamily,
  fontWeight,
  italic,
  format = 'truetype'
}: FontFaceArgs): string => {
  const ffufl = upperFirstLetter(fontFamily);
  const fwufl = upperFirstLetter(fontWeight);
  const fsufl1 = checkWithPrefix(italic, ' ', 'Italic');
  const fsufl2 = checkWithPrefix(italic, '-', 'Italic');
  return `
    @font-face {
      font-family: '${ffufl}';
      src: local('${ffufl} ${fwufl}${fsufl1}'), local('${ffufl}-${fwufl}${fsufl2}'),
        url('${path}') format('${format}');
      font-weight: ${fwHash[fontWeight]};
      font-style: ${checkWithPrefix(italic, '', 'italic', 'normal')};
    }
  `;
};

const fonts = css`
  ${fontFace({
    path: RalewayRegular,
    fontFamily: 'Raleway',
    fontWeight: 'regular'
  })}
  ${fontFace({
    path: RalewayRegularItalic,
    fontFamily: 'Raleway',
    fontWeight: 'regular',
    italic: true
  })}
  ${fontFace({
    path: RalewayBold,
    fontFamily: 'Raleway',
    fontWeight: 'bold'
  })}
  ${fontFace({
    path: RalewayBoldItalic,
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    italic: true
  })}
  ${fontFace({
    path: RalewayBlack,
    fontFamily: 'Raleway',
    fontWeight: 'black'
  })}
  ${fontFace({
    path: RalewayBlackItalic,
    fontFamily: 'Raleway',
    fontWeight: 'black',
    italic: true
  })}
`;

export default fonts;
