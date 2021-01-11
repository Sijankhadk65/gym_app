import {
  ADD_LEDGER,
  ADD_TRANSACTION,
  LOAD_LEDGERS,
  LOAD_TRANSACTIONS,
  SET_CB,
  SET_FINAL,
  SET_OB,
  SET_TRANSACTIONS,
  SET_TRANSACTION_DATE,
} from "./actionTypes";

export function loadLedgers(ledgers) {
  return { type: LOAD_LEDGERS, ledgers };
}

export function loadTransactions(transactions) {
  return { type: LOAD_TRANSACTIONS, transactions };
}

export function addTransaction(transaction) {
  return { type: ADD_TRANSACTION, transaction };
}

export function addLedger(ledger) {
  return { type: ADD_LEDGER, ledger };
}

export function setFinal() {
  return { type: SET_FINAL };
}

export function setOB(openingBalance) {
  return { type: SET_OB, openingBalance };
}

export function setCB(closingBalance) {
  return { type: SET_CB, closingBalance };
}
export function setTransactions(transactions) {
  return { type: SET_TRANSACTIONS, transactions };
}
export function setTransactionDate(transactionDate) {
  return { type: SET_TRANSACTION_DATE, transactionDate };
}
