import { Popconfirm, Space, Table } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { Component, useState } from "react";
import { connect } from "react-redux";

class TallyPage extends Component {
  state = {
    isModalVisible: false,
    modalLedger: {},
  };

  setIsModalVisible(value) {
    this.setState({
      isModalVisible: value,
    });
  }

  showModal(key) {
    this.setState({
      modalLedger: this.props.ledgers.find(
        (ledger) => ledger.transactionDate === key
      ),
    });
    console.log(`Key:${key}`);
    this.setIsModalVisible(true);
  }

  handelOk() {
    this.setIsModalVisible(false);
  }

  handleCancle() {
    this.setIsModalVisible(false);
  }

  columns = [
    {
      title: "Transaction ID",
      dataIndex: "transactionID",
      key: "transactionID",
    },
    {
      title: "Transaction Date",
      dataIndex: "transactionDate",
      key: "transactionDate",
    },
    {
      title: "Opening Balance",
      dataIndex: "openingBalance",
      key: "openingBalance",
    },
    { title: "Closing Balance", dataIndex: "finalAmount", key: "finalAmount" },
    {
      title: "Actions",
      key: "options",
      render: (text, record) => (
        <Space>
          <Popconfirm
            title="Sure to Edit"
            onConfirm={() => this.showModal(record.transactionID)}
          >
            <a>View</a>
          </Popconfirm>
          <Popconfirm
            title="Sure to Edit"
            // onConfirm={() => this.deleteItem(record.id)}
          >
            <a>Edit</a>
          </Popconfirm>
          <Popconfirm
            title="Sure to delete?"
            // onConfirm={() => this.deleteItem(record.id)}
          >
            <a>Delete</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  dataSource = this.props.ledgers.map((ledger) => {
    let date = new Date(ledger.transactionDate);
    const month = [
      "JAN",
      "FEB",
      "MARCH",
      "APRIL",
      "MAY",
      "JUN",
      "JULY",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    date = `${date.getDate()} ${month[date.getMonth()]}, ${date.getFullYear()}`;

    return {
      transactionID: ledger.transactionDate,
      transactionDate: date,
      openingBalance: `Rs.${ledger.openingBalance}`.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ","
      ),
      finalAmount: `Rs.${ledger.finalAmount}`.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ","
      ),
    };
  });

  render() {
    return (
      <div>
        <Table columns={this.columns} dataSource={this.dataSource}></Table>
        <Modal
          title="Basic Modal"
          visible={this.state.isModalVisible}
          onOk={(e) => this.handelOk()}
          onCancel={(e) => this.handleCancle()}
        >
          <p>The Ledger of: {this.state.modalLedger.transactionDate}</p>
          <p>Opening balance: Rs.{this.state.modalLedger.openingBalance}</p>
          <p>Closing balance: Rs.{this.state.modalLedger.finalAmount}</p>
          <Table
            columns={[
              { title: "ID", dataIndex: "id", key: "id" },
              { title: "To", dataIndex: "to", key: "to" },
              { title: "Amount", dataIndex: "amount", key: "amount" },
              {
                title: "Description",
                dataIndex: "description",
                key: "description",
              },
            ]}
            dataSource={this.state.modalLedger.transactions}
          ></Table>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ledgers: state.ledgers,
  };
};

export default connect(mapStateToProps)(TallyPage);
