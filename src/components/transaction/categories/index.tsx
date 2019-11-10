import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { TransactionCategories as TransactionCategoriesType } from 'types/transactions';
import { AppState } from 'store/reducers';

import { selectCategories } from 'store/transactions';
import TransactionList from '../list';
import UiRow from 'components/ui/row';

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

const TransactionCategories: React.FC<PropsInterface> = ({ categories }: PropsInterface) => {
  return (
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
};

const mapProps = ({ transactions }: AppState): PropsInterface => {
  return {
    categories: selectCategories(transactions, [
      { type: 4 },
      { type: 16 }
    ])
  };
};

export default connect(mapProps)(TransactionCategories);
