import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";
import bankReducer from "./bankReducer";
import currentLedgerReducer from "./currentLedgerReducer";
import ledgerReducer from "./ledgerReducer";
import studentReducer from "./studentReducer";
// import transactionReducer from "./transactionReducer";

const rootReducer = combineReducers({
  ledgers: ledgerReducer,
  currentLedger: currentLedgerReducer,
  students: studentReducer,
  bankTransaction: bankReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
