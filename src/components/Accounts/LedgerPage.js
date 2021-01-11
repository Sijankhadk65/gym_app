import React, { Component } from "react";
import { connect } from "react-redux";
import CashInput from "./CashInput";
import { Button, Col, Divider, Form, InputNumber, Row, Table } from "antd";
import "antd/dist/antd.css";
import {
  setCB,
  setOB,
  addLedger,
  setFinal,
  setTransactionDate,
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
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "To", dataIndex: "to", key: "to" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
    { title: "Description", dataIndex: "description", key: "description" },
  ];

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
        {/* <Row>
          <Col>
            <Row>
              <Form onFinish={this.onCBFinish}>
                <Row>
                  <Col>
                    <Form.Item
                      name="closingBlc"
                      rules={[
                        {
                          required: true,
                          message: "Please enter Balance",
                        },
                      ]}
                    >
                      <InputNumber
                        style={this.inputStyle}
                        placeholder="Closing Balance"
                      ></InputNumber>
                    </Form.Item>
                  </Col>
                  <Col span={1}>
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
        </Row> */}

        <CashInput></CashInput>
        <Table
          scroll={{ y: 180 }}
          dataSource={this.props.transactions}
          columns={this.columns}
          footer={() => (
            <div
              style={{
                fontFamily: "Montserrat",
                fontWeight: "bold",
              }}
            >
              Closing Balance: Rs.{this.props.currentLedger.finalAmount}
            </div>
          )}
        ></Table>
        {/* <ul>
          {this.props.transactions.map((transaction) => (
            <li key={transaction.id}>{transaction.amount}</li>
          ))}
        </ul> */}

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
    transactions: state.transactions,
    currentLedger: state.currentLedger,
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
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LedgerPage);
