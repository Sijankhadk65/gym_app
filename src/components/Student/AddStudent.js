import React from "react";
import { Button, DatePicker, Input, Form, InputNumber } from "antd";
import "antd/dist/antd.css";

const AddStudent = ({ addNewStudent }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    addNewStudent(values);
    console.log("Success:", values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        name="stuName"
        rules={[
          {
            required: true,
            message: "Please enter name!",
          },
        ]}
        label="Student's Name"
      >
        <Input></Input>
      </Form.Item>

      <Form.Item
        name="stuAge"
        rules={[
          {
            required: true,
            message: "Please enter age!",
          },
        ]}
        label="Student's Age"
      >
        <Input></Input>
      </Form.Item>

      <Form.Item
        name="initWeight"
        rules={[
          {
            required: true,
            message: "Please input weight!",
          },
        ]}
        label="Student's weight"
      >
        <InputNumber></InputNumber>
      </Form.Item>

      <Form.Item
        name="address"
        rules={[
          {
            required: true,
            message: "Please input address!",
          },
        ]}
        label="Student's Address"
      >
        <Input></Input>
      </Form.Item>

      <Form.Item
        name="phNumber"
        rules={[
          {
            required: true,
            message: "Please input phone number!",
          },
        ]}
        label="Student's Number"
      >
        <InputNumber></InputNumber>
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input email!",
          },
        ]}
        label="Student's Email"
      >
        <Input></Input>
      </Form.Item>

      <Form.Item name="photoUri">
        <Input type="file" accept="image/*"></Input>
      </Form.Item>

      <Form.Item name="joindedDate">
        <DatePicker></DatePicker>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit">Save</Button>
      </Form.Item>
    </Form>
  );
};

export default AddStudent;
