import React from 'react'
import {
    Breadcrumb,
  } from "antd";

  import {
    UserOutlined,
    HomeOutlined,
  } from "@ant-design/icons";


export default function BreadCrumb() {
  return (
    <Breadcrumb className="mt-4 ml-8">
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