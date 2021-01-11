import React, { Component } from "react";

import { Row, Col } from "antd";
import "antd/dist/antd.css";

import AddProduct from "./AddProduct";
import Products from "./Products";

class ProductPage extends Component {
  state = {
    data: [
      {
        id: 1,
        proName: "Whey Protine",
        photoUri: "uri",
        proStock: 20,
        unitPrice: 70,
        purchaseDate: "date",
        company: "Whey",
        companyCode: "#12",
      },
      {
        id: 2,
        proName: "Whey Protine Tea",
        photoUri: "uri",
        proStock: 10,
        unitPrice: 180,
        purchaseDate: "date",
        company: "Whey",
        companyCode: "#12",
      },
    ],
  };
  addNewProduct = (product) => {
    product.id = this.state.data + 1;
    let data = [...this.state.data, product];
    this.setState({
      data: data,
    });
  };
  render() {
    return (
      <div
        style={{
          marginTop: "10px",
        }}
      >
        <Row>
          <Col span={12}>
            <Products products={this.state.data}></Products>
          </Col>
          <Col span={12}>
            <AddProduct addNewProduct={this.addNewProduct}></AddProduct>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProductPage;
