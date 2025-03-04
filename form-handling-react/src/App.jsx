
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}




export default App;

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


