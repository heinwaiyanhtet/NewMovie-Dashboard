import React from "react";

import {
  Calendar,
  theme,
  Card,
  Col,
  Row
} from "antd";

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
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  //for side bar dropdown

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  return (
     <>
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
      </>
  );
}

export default Dashboard;


  
