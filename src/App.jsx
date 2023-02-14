import React, { useEffect } from 'react';
import {
  useLocation
} from 'react-router-dom';
import './css/output.css';

import Router from './route/Router';
// Import pages


function App() {
  const location = useLocation();

  // useEffect(() => {
  //   document.querySelector('html').style.scrollBehavior = 'auto'
  //   window.scroll({ top: 0 })
  //   document.querySelector('html').style.scrollBehavior = ''
  // }, [location.pathname]);


  return (
      <React.StrictMode>
          <Router />
      </React.StrictMode>
  );
}

export default App;
