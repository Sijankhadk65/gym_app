import { Button, Input, Form, InputNumber, Row, Col, Divider } from "antd";
import {
  addTransaction,
  setFinal,
  setTransactions,
} from "../../Redux/Actions/actionCreators";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import React, { Component } from "react";
import TextArea from "antd/lib/input/TextArea";
class CashInput extends Component {
  onFinish = (values) => {
    // addTranscation(values);
    this.props.addTranscation(values);
    this.props.setFinal(this.props.transactions);
    console.log(values);
  };
  inputStyle = {
    borderRadius: "5px",
    borderColor: "transparent",
  };
  render() {
    return (
      <div>
        <Divider orientation="left">Enter Transaction</Divider>
        <Form onFinish={this.onFinish}>
          <Row gutter={16} align="bottom">
            <Col>
              <Row>
                <Col>
                  <Row>
                    <div
                      style={{
                        fontFamily: "Montserrat",
                        fontWeight: "bold",
                      }}
                    >
                      Amount
                    </div>
                  </Row>
                  <Row>
                    <Form.Item
                      name="amount"
                      rules={[
                        {
                          required: true,
                          message: "Please enter amount",
                        },
                      ]}
                    >
                      <InputNumber
                        style={this.inputStyle}
                        placeholder="1000"
                      ></InputNumber>
                    </Form.Item>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Row>
                    <div
                      style={{
                        fontFamily: "Montserrat",
                        fontWeight: "bold",
                      }}
                    >
                      To
                    </div>
                  </Row>
                  <Row>
                    <Form.Item
                      name="to"
                      rules={[
                        {
                          required: true,
                          message: "Please enter where the money was spent",
                        },
                      ]}
                    >
                      <Input
                        style={this.inputStyle}
                        placeholder="Sijan Khadka"
                      ></Input>
                    </Form.Item>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Row>
                    <div
                      style={{
                        fontFamily: "Montserrat",
                        fontWeight: "bold",
                      }}
                    >
                      Description
                    </div>
                  </Row>
                  <Row>
                    <Form.Item
                      name="description"
                      rules={[
                        {
                          required: true,
                          message: "Please enter description!",
                        },
                      ]}
                    >
                      <TextArea
                        style={this.inputStyle}
                        placeholder="Transaction Desctiption"
                        autoSize
                      />
                    </Form.Item>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col>
              <Form.Item>
                <Button htmlType="submit">Add</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTranscation: (cashInfo) => {
      dispatch(addTransaction(cashInfo));
    },
    setFinal: (transactions) => {
      dispatch(setTransactions(transactions));
      dispatch(setFinal());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CashInput);
