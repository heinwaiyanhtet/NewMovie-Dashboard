import {
  Calendar,
  theme,
  Card,
  Col,
  Row
} from "antd";


import type { Dayjs } from 'dayjs';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import React from "react";


function Dashboard() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  //for side bar dropdown

  const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
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
          
        </div>
      </>
  );
}

export default Dashboard;


  
