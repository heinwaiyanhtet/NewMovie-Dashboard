import React from 'react'
import {
    Breadcrumb,
  } from "antd";



export default function Breadcrumb() {
  return (
    <Breadcrumb className="mt-4 ml-4">
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
