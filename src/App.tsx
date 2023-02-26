import React from 'react';
import './css/main.css';
import Router from './route/Router';
import 
{ 
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
// import { history } from './helpers/history';
import { useLocation, useNavigate } from 'react-router-dom';
const queryClient = new QueryClient();


function App() {

  // history.navigate = useNavigate();
  // history.location = useLocation();

  return (
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Router />
        </QueryClientProvider>
      </React.StrictMode>
  );
}

export default App;
