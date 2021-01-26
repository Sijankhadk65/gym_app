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
  DELETE_TRANSACTION,
  SET_LEDGER,
  ADD_STUDENT,
  ADD_WITHDRAW,
  ADD_DEPOSIT,
  SET_BANK_TRANSACTIONS,
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

export function setLedger(ledger) {
  return { type: SET_LEDGER, ledger };
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
export function setBankTransactions(transactions) {
  return { type: SET_BANK_TRANSACTIONS, transactions };
}
export function setTransactionDate(transactionDate) {
  return { type: SET_TRANSACTION_DATE, transactionDate };
}
export function deleteTransaction(id, transactions) {
  return {
    type: DELETE_TRANSACTION,
    id,
    transactions,
  };
}

export function addStudent(student) {
  return {
    type: ADD_STUDENT,
    student,
  };
}

export function addWithdraw(transaction) {
  return {
    type: ADD_WITHDRAW,
    transaction,
  };
}

export function addDeposit(transaction) {
  return {
    type: ADD_DEPOSIT,
    transaction,
  };
}
