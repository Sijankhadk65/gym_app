import React, { Component } from "react";
import AddStudent from "./AddStudent";
import Student from "./Student";

import { Row, Col } from "antd";
import "antd/dist/antd.css";
import Students from "./Students";

class StudentPage extends Component {
  state = {
    data: [
      {
        id: 1,
        stuName: "Sijan Khadka",
        photoUri: "uri",
        stuAge: 20,
        initWeight: 70,
        joinedDate: "date",
        address: "address",
        phNumber: 9867856210,
        email: "sijan.khdaka08@gmail.com",
        progress: [
          {
            date: "date1",
            weight: 100,
          },
          {
            date: "date2",
            weight: 200,
          },
        ],
      },
      {
        id: 2,
        stuName: "Visal Shrestha",
        photoUri: "uri",
        stuAge: 40,
        initWeight: 170,
        joinedDate: "date",
        address: "address",
        phNumber: 9857080288,
        email: "imi.visal@gmail.com",
        progress: [
          {
            date: "date1",
            weight: 130,
          },
          {
            date: "date2",
            weight: 230,
          },
        ],
      },
      {
        id: 3,
        stuName: "Visal Shrestha",
        photoUri: "uri",
        stuAge: 40,
        initWeight: 170,
        joinedDate: "date",
        address: "address",
        phNumber: 9857080288,
        email: "imi.visal@gmail.com",
        progress: [
          {
            date: "date1",
            weight: 130,
          },
          {
            date: "date2",
            weight: 230,
          },
        ],
      },
      {
        id: 4,
        stuName: "Visal Shrestha",
        photoUri: "uri",
        stuAge: 40,
        initWeight: 170,
        joinedDate: "date",
        address: "address",
        phNumber: 9857080288,
        email: "imi.visal@gmail.com",
        progress: [
          {
            date: "date1",
            weight: 130,
          },
          {
            date: "date2",
            weight: 230,
          },
        ],
      },
    ],
  };
  addNewStudent = (student) => {
    student.id = this.state.data + 1;
    let data = [...this.state.data, student];
    this.setState({
      data: data,
    });
  };
  render() {
    return (
      <Row>
        <Col span={12}>
          <Students students={this.state.data}></Students>
        </Col>
        <Col span={12}>
          <AddStudent addNewStudent={this.addNewStudent}></AddStudent>
        </Col>
      </Row>
    );
  }
}

export default StudentPage;
