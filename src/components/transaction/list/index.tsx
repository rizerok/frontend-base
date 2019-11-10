import React from 'react';

import UiGrid from 'components/ui/grid';
import UiGridCell from 'components/ui/grid/cell';

import { TransactionList as TransactionListType } from 'types/transactions';

import TransactionListItem from '../list-item';

interface PropsInterface {
  list: TransactionListType;
}

const TransactionList: React.FC<PropsInterface> = ({ list }: PropsInterface) => (
  <UiGrid
    indent={8}
    column={3}
    isEqualHeight
  >
    { list.map((item, key) => <UiGridCell key={key}>
      <TransactionListItem {...item.data}/>
    </UiGridCell>) }
  </UiGrid>
);

export default TransactionList;
