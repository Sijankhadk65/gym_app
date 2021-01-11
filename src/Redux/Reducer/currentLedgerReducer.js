import {
  SET_FINAL,
  SET_OB,
  SET_CB,
  SET_TRANSACTIONS,
  SET_TRANSACTION_DATE,
} from "../Actions/actionTypes";

function currentLedgerReducer(
  state = {
    openingBalance: 0,
    transactions: [],
    transactionDate: "",
    finalAmount: 0,
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
            ? state.openingBalance
            : state.openingBalance +
              state.transactions
                .map((transaction) => transaction.amount)
                .reduce(total),
      };
    case SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.transactions,
      };
    case SET_TRANSACTION_DATE:
      return {
        ...state,
        transactionDate: action.transationDate,
      };
    default:
      return state;
  }
}

export default currentLedgerReducer;
