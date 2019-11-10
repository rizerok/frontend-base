import React, {
  Children,
  cloneElement,
  ReactNode,
  ReactElement
} from 'react';
import styled from 'styled-components';

import UiGridCell, { UiGridCellInjectedProps } from './cell';

interface IndentObj {
  x: number;
  y: number;
}

type PropIndent = IndentObj | number;

interface ColumnsObj {
  count: number;
  maxWidth?: number;
}

type PropColumns = ColumnsObj | number;

interface UiGridProps {
  indent: PropIndent;
  column: PropColumns;
  isEqualHeight?: boolean;
  children: ReactNode;
}

interface GridContainerInterface {
  indentY: number;
  indentX: number;
}

type InjectedProps = UiGridCellInjectedProps | never;

type ReactFunctionElement = ReactElement;

const GridContainer = styled.div<GridContainerInterface>`
  display: flex;
  flex-wrap: wrap;
  margin: ${({ indentY }): number => indentY * -1}px ${({ indentX }): number => indentX * -1}px;
`;

const handlePropsInjecting = (
  element: ReactFunctionElement,
  {
    indentX, indentY, columnCount, maxWidth, isEqualHeight
  }: UiGridCellInjectedProps
): InjectedProps => {
  switch (element.type) {
  case UiGridCell: {
    return {
      indentX,
      indentY,
      columnCount,
      maxWidth,
      isEqualHeight
    };
  }
  default: {
    throw Error('only UiGridCell');
  }
  }
};

const injectProps = (
  element: ReactFunctionElement, props: UiGridCellInjectedProps
): ReactElement => cloneElement(element, handlePropsInjecting(element, props));

const UiGrid: React.FC<UiGridProps> = (
  {
    indent, column, isEqualHeight, children
  }: UiGridProps
) => {
  const indentX = typeof indent === 'number'
    ? indent
    : indent.x;
  const indentY = typeof indent === 'number'
    ? indent
    : indent.y;
  const columnCount = typeof column === 'number'
    ? column
    : column.count;
  const columnMaxWidth = typeof column !== 'number' && column.maxWidth
    ? column.maxWidth
    : undefined;

  const gridItems = Children.toArray(children)
    .filter(
      (ch): ch is ReactFunctionElement => !!ch && typeof ch !== 'string' && typeof ch !== 'number'
    )
    .map(ch => injectProps(ch, {
      indentX,
      indentY,
      columnCount,
      maxWidth: columnMaxWidth,
      isEqualHeight
    }));

  return <GridContainer
    indentX={indentX}
    indentY={indentY}
  >{gridItems}</GridContainer>;
};

export default UiGrid;
