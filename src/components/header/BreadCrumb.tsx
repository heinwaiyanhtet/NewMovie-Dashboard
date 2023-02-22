import React from 'react'
import {
    Breadcrumb,
  } from "antd";

  import {
    UserOutlined,
    HomeOutlined,
  } from "@ant-design/icons";


const BreadCrumb : React.FC = () => {
  return (
    <Breadcrumb className="mt-6 ml-8">
        <Breadcrumb.Item href="">
        <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
        <UserOutlined />
        <span>Users</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Admin</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default BreadCrumb;