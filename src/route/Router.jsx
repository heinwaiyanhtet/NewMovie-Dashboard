import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import SharedLayout from '../pages/SharedLayout'

export default function Router() {
  return (
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<SharedLayout/>}>
                    <Route index element={<Dashboard />} />
                </Route>
                <Route path="login" element={<Login />}/>
            </Routes>
      </BrowserRouter>
  )
}
