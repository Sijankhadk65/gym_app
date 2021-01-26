import { ADD_WITHDRAW, ADD_DEPOSIT } from "../Actions/actionTypes";

function bankReducer(state = [], action) {
  switch (action.type) {
    case ADD_WITHDRAW:
      action.transaction.id = state === [] ? 1 : state.length + 1;
      action.transaction.amount *= -1;
      return [...state, action.transaction];
    case ADD_DEPOSIT:
      action.transaction.id = state === [] ? 1 : state.length + 1;
      return [...state, action.transaction];
    default:
      return state;
  }
}

export default bankReducer;
