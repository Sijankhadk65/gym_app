// import logo from "./logo.svg";
import "./App.css";

// import { Layout, Menu } from "antd";
// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
// } from "@ant-design/icons";

// import StudentPage from "./components/Student/StudentScreen";
import React, { Component } from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import SubMenu from "antd/lib/menu/SubMenu";
// import TallyPage from "./components/Accounts/TallyPage";
// import Withdraw from "./components/BankTransactions/Withdraw";
// import LedgerPage from "./components/Accounts/LedgerPage";
// import BankTransactionDashboard from "./components/BankTransactions/Dashboard";
// import Deposit from "./components/BankTransactions/Deposit";
import SignIn from "./components/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";

// const { Header, Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route exact path="/">
            <SignIn></SignIn>
          </Route>
          {/* <Route exact path="/student" component={StudentPage} />
                <Route exact path="/tally" component={TallyPage} />
                <Route exact path="/ledger" component={LedgerPage} />
                <Route
                  exact
                  path="/bankdash"
                  component={BankTransactionDashboard}
                />
                <Route exact path="/deposit" component={Deposit} />
                <Route exact path="/withdraw" component={Withdraw} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
