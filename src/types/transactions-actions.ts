import {
  TRANSACTIONS_SET,
  TRANSACTIONS_REQUEST_START,
  TRANSACTIONS_REQUEST_END
} from 'store/transactions';
import { TransactionList } from 'types/transactions';

export interface ActionTransactionSet {
  type: typeof TRANSACTIONS_SET;
  payload: TransactionList;
}

export interface ActionTransactionRequestStart {
  type: typeof TRANSACTIONS_REQUEST_START;
  payload?: TransactionList;
}

export interface ActionTransactionRequestEnd {
  type: typeof TRANSACTIONS_REQUEST_END;
  payload?: TransactionList;
}

export type ActionsTransaction =
  ActionTransactionSet | ActionTransactionRequestStart | ActionTransactionRequestEnd;
