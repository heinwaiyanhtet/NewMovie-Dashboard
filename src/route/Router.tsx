import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import SharedLayout from '../pages/SharedLayout'
import Users from '../pages/Users';
import Form from '../pages/Form';
import Singup from '../pages/Singup';
import { FunctionComponent } from 'react';

const Router: FunctionComponent = () => {
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
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
