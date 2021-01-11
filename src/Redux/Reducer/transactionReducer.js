import { ADD_TRANSACTION, LOAD_TRANSACTIONS } from "../Actions/actionTypes";

function transactionReducer(state = [], action) {
  switch (action.type) {
    case ADD_TRANSACTION:
      action.transaction.id = state === [] ? 1 : state.length + 1;
      return [...state, action.transaction];
    case LOAD_TRANSACTIONS:
      return action.transactions;
    default:
      return state;
  }
}

export default transactionReducer;
