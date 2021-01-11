import React from "react";
import { Button, DatePicker, Input, Form, InputNumber } from "antd";
import "antd/dist/antd.css";

const Withdraw = ({ addWithdraw }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    addWithdraw(values);
    console.log("Success:", values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        name="proName"
        rules={[
          {
            required: true,
            message: "Please enter name!",
          },
        ]}
        label="Product's Name"
      >
        <Input></Input>
      </Form.Item>

      <Form.Item
        name=" proStock"
        rules={[
          {
            required: true,
            message: "Please enter stock!",
          },
        ]}
        label="Stock Quantity"
      >
        <InputNumber></InputNumber>
      </Form.Item>

      <Form.Item
        name="unitPrice"
        rules={[
          {
            required: true,
            message: "Please enter unit price!",
          },
        ]}
        label="Unit Price"
      >
        <InputNumber></InputNumber>
      </Form.Item>

      <Form.Item
        name="company"
        rules={[
          {
            required: true,
            message: "Please enter company name!",
          },
        ]}
        label="Company's Name"
      >
        <Input></Input>
      </Form.Item>

      <Form.Item
        name="companyCode"
        rules={[
          {
            required: true,
            message: "Please input company code !",
          },
        ]}
        label="Company's Code"
      >
        <Input></Input>
      </Form.Item>

      <Form.Item name="photoUri">
        <Input type="file" accept="image/*"></Input>
      </Form.Item>

      <Form.Item name="purchaseDate">
        <DatePicker></DatePicker>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit">Save</Button>
      </Form.Item>
    </Form>
  );
};

export default Withdraw;
