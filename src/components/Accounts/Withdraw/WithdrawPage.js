import React, { Component } from "react";

import { Input, Form } from "antd";
import "antd/dist/antd.css";

class WithdrawPage extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Item label="Amount">
            <Input></Input>
          </Form.Item>
          <Form.Item label="Amount">
            <Input></Input>
          </Form.Item>
          <Form.Item label="Amount">
            <Input></Input>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default WithdrawPage;
