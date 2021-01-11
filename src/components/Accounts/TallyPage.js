import { Table } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";

class TallyPage extends Component {
  columns = [
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
  ];
  dataSource = this.props.ledgers.map((ledger) => {
    let date = Date.parse(ledger.transactionDate);
    date = `${date}`;
    return {
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
    console.log(this.props.ledgers);
    return (
      <div>
        <Table columns={this.columns} dataSource={this.dataSource}></Table>
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
