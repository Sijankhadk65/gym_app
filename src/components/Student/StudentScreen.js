import React, { Component } from "react";
import AddStudent from "./AddStudent";
import Student from "./Student";

import { Row, Col, List, Card } from "antd";
import "antd/dist/antd.css";
import Students from "./Students";
import Avatar from "antd/lib/avatar/avatar";
import { connect } from "react-redux";
import { addStudent } from "../../Redux/Actions/actionCreators";

class StudentPage extends Component {
  state = {};

  render() {
    return (
      <Row>
        <Col span={12}>
          <List
            grid={{ gutter: 16, column: 2 }}
            dataSource={this.props.students}
            renderItem={(item) => (
              <List.Item>
                <Card title={item.stuName}>Card content</Card>
              </List.Item>
            )}
          ></List>
          {/* <List
            itemLayout="horizontal"
            dataSource={this.props.students}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={item.stuName}
                ></List.Item.Meta>
              </List.Item>
            )}
          ></List> */}
          {/* <Students students={this.state.data}></Students> */}
        </Col>
        <Col span={12}>
          <AddStudent addNewStudent={this.addNewStudent}></AddStudent>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students,
  };
};

export default connect(mapStateToProps)(StudentPage);
