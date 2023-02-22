import React from 'react';
import './css/main.css';
import Router from './route/Router';
import 
{ 
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
const queryClient = new QueryClient();


function App() {
  return (
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Router />
        </QueryClientProvider>
      </React.StrictMode>
  );
}

export default App;
