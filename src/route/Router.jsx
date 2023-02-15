import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import SharedLayout from '../pages/SharedLayout'
import Users from '../pages/Users';
import Form from '../pages/Form';
import Singup from '../pages/Singup';

export default function Router() {
  return (
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<SharedLayout/>}>
                    <Route index element={<Dashboard />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/form' element={ <Form />} />
                </Route>
                <Route path="login" element={<Login />}/>
                <Route path="singup" element={<Singup />}/>
            </Routes>
      </BrowserRouter>
  )
}
