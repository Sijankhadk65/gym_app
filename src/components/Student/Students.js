import { Col, Row } from "antd";
import React from "react";
import Student from "./Student";

const Students = ({ students }) => {
  let items = [];
  let cols = [];
  students.forEach((student) =>
    cols.push(
      <Col key={student.id}>
        <Student student={student}></Student>
      </Col>
    )
  );
  items.push(<Row gutter={[16, 24]}>{cols}</Row>);

  return <div>{items}</div>;
};

export default Students;
