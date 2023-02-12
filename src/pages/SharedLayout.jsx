import React, { useState } from "react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  DesktopOutlined,
  UserAddOutlined,
  DashboardOutlined,
  EyeOutlined,
} from "@ant-design/icons";

import {
  Layout,
  Menu,
  theme,
} from "antd";
import UserMenu from "../partials/header/UserMenu";

const { Header, Sider, Content } = Layout;
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
  
  const items = [
        getItem("Dashboard", "1", <DashboardOutlined />),

        getItem("User Management", "sub1", <DesktopOutlined />, [
            getItem("Administrators", "2", <EyeOutlined />),
            getItem("Users", "3", <UserOutlined />),
            getItem("Third-Party Admin", "4", <UserOutlined />),
            getItem("Add New Year", "5", <UserAddOutlined />),
        ]),

        getItem("Images", "sub2", <DashboardOutlined />,[
            getItem("Background Image", "6", <EyeOutlined />),
            getItem("Promo Image", "7", <UserOutlined />),
            getItem("Banner", "8", <UserOutlined />),
            getItem("Ads Banner", "9", <UserAddOutlined />),
            getItem("Company List", "10", <UserAddOutlined />),
            getItem("Dinga Slider", "11", <UserAddOutlined />),
        ]),


        getItem("Images", "sub3", <DashboardOutlined />,[
        getItem("Background Image", "12", <EyeOutlined />),
        getItem("Promo Image", "13", <UserOutlined />),
        getItem("Banner", "14", <UserOutlined />),
        getItem("Ads Banner", "15", <UserAddOutlined />),
        getItem("Company List", "16", <UserAddOutlined />),
        getItem("Dinga Slider", "17", <UserAddOutlined />),
    ]),


        getItem("Advertisements", "18", <DashboardOutlined />,[
            getItem("Pre Roll", "19", <EyeOutlined />),
            getItem("Mid Roll", "20", <UserOutlined />),
        ]),
        
        getItem("Actors", "21", <DashboardOutlined />),
        getItem("Owners", "22", <DashboardOutlined />),
        getItem("MPT Policy", "23", <DashboardOutlined />),
        getItem("Dinga Category", "24", <DashboardOutlined />),
        getItem("Category", "25", <DashboardOutlined />),
        getItem("Home Screen", "26", <DashboardOutlined />),
        getItem("Free Operators", "27", <DashboardOutlined />),
  ];

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

        trigger={null}
        collapsible 
        collapsed={collapsed}
      >
        <div className="border-white">
          <Menu theme="dark" mode="inline" items={0} />
        </div>

        <div className="flex justify-around items-center mx-4 my-2">
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
          defaultSelectedKeys={["2"]}
          mode="inline"
          items={items}
        />
      </Sider>

      <Layout className={`site-layout ${collapsed ? "ml-20" : "ml-48"}`}>
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

        

        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >

        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
