import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import SharedLayout from '../pages/SharedLayout'
import Users from '../pages/Users';
import Form from '../pages/Form';
import Singup from '../pages/Singup';
import { FunctionComponent } from 'react';
import React from 'react';
import ConfirmedCode from '../pages/ConfirmedCode';

const Router: FunctionComponent = () => {
  // const params = useParams();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/form" element={<Form />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Singup />} />
        <Route path="/confirmation-code/:username" element={<ConfirmedCode />}/>
      </Routes>

    </BrowserRouter>
  );
};

export default Router;
