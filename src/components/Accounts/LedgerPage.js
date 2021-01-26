import React, { Component } from "react";
import { connect } from "react-redux";
import CashInput from "./CashInput";

import {
  Button,
  Col,
  Divider,
  Form,
  InputNumber,
  Popconfirm,
  Row,
  Table,
  Tag,
} from "antd";
import "antd/dist/antd.css";
import {
  setCB,
  setOB,
  addLedger,
  setFinal,
  setTransactionDate,
  deleteTransaction,
  setTransactions,
  setLedger,
  setBankTransactions,
} from "../../Redux/Actions/actionCreators";

class LedgerPage extends Component {
  inputStyle = {
    borderRadius: "5px",
    borderColor: "transparent",
  };
  buttonStyle = {
    borderRadius: "5px",
    marginLeft: "10px",
  };
  onOBFinish = (values) => {
    this.props.setBankTransactions(this.props.bankTransactions);
    this.props.setOpeningBalance(values.openingBlc);
  };
  onCBFinish = (values) => {
    this.props.setClosingBalance(values.closingBlc);
  };
  addLedger = () => {
    this.props.currentLedger.transactionDate = new Date().toISOString();
    this.props.addLedger(this.props.currentLedger);
    console.log(this.props.currentLedger);
  };
  columns = [
    { title: "ID", dataIndex: "id", key: "id", width: 50, fixed: "left" },
    { title: "To", dataIndex: "to", key: "to", width: 100, fixed: "left" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 120,
    },
    {
      title: "Transaction Type",
      dataIndex: "transactionType",
      key: "transactionType",
      width: 150,
      render: (text, record) => {
        return (
          <Tag color={record.amount > 0 ? "green" : "red"} key={record.id}>
            {text.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Actions",
      key: "options",
      fixed: "right",
      render: (text, record) => (
        <Popconfirm
          title="Sure to delete?"
          onConfirm={() => this.deleteItem(record.id)}
        >
          <a>Delete</a>
        </Popconfirm>
      ),
    },
  ];

  bankColumns = [
    { title: "ID", dataIndex: "id", key: "id", width: 50, fixed: "left" },
    { title: "To", dataIndex: "to", key: "to", width: 100, fixed: "left" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
    {
      title: "Voucher/Check Number",
      dataIndex: "voucherNumber",
      key: "voucherNumber",
      width: 150,
    },
    {
      title: "Transaction Type",
      dataIndex: "transactionType",
      key: "transactionType",
      fixed: "right",

      render: (text, record) => {
        return (
          <Tag color={record.amount > 0 ? "green" : "red"} key={record.id}>
            Bank
          </Tag>
        );
      },
    },
    // {
    //   title: "Actions",
    //   key: "options",
    //   fixed: "right",
    //   render: (text, record) => (
    //     <Popconfirm
    //       title="Sure to delete?"
    //       onConfirm={() => this.deleteItem(record.id)}
    //     >
    //       <a>Delete</a>
    //     </Popconfirm>
    //   ),
    // },
  ];

  // bankTransactionColumns = this.props.bankTransactions

  //   .map((transaction) => {
  //     // let date = new Date(transaction.transactionDate);
  //     // const month = [
  //     //   "JAN",
  //     //   "FEB",
  //     //   "MARCH",
  //     //   "APRIL",
  //     //   "MAY",
  //     //   "JUN",
  //     //   "JULY",
  //     //   "SEP",
  //     //   "OCT",
  //     //   "NOV",
  //     //   "DEC",
  //     // ];
  //     // date = `${date.getDate()} ${
  //     //   month[date.getMonth()]
  //     // }, ${date.getFullYear()}`;
  //     return {};
  //   });

  deleteItem(key) {
    this.props.deleteTransaction(key, this.props.currentLedger.transactions);
    this.props.setClosing(this.props.currentLedger.transactions);
    console.log(`Key:${key} `);
  }

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <Divider orientation="left" style={{ fontSize: "30px" }}>
          Ledger Form
        </Divider>
        <Row>
          <Col>
            <Row>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                }}
              >
                Opening Balance
              </div>
            </Row>
            <Row>
              <Form onFinish={this.onOBFinish}>
                <Row>
                  <Col>
                    <Form.Item
                      name="openingBlc"
                      rules={[
                        {
                          required: true,
                          message: "Please enter Balance",
                        },
                      ]}
                    >
                      <InputNumber
                        style={this.inputStyle}
                        placeholder="Balance"
                      />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item>
                      <Button style={this.buttonStyle} htmlType="submit">
                        Set
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Row>
          </Col>
        </Row>

        <CashInput></CashInput>
        <Row gutter={16}>
          <Col span={12}>
            <Divider orientation="left" style={{ fontSize: "15px" }}>
              Current Transactions
            </Divider>
            <Table
              scroll={{ y: 180, x: 700 }}
              dataSource={this.props.currentLedger.transactions}
              columns={this.columns}
              // footer={() => (
              //   <div
              //     style={{
              //       fontFamily: "Montserrat",
              //       fontWeight: "bold",
              //     }}
              //   >
              //     Total Transaction: Rs.
              //     {`${
              //       !this.props.currentLedger.transactions &&
              //       !this.props.currentLedger.transactions.length
              //         ? 0
              //         : this.props.currentLedger.transactions
              //             .map((transaction) => transaction.amount)
              //             .reduce((am1, am2) => am1 + am2)
              //     }`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              //   </div>
              // )}
            ></Table>
          </Col>
          <Col span={12}>
            <Divider orientation="left" style={{ fontSize: "15px" }}>
              Bank Transactions
            </Divider>
            <Table
              scroll={{ y: 180, x: 600 }}
              dataSource={this.props.bankTransactions}
              columns={this.bankColumns}
              // footer={() => (
              //   <div
              //     style={{
              //       fontFamily: "Montserrat",
              //       fontWeight: "bold",
              //     }}
              //   >
              //     Total Transaction: Rs.
              //     {`${
              //       !this.props.bankTransactions &&
              //       !this.props.bankTransactions.length
              //         ? 0
              //         : this.props.bankTransactions
              //             .map((transaction) => transaction.amount)
              //             .reduce((am1, am2) => am1 + am2)
              //     }`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              //   </div>
              // )}
            ></Table>
          </Col>
        </Row>
        <div>{this.props.currentLedger.finalAmount}</div>
        <Button
          style={{
            borderRadius: "5px",
            borderColor: "transparent",
            backgroundColor: "#15CA67",
            color: "white",
            fontFamily: "Oswald",
            fontWeight: "bold",
            marginTop: "10px",
          }}
          onClick={this.addLedger}
        >
          ADD LEDGER
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentLedger: state.currentLedger,
    bankTransactions: state.bankTransaction,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setOpeningBalance: (openingBalance) => {
      dispatch(setOB(openingBalance));
      dispatch(setFinal());
    },
    addLedger: (ledger) => {
      dispatch(addLedger(ledger));
      dispatch(
        setLedger({
          openingBalance: 0,
          transactions: [],
          transactionDate: "",
          finalAmount: 0,
        })
      );
    },
    setClosing: (transactions) => {
      // dispatch(setTransactions(transactions));
      dispatch(setFinal());
    },
    deleteTransaction: (index, transactions) => {
      dispatch(deleteTransaction(index, transactions));
    },
    setBankTransactions: (transactions) => {
      dispatch(setBankTransactions(transactions));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LedgerPage);
