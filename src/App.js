import logo from "./logo.svg";
import "./App.css";

import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import StudentPage from "./components/Student/StudentScreen";
import ProductPage from "./components/Products/ProductPage";
import React, { Component } from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";
import TallyPage from "./components/Accounts/TallyPage";
import Withdraw from "./components/Accounts/Withdraw/Withdraw";
import WithdrawPage from "./components/Accounts/Withdraw/WithdrawPage";
import LedgerPage from "./components/Accounts/LedgerPage";

const { Header, Sider, Content } = Layout;

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
        <Router>
          <Layout style={{ height: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                  <Link to="/">Student</Link>
                </Menu.Item>
                {/* <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                  <Link to="/product">Product</Link>
                </Menu.Item> */}
                <SubMenu key="sub1" icon={<UserOutlined />} title="Accounts">
                  <Menu.Item key="1">
                    <Link to="/tally">Tally</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/ledger">Ledger</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Switch>
                <Route exact path="/" component={StudentPage} />
                <Route exact path="/tally" component={TallyPage} />
                <Route exact path="/ledger" component={LedgerPage} />
              </Switch>
            </Layout>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
