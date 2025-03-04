
import React from 'react';
import './App.css';
import FormikForm from './components/formikForm';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the User Registration Form</h1>
      <FormikForm />
    </div>
  );
}

export default App;

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
