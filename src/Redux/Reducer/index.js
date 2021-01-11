import { combineReducers } from "redux";
import currentLedgerReducer from "./currentLedgerReducer";
import ledgerReducer from "./ledgerReducer";
import transactionReducer from "./transactionReducer";

const rootReducer = combineReducers({
  ledgers: ledgerReducer,
  transactions: transactionReducer,
  currentLedger: currentLedgerReducer,
});

export default rootReducer;
