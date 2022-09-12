/* eslint no-console: "off" */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TransactionSearch } from 'components/transaction/search';
import { withCss, withWorkLayout } from 'sbook/decorators';

export default {
  component: TransactionSearch,
  title: 'TransactionSearch',
  decorators: [withCss, withWorkLayout]
} as ComponentMeta<typeof TransactionSearch>;

const Template: ComponentStory<typeof TransactionSearch> = (args) => (
  <TransactionSearch {...args}/>
);

export const Default = Template.bind({});
Default.args = {
  isEmptySearch: false,
  getTransactions: (walletId: string): void => {
    console.log(walletId);
  }
};

export const IsEmptySearch = Template.bind({});
IsEmptySearch.args = {
  isEmptySearch: true,
  getTransactions: (walletId: string): void => {
    console.log(walletId);
  }
};
