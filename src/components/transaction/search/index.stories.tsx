/* eslint no-console: "off" */
import { storiesOf } from '@storybook/react';
import React from 'react';
import UiRow from 'components/ui/row';
import { TransactionSearch } from 'components/transaction/search';

storiesOf('Transaction', module)
  .add('TransactionSearch', () => (
    <>
      <UiRow indent="40px">
        <TransactionSearch
          isEmptySearch={false}
          getTransactions={(walletId: string): void => {
            console.log(walletId);
          }}
        />
      </UiRow>
      <UiRow indent="40px">
        <TransactionSearch
          isEmptySearch={true}
          getTransactions={(walletId: string): void => {
            console.log(walletId);
          }}
        />
      </UiRow>
    </>
  ));
