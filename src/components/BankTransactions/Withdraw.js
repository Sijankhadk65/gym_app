import { Button, DatePicker, Form, Input, InputNumber } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addWithdraw } from "../../Redux/Actions/actionCreators";
class Withdraw extends Component {
  onFinish = (values) => {
    this.props.addWithdraw({
      ...values,
      transactionDate: values.transactionDate.toDate().toISOString(),
    });
  };
  render() {
    return (
      <Form onFinish={this.onFinish}>
        <Form.Item name="by" label="Bank Name">
          <Input placeholder="Civil Bank"></Input>
        </Form.Item>
        <Form.Item name="voucherNumber" label="Check Number">
          <InputNumber placeholder="1234567879"></InputNumber>
        </Form.Item>
        <Form.Item name="to" label="Check to">
          <Input placeholder="John Doe"></Input>
        </Form.Item>
        <Form.Item name="transactionDate" label="Deposited On">
          <DatePicker></DatePicker>
        </Form.Item>
        <Form.Item name="amount" label="Withdraw Amount">
          <InputNumber placeholder="1234567879"></InputNumber>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addWithdraw: (transaction) => {
      dispatch(addWithdraw(transaction));
    },
  };
};

export default connect(null, mapDispatchToProps)(Withdraw);
