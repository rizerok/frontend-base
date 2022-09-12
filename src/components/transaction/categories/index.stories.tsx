import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { withCss, withScreenIndents } from 'sbook/decorators';
import { TransactionCategories } from '.';

const dataItem = {
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
};

const dataList = Array(4).fill(dataItem).map(el => ({
  data: el,
  __type: 'type'
}));

const Template: ComponentStory<typeof TransactionCategories> = (args) => (
  <TransactionCategories {...args}/>
);

export default {
  component: TransactionCategories,
  title: 'TransactionCategories',
  decorators: [withCss, withScreenIndents]
} as ComponentMeta<typeof TransactionCategories>;

export const Default = Template.bind({});
Default.args = {
  categories: Array(4).fill(0).map((el, i) => ({
    title: `category ${i}`,
    showList: i % 2 !== 0,
    list: dataList
  }))
};
