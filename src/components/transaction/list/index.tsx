import React from 'react';

import TransactionListItem from '../list-item';
import UiGrid from 'components/ui/grid';
import UiGridCell from 'components/ui/grid/cell';

import { TransactionList as TransactionListType } from 'types/transactions';

interface PropsInterface {
  list: TransactionListType;
}

const TransactionList: React.FC<PropsInterface> = ({ list }: PropsInterface) => {
  return (
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
};

export default TransactionList;
