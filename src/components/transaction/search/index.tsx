import React, { useRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getTransactions, selectEmptySearch } from 'store/transactions';
import { AppState } from 'store/reducers';

import UiButton from 'components/ui/button';

interface ConnectedPropsInterface {
  isEmptySearch: boolean;
}

interface DispatchPropsInterface {
  getTransactions: (walletId: string) => void;
}

type PropsInterface = ConnectedPropsInterface & DispatchPropsInterface;

const Container = styled.div`width: 480px;`;

const Label = styled.label`
  font-weight: 900;
  line-height: 58px;
  text-align: center;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 0 15px;
  line-height: 58px;
  background: #fff;
  border-radius: 8px 8px 0 0;
`;

const Row = styled.div`
  & + & {
    margin-top: 10px;
  }
`;

const EmptySearchBlock = styled.div`line-height: 58px;`;

const TransactionSearch: React.FC<PropsInterface> = (
  { isEmptySearch, getTransactions }: PropsInterface
) => {
  const input = useRef<HTMLInputElement>(null);
  return (
    <Container>
      <Row>
        <Label>Wallet ID</Label>
      </Row>
      <Row>
        <Input
          ref={input}
          type="text"
          defaultValue="3N34g5LNjXcZAetGAP4fYPJjv7TdVCjCj9e"
        />
      </Row>
      {isEmptySearch && <Row>
        <EmptySearchBlock>Кошелек с данным Wallet ID отсутствует</EmptySearchBlock>
      </Row>}
      <Row>
        <UiButton
          isFluid
          onClick={(): void => {
            if (input.current) {
              getTransactions(input.current.value);
            }
          }}
        >Search</UiButton>
      </Row>
    </Container>
  );
};

const mapState = ({ transactions }: AppState): ConnectedPropsInterface => ({
  isEmptySearch: selectEmptySearch(transactions)
});

const mapDispatch = {
  getTransactions
};

export default connect(mapState, mapDispatch)(TransactionSearch);
