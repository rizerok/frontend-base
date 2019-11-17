import { css } from 'styled-components';

interface RatioboxProps {
  width: number;
  height: number;
}

const paddingTop = (
  { width, height }: RatioboxProps
): string => (100 / (width * height)).toFixed(3);

const ratiobox = css`
  width: 100%;
  position: relative;

  &:before {
    content: '';
    display: block;
    padding-top: ${paddingTop}%;
  }
`;

export default ratiobox;
