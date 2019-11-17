import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { TransactionCategories as TransactionCategoriesType } from 'types/transactions';
import { AppState } from 'store/reducers';

import { selectCategories } from 'store/transactions';
import UiRow from 'components/ui/row';
import TransactionList from '../list';

interface PropsInterface {
  categories: TransactionCategoriesType;
}

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const List = styled.div`
  margin-top: 15px;
`;

const TransactionCategories: React.FC<PropsInterface> = ({ categories }: PropsInterface) => (
  <div>
    { categories.map((categories, key) => (
      <UiRow
        key={key}
        indent="20px"
      >
        <Title>
          {`${categories.title} • ${categories.list.length}`}
        </Title>
        {categories.showList && !!categories.list.length && <List>
          <TransactionList list={categories.list}/>
        </List>}
      </UiRow>
    )) }
  </div>
);

const mapProps = ({ transactions }: AppState): PropsInterface => ({
  categories: selectCategories(transactions, [
    { type: 4 },
    { type: 16 }
  ])
});

export { TransactionCategories };
export default connect(mapProps)(TransactionCategories);
