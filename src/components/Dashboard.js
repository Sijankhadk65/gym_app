import React, { Component } from "react";

import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import SubMenu from "antd/lib/menu/SubMenu";
import TallyPage from "./Accounts/TallyPage";
import Withdraw from "./BankTransactions/Withdraw";
import LedgerPage from "./Accounts/LedgerPage";
import BankTransactionDashboard from "./BankTransactions/Dashboard";
import Deposit from "./BankTransactions/Deposit";
import StudentPage from "./Student/StudentScreen";

import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  BrowserRouter,
} from "react-router-dom";

const { Header, Sider, Content } = Layout;

class Dashboard extends Component {
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
      <BrowserRouter>
        <Layout style={{ height: "100vh" }}>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/student">Student</Link>
              </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="Accounts">
                <Menu.Item key="1">
                  <Link to="/tally">Tally</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/ledger">Ledger</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                icon={<UserOutlined />}
                title="Bank Transactions"
              >
                <Menu.Item key="3">
                  <Link to="/bankdash">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/withdraw">Withdraw</Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link to="/deposit">Deposit</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Switch>
              <Route exact path="/student" component={StudentPage} />
              <Route exact path="/tally" component={TallyPage} />
              <Route exact path="/ledger" component={LedgerPage} />
              <Route
                exact
                path="/bankdash"
                component={BankTransactionDashboard}
              />
              <Route exact path="/deposit" component={Deposit} />
              <Route exact path="/withdraw" component={Withdraw} />
            </Switch>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default Dashboard;
