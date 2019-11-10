import styled from 'styled-components';
import { darken, lighten } from 'polished';

interface UiButtonProps {
  readonly isFluid?: boolean;
}

const UiButton = styled.button<UiButtonProps>`
  padding: 15px;
  background: #96def6;
  border-radius: 8px;
  text-transform: uppercase;
  min-width: 80px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: background-color .2s;
  ${(props): string => (props.isFluid ? 'width: 100%;' : '')}
  
  :hover {
    background: ${darken(0.1)('#96def6')};
  }
  
  :active {
    background: ${lighten(0.1)('#96def6')};
  }
`;

export default UiButton;
