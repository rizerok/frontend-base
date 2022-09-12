import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import TransactionList from 'components/transaction/list';
import { withCss, withScreenIndents } from 'sbook/decorators';

export default {
  component: TransactionList,
  title: 'TransactionList',
  decorators: [withCss, withScreenIndents]
} as ComponentMeta<typeof TransactionList>;

const Template: ComponentStory<typeof TransactionList> = (args) => (
  <TransactionList {...args}/>
);

export const Default = Template.bind({});
Default.args = {
  list: Array(7).fill({
    data: {
      call: { function: 'vote', args: [] },
      dApp: '3Mp2wnf9gnxexbaz9xQyBd3tPZVWpTWDpPb',
      fee: 0.005,
      height: 763519,
      id: 'HW4SEhHzWcapXX8xHTcu8VMm2ejanYKTRzcLV9zp9dE8',
      payment: [],
      proofs: [
        '2qBzw7hYz6E9viYdZ7Ft8FJhjf3xFB6h3CTiSsTnhCG4PVjyWhcstVRywtzzw5ZSPo5phpKjHLwzLCgkfxKBZD1w'
      ],
      sender: '3N34g5LNjXcZAetGAP4fYPJjv7TdVCjCj9e',
      senderPublicKey: '4eS2qfaAjcVG5HnM5CWQGe435aDboWQiqziXyuKJUoe1',
      timestamp: '2019-11-13T16:15:41.902Z',
      type: 16,
      version: 1
    }
  })
};
