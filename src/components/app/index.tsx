import React from 'react';
import styled from 'styled-components';

import TransactionCategories from 'components/transaction/categories';
import TransactionSearch from 'components/transaction/search';
import Row from 'components/ui/row';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

const App: React.FC = () => <Container>
  <Row indent="30px">
    <TransactionSearch/>
  </Row>
  <Row indent="30px">
    <TransactionCategories/>
  </Row>
</Container>;

export default App;
