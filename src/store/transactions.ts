import { Dispatch } from 'redux';
import {
  TransactionList,
  TransactionCategories,
  Transaction
} from 'types/transactions';
import {
  ActionsTransaction,
  ActionTransactionSet,
  ActionTransactionRequestStart,
  ActionTransactionRequestEnd
} from 'types/transactions-actions';

export const TRANSACTIONS_SET = '@transactions/set';
export const TRANSACTIONS_REQUEST_START = '@transactions/request-start';
export const TRANSACTIONS_REQUEST_END = '@transactions/request-end';

// actions & action creators
const actionTransactionRequestStart = {
  type: TRANSACTIONS_REQUEST_START
} as ActionTransactionRequestStart;

const actionTransactionRequestEnd = {
  type: TRANSACTIONS_REQUEST_END
} as ActionTransactionRequestEnd;

const actionTransactionSet = (payload: TransactionList): ActionTransactionSet => ({
  type: TRANSACTIONS_SET,
  payload
});


export type TransactionsState = Readonly<{
  requestStart: boolean;
  requestEnd: boolean;
  list: TransactionList;
}>

const initialState: TransactionsState = {
  requestStart: false,
  requestEnd: false,
  list: []
};

export default function reducer(
  state = initialState,
  { type, payload }: ActionsTransaction
): TransactionsState {
  switch (type) {
  case TRANSACTIONS_SET: {
    const p = payload as TransactionList;
    return {
      ...state,
      list: [...p]
    };
  }
  case TRANSACTIONS_REQUEST_START: {
    return {
      ...state,
      requestStart: true,
      requestEnd: false
    };
  }
  case TRANSACTIONS_REQUEST_END: {
    return {
      ...state,
      requestStart: false,
      requestEnd: true
    };
  }
  default:
    return state;
  }
}

export const getTransactions = (walletId: string) => (
  dispatch: Dispatch<ActionsTransaction>
): void => {
  dispatch(actionTransactionRequestStart);
  fetch(`https://api-test.wavesplatform.com/v0/transactions/all?sender=${walletId}`)
    .then((res) => res.json())
    .then(({ data }) => {
      dispatch(actionTransactionSet(data));
    })
    .catch(() => {
      dispatch(actionTransactionSet([]));
    })
    .finally(() => {
      dispatch(actionTransactionRequestEnd);
    });
};

const isEqualFields = (filterObj: Partial<Transaction>, obj: Transaction): boolean => (
  Object.keys(filterObj)
    .every(filterKey => filterObj[filterKey] === obj[filterKey])
);


export const selectCategories = (
  transactions: TransactionsState,
  filters: ReadonlyArray<Partial<Transaction>>
): TransactionCategories => {
  if (transactions.list.length) {
    return filters.map(filter => {
      const list = transactions.list.filter(d => isEqualFields(filter, d.data));
      return {
        title: filter.type === 4 ? 'My Smart Contracts' : 'Participating',
        showList: filter.type !== 4,
        list
      };
    });
  }
  return [];
};

export const selectEmptySearch = (
  { list, requestStart, requestEnd }: TransactionsState
): boolean => !list.length && !requestStart && requestEnd;
