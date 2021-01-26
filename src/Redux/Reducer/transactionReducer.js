import { setTransactions } from "../Actions/actionCreators";
import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  LOAD_TRANSACTIONS,
} from "../Actions/actionTypes";

function transactionReducer(state = [], action) {
  switch (action.type) {
    // case ADD_TRANSACTION:
    //   action.transaction.id = state === [] ? 1 : state.length + 1;
    //   return [...state, action.transaction];
    case LOAD_TRANSACTIONS:
      return action.transactions;
    // case DELETE_TRANSACTION:
    //   return arrayRemove(action.transactions, action.id);
    default:
      return state;
  }
}

function arrayRemove(array, value) {
  return array.filter((element) => {
    return element.id != value;
  });
}

export default transactionReducer;
