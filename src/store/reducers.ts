import { combineReducers } from 'redux';

import transactions from './transactions';

const reducers = combineReducers({
  transactions
});

export type AppState = ReturnType<typeof reducers>

export default reducers;
