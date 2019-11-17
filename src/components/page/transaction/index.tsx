import React from 'react';
import styled from 'styled-components';
import UiRow from 'components/ui/row';
import TransactionSearch from 'components/transaction/search';
import TransactionCategories from 'components/transaction/categories';
import Helmet from 'react-helmet';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

const PageTransaction: React.FC = () => (
  <Container>
    <Helmet title="Transaction"/>
    <UiRow indent="30px">
      <TransactionSearch/>
    </UiRow>
    <UiRow indent="30px">
      <TransactionCategories/>
    </UiRow>
  </Container>
);

export default PageTransaction;
