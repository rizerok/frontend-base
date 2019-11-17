interface Call {
  function: string;
  args: Array<{
    type: 'string';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any;
  }>;
}

interface Payment {
  amount: number;
  assetId: string | null;
}

export interface Transaction {
  call: Call;
  dApp: string;
  fee: number;
  height: number;
  id: string;
  payment: Array<Payment>;
  proofs: Array<string>;
  sender: string;
  senderPublicKey: string;
  timestamp: string;
  type: number;
  version: number;
  [key: string]: string | number | Call | Array<Payment> | Array<string>;
}

export interface TransactionListItem {
  data: Transaction;
  __type: string;
}

export type TransactionList = ReadonlyArray<TransactionListItem>;

export interface TransactionCategory {
  title: string;
  showList: boolean;
  list: TransactionList;
}

export type TransactionCategories = Array<TransactionCategory>;
