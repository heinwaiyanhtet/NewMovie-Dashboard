import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

export default function Router() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/'>
                  <Route index element={<Dashboard />} />
                  <Route path="/login" element={<Login />}/>
              </Route>
          </Routes>
      </BrowserRouter>
  )
}
