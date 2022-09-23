import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signUp';

const App: React.FunctionComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signUp' element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);

export default App;
