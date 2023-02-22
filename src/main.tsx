import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
// import Router from './route/Router';
import store from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
        {/* <Router> */}
            <App />
        {/* </Router> */}
    </Provider>
  </React.StrictMode>
);


// what will do next

// sider bar with localstorage
// code with docker
// reusable code
// check - content service and display service
// add information in dashboard like table , chart and look ol dashboard