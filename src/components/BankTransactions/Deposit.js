import { Button, DatePicker, Form, Input, InputNumber } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addDeposit } from "../../Redux/Actions/actionCreators";

class Deposit extends Component {
  onFinish = (values) => {
    this.props.addDeposit({
      ...values,
      transactionDate: values.transactionDate.toDate().toISOString(),
    });
  };
  render() {
    return (
      <Form onFinish={this.onFinish}>
        <Form.Item name="to" label="Bank Name">
          <Input placeholder="Civil Bank"></Input>
        </Form.Item>
        <Form.Item name="voucherNumber" label="Voucher Number">
          <InputNumber placeholder="1234567879"></InputNumber>
        </Form.Item>
        <Form.Item name="by" label="Deposited By">
          <Input placeholder="John Doe"></Input>
        </Form.Item>
        <Form.Item name="transactionDate" label="Deposited On">
          <DatePicker></DatePicker>
        </Form.Item>
        <Form.Item name="amount" label="Deposited Amount">
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
    addDeposit: (transaction) => {
      dispatch(addDeposit(transaction));
    },
  };
};

export default connect(null, mapDispatchToProps)(Deposit);
