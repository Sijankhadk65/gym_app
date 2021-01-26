import React, { Component } from "react";
import {
  Button,
  DatePicker,
  Input,
  Form,
  InputNumber,
  Switch,
  Select,
  Col,
  Row,
} from "antd";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { addStudent } from "../../Redux/Actions/actionCreators";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

let paymentPackage = "1";

class AddStudent extends Component {
  state = {
    stuName: "",
    stuAge: 0,
    initWeight: 0,
    address: "",
    phNumber: 0,
    email: "",
    photoURI: "",
    joinedDate: "",
    isPaid: false,
    paymentPackage: 1,
  };

  onFinish = (values) => {
    console.log(values);
    this.props.addStudent(values);
    // e.preventDefault();
    // console.log({
    //   ...this.state,
    //   progress: [],
    // });
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onPackageChange = (value) => {
    paymentPackage = value;
  };

  render() {
    return (
      <Form onFinish={this.onFinish}>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please enter name!",
            },
          ]}
          label="Student's Name"
          name="stuName"
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: "Please enter age!",
            },
          ]}
          label="Student's Age"
          name="stuAge"
        >
          <InputNumber></InputNumber>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: "Please input weight!",
            },
          ]}
          label="Student's weight"
          name="initWeight"
        >
          <InputNumber></InputNumber>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: "Please input address!",
            },
          ]}
          label="Student's Address"
          name="address"
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: "Please input phone number!",
            },
          ]}
          label="Student's Number"
          name="phNumber"
        >
          <InputNumber></InputNumber>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: "Please input email!",
            },
          ]}
          label="Student's Email"
          name="email"
        >
          <Input></Input>
        </Form.Item>

        <Form.Item name="photoUri">
          <Input type="file" accept="image/*"></Input>
        </Form.Item>

        <Form.Item name="joindedDate">
          <DatePicker></DatePicker>
        </Form.Item>
        {/* <Form.Item name="isPaid">
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked
          ></Switch>
        </Form.Item>
        <Form.Item name="paymentPackage">
          <Select defaultValue="1" style={{ width: 120 }}>
            <Select.Option value="1">1-mnth</Select.Option>
            <Select.Option value="2">2-mnth</Select.Option>
            <Select.Option value="3">3-mnth</Select.Option>
          </Select>
        </Form.Item> */}

        <Form.Item>
          <Button htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: (student) => {
      dispatch(addStudent(student));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddStudent);
