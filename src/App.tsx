import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { ToastProvider } from 'react-native-toast-notifications';
import Login from './pages/login';
import SignUp from './pages/signUp';

const App: React.FunctionComponent = () => (
  <HashRouter>
    <ToastProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </ToastProvider>
  </HashRouter>

);

export default App;
