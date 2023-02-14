import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DesktopOutlined,
  DashboardOutlined,
  EyeOutlined,
} from "@ant-design/icons";

import {
  Layout,
  Menu,
  theme,
} from "antd";

const {SubMenu} = Menu;

import UserMenu from "../partials/header/UserMenu";
import BreadCrumb from "../partials/header/BreadCrumb";
import { Link, Outlet } from "react-router-dom";


const { Header, Sider, Content } = Layout;
const MenuKeyRef = React.createRef();

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}


function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  //for side bar dropdown

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };


  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
       width = {240}
        trigger={null}
        collapsible 
        collapsed={collapsed}
      >
        <div className="border-white">
          <Menu theme="dark" mode="inline" items={0} />
        </div>

        <div className="flex justify-around items-center mx-4 my-2 mb-1">
          <svg
            width="40px"
            height="40px"
           className="fill-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          >
            <path d="M248 167.5l64.9 98.8H183.1l64.9-98.8zM496 256c0 136.9-111.1 248-248 248S0 392.9 0 256 111.1 8 248 8s248 111.1 248 248zm-99.8 82.7L248 115.5 99.8 338.7h30.4l33.6-51.7h168.6l33.6 51.7h30.2z" />
          </svg>
          <h1 className={`text-gray-300 p-3 font-semibold text-base ${collapsed && 'hidden'}`}>Admin</h1>
        </div>

        <div className={`border border-b-gray-300 mx-4 ${collapsed && 'hidden'}`}></div>

        <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            // items={items}
            ref = {MenuKeyRef}
            style={{
              marginTop:20
            }}
            // openKeys={"sub1"}
            
        >
              <Menu.Item key="1" icon={<DashboardOutlined />}>
              <Link to="https://google.com">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                <Link to="/user">User</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<EyeOutlined />}>
                <Link to="/form">Form</Link>
              </Menu.Item>


                <SubMenu
                  key="sub1"
                  icon={<DashboardOutlined />}
                  title={
                    <span>
                      {/* <Icon type="mail" /> */}
                      <span>Navigation One</span>
                    </span>
                  }
                >
                <Menu.Item key="4">
                  Option 1
                </Menu.Item>
                <Menu.Item key="5">
                  Option 2
                </Menu.Item>
                <Menu.Item key="6">
                  Option 3
                </Menu.Item>
                <Menu.Item key="7">
                  Option 4
                </Menu.Item>
              </SubMenu>
            </Menu>
      </Sider>

      <Layout className={`site-layout ${collapsed ? "ml-20" : "ml-56"}`}>
        <Header
          style={{ padding: 0, background: colorBgContainer }}
          className="flex justify-between"
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="flex justify-between items-center mr-8">
            <UserMenu />
          </div>
        </Header>

        <BreadCrumb />

        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
         
            <Outlet />

        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;



  
