import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  DesktopOutlined,
  UserAddOutlined,
  HomeOutlined,
  DashboardOutlined,
  EyeOutlined,
  HeartOutlined
} from '@ant-design/icons';

import { Calendar,Layout, Menu, theme,Breadcrumb,Card, Col, Row } from 'antd'
import UserMenu from '../partials/header/UserMenu';
const { Header, Sider, Content } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';


function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  //for side bar dropdown


  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  const items = [
    getItem('Mahar Admin', '1', <HeartOutlined />),
    getItem('Dashboard', '2', <DashboardOutlined />),
    getItem('User Management', 'sub1', <DesktopOutlined/>,[
        getItem('Administrators', '3',<EyeOutlined />),
        getItem('Users', '4',<UserOutlined />),
        getItem('Third-Party Admin', '5',<UserOutlined />),
        getItem('Add New Year', '6',<UserAddOutlined />),
    ]),
    getItem('Images', '7', <DashboardOutlined />),
    getItem('Advertisements', '8', <DashboardOutlined />),
    getItem('Actors', '9', <DashboardOutlined />),
    getItem('Owners', '10', <DashboardOutlined />),
    getItem('MPT Policy', '11', <DashboardOutlined />),
    getItem('Dinga Category', '12', <DashboardOutlined />),
    getItem('Category', '13', <DashboardOutlined />),
    getItem('Home Screen', '14', <DashboardOutlined />),
    getItem('Free Operators', '15', <DashboardOutlined />),

    // getItem('User', 'sub2', <UserOutlined />, [
    //   getItem('Tom', '3'),
    //   getItem('Bill', '4'),
    //   getItem('Alex', '5'),
    // ]),
    // getItem('Team', 'sub3', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    // getItem('Files', '9', <FileOutlined />),

  ];

  return (
    <Layout>
      <Sider 
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
        trigger={null} collapsible collapsed={collapsed}  
        //className="ml-96"
      >
        <div className='border-white'>
          <Menu theme="dark"  mode="inline" items={0} />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" items={items} />
      </Sider>
      
      <Layout className={`site-layout ${ collapsed ? 'ml-20' :'ml-48'}`}>
        <Header style={{ padding: 0, background: colorBgContainer }} className="flex justify-between">
          
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              })}
         
          <div className='flex justify-between items-center mr-8'>
              <UserMenu />
          </div>
        </Header>
        
        <Breadcrumb className='mt-4 ml-4'>
            <Breadcrumb.Item href="">
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <UserOutlined />
              <span>Users</span>
            </Breadcrumb.Item>
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
        </Breadcrumb>
      
          
        <Content
          style={{
            margin: '16px 16px',
            padding: 16,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
           <div className='mb-10'>
              <Row gutter={16}>
                <Col span={6}>
                  <Card className='bg-sky-400'>
                    150
                    New Orders
                  </Card>
                </Col>
                <Col span={6}>
                  <Card className='bg-green-400'>
                    53%
                    Bounce Rate
                  </Card>
                </Col>
                <Col span={6}>
                  <Card className='bg-amber-400'>
                    44
                    User Registrations
                  </Card>
                </Col>

                <Col span={6}>
                  <Card className='bg-rose-400'>
                    65
                    Unique Visitors
                  </Card>
                </Col>
              </Row>
           </div>


           <div className='mb-6'>
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