import { ADD_LEDGER, LOAD_LEDGERS } from "../Actions/actionTypes";

function ledgerReducer(state = [], action) {
  switch (action.type) {
    case ADD_LEDGER:
      return [...state, action.ledger];
    case LOAD_LEDGERS:
      return action.ledgers;
    default:
      return state;
  }
}

export default ledgerReducer;
