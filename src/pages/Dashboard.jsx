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
  Calendar,
  Layout,
  Menu,
  theme,
  Card,
  Col,
  Row
} from "antd";

const {SubMenu} = Menu;

import UserMenu from "../partials/header/UserMenu";
import BreadCrumb from "../partials/header/BreadCrumb";
import { Link } from "react-router-dom";


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

import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../partials/dashboard/DashboardCard02";
import DashboardCard03 from "../partials/dashboard/DashboardCard03";
import DashboardCard04 from "../partials/dashboard/DashboardCard04";
import DashboardCard05 from "../partials/dashboard/DashboardCard05";
import DashboardCard06 from "../partials/dashboard/DashboardCard06";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
import DashboardCard08 from "../partials/dashboard/DashboardCard08";
import DashboardCard09 from "../partials/dashboard/DashboardCard09";
import DashboardCard10 from "../partials/dashboard/DashboardCard10";
import DashboardCard11 from "../partials/dashboard/DashboardCard11";
import DashboardCard12 from "../partials/dashboard/DashboardCard12";
import DashboardCard13 from "../partials/dashboard/DashboardCard13";

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  //for side bar dropdown

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  // const items = [
  //   getItem("Dashboard", "1", <DashboardOutlined />),

  //   getItem("User Management", "sub1", <DesktopOutlined />, [
  //       getItem("Administrators", "2", <EyeOutlined />),
  //       getItem("Users", "3", <UserOutlined />),
  //       getItem("Third-Party Admin", "4", <UserOutlined />),
  //       getItem("Add New Year", "5", <UserAddOutlined />),
  //   ]),

  //   getItem("Images", "sub2", <DashboardOutlined />,[
  //       getItem("Background Image", "6", <EyeOutlined />),
  //       getItem("Promo Image", "7", <UserOutlined />),
  //       getItem("Banner", "8", <UserOutlined />),
  //       getItem("Ads Banner", "9", <UserAddOutlined />),
  //       getItem("Company List", "10", <UserAddOutlined />),
  //       getItem("Dinga Slider", "11", <UserAddOutlined />),
  //   ]),


  //   getItem("Images", "sub3", <DashboardOutlined />,[
  //     getItem("Background Image", "12", <EyeOutlined />),
  //     getItem("Promo Image", "13", <UserOutlined />),
  //     getItem("Banner", "14", <UserOutlined />),
  //     getItem("Ads Banner", "15", <UserAddOutlined />),
  //     getItem("Company List", "16", <UserAddOutlined />),
  //     getItem("Dinga Slider", "17", <UserAddOutlined />),
  // ]),


  //   getItem("Advertisements", "18", <DashboardOutlined />,[
  //       getItem("Pre Roll", "19", <EyeOutlined />),
  //       getItem("Mid Roll", "20", <UserOutlined />),
  //   ]),
    
  //   getItem("Actors", "21", <DashboardOutlined />),
  //   getItem("Owners", "22", <DashboardOutlined />),
  //   getItem("MPT Policy", "23", <DashboardOutlined />),
  //   getItem("Dinga Category", "24", <DashboardOutlined />),
  //   getItem("Category", "25", <DashboardOutlined />),
  //   getItem("Home Screen", "26", <DashboardOutlined />),
  //   getItem("Free Operators", "27", <DashboardOutlined />),
  // ];

  function goUrl(items) {
      console.log(items);
  }
  

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
            defaultSelectedKeys={["1"]}
            mode="inline"
            // items={items}
            ref = {MenuKeyRef}
            openKeys={"sub1"}
            
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

          <div className="mb-10">
            <Row gutter={16}>
              <Col span={6}>
                <Card className="bg-sky-400">150 New Orders</Card>
              </Col>
              <Col span={6}>
                <Card className="bg-green-400">53% Bounce Rate</Card>
              </Col>
              <Col span={6}>
                <Card className="bg-amber-400">44 User Registrations</Card>
              </Col>

              <Col span={6}>
                <Card className="bg-rose-400">65 Unique Visitors</Card>
              </Col>
            </Row>
          </div>

          <div className="mb-6">
            <Calendar onPanelChange={onPanelChange} />
          </div>

          <div className="grid grid-cols-12 gap-6">
            <DashboardCard01 />
            {/* Line chart (Acme Advanced) */}
            <DashboardCard02 />
            {/* Line chart (Acme Professional) */}
            <DashboardCard03 />
            {/* Bar chart (Direct vs Indirect) */}
            <DashboardCard04 />
            {/* Line chart (Real Time Value) */}
            <DashboardCard05 />
            {/* Doughnut chart (Top Countries) */}
            <DashboardCard06 />
            {/* Table (Top Channels) */}
            <DashboardCard07 />
            {/* Line chart (Sales Over Time) */}
            <DashboardCard08 />
            {/* Stacked bar chart (Sales VS Refunds) */}
            <DashboardCard09 />
            {/* Card (Customers) */}
            <DashboardCard10 />
            {/* Card (Reasons for Refunds) */}
            <DashboardCard11 />
            {/* Card (Recent Activity) */}
            <DashboardCard12 />
            {/* Card (Income/Expenses) */}
            <DashboardCard13 />

          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;



// onClick={
//   _ => {

    // let selectedClass = document.getElementsByClassName("ant-menu-item-selected");
    // console.log(selectedClass);

    // const childElement = MenuKeyRef.current.menu.list.children;
    // console.log(childElement);
    //  for (let i = 0; i < childElement?.length; i++)
    //   {
    //     if (childElement[i].classList.contains("ant-menu-item-selected")) {
            
    //     } 
    //   }
  
//   }
// }


  
