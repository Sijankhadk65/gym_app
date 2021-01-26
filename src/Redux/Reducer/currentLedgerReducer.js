import {
  SET_FINAL,
  SET_OB,
  SET_CB,
  SET_TRANSACTIONS,
  SET_TRANSACTION_DATE,
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  SET_LEDGER,
  SET_BANK_TRANSACTIONS,
} from "../Actions/actionTypes";

function currentLedgerReducer(
  state = {
    openingBalance: 0,
    transactions: [],
    transactionDate: "",
    finalAmount: 0,
    bankTransactions: [],
  },
  action
) {
  switch (action.type) {
    case SET_OB:
      return {
        ...state,
        openingBalance: action.openingBalance,
      };
    case SET_FINAL:
      const total = (num1, num2) => num1 + num2;
      return {
        ...state,
        finalAmount:
          state.transactions.length === 0
            ? state.openingBalance +
              state.bankTransactions
                .map((transaction) => transaction.amount)
                .reduce(total)
            : state.openingBalance +
              state.transactions
                .map((transaction) => transaction.amount)
                .reduce(total) +
              state.bankTransactions
                .map((transaction) => transaction.amount)
                .reduce(total),
      };
    case SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.transactions,
      };
    case SET_BANK_TRANSACTIONS:
      return {
        ...state,
        bankTransactions: action.transactions,
      };
    case ADD_TRANSACTION:
      action.transaction.id =
        state.transactions === [] ? 1 : state.transactions.length + 1;
      let newTransactions = [...state.transactions, action.transaction];
      return {
        ...state,
        transactions: newTransactions,
      };
    case SET_TRANSACTION_DATE:
      return {
        ...state,
        transactionDate: action.transationDate,
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: arrayRemove(action.transactions, action.id),
      };
    case SET_LEDGER:
      return action.ledger;
    default:
      return state;
  }
}

function arrayRemove(array, value) {
  return array.filter((element) => {
    return element.id != value;
  });
}

export default currentLedgerReducer;
