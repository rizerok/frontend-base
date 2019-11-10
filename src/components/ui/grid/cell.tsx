import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface UiGridCellInjectedProps {
  columnCount: Exclude<number, 0>;
  maxWidth?: number;
  indentX: number;
  indentY: number;
  isEqualHeight?: boolean;
}

type UiGridCellProps = Partial<UiGridCellInjectedProps>

type CssCondition = FlattenSimpleInterpolation | '';

const numberFromUndefined = (num: number): (value: number | undefined) => number => {
  return (value: number | undefined): number => {
    if(typeof value === 'undefined') {
      return num;
    }
    return value;
  };

};

const oneFromUndef = numberFromUndefined(1);
const zeroFromUndef = numberFromUndefined(0);

const UiGridCell = styled.div<UiGridCellProps>`
  width: ${(
    { columnCount }: UiGridCellProps
  ): number => +(100/oneFromUndef(columnCount)).toFixed(3)}%;
  ${(
    { maxWidth }: UiGridCellProps
  ): CssCondition => maxWidth ? (css`max-width: ${maxWidth}px`) : ''};
  margin: ${(
    { indentY }
  ): number => zeroFromUndef(indentY)}px 0 ${({ indentY }): number => zeroFromUndef(indentY)}px 0;
  padding: 0 ${(
    { indentX }
  ): number => zeroFromUndef(indentX)}px 0 ${({ indentX }): number => zeroFromUndef(indentX)}px;
  ${({ isEqualHeight }: UiGridCellProps): CssCondition => isEqualHeight ? css`display: flex` : ''}
`;

export { UiGridCellInjectedProps };
export default UiGridCell;
