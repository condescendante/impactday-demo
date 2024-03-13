import React from 'react';
import Dashboard from './Pages/Dashboard';
import { Routes, Route } from 'react-router-dom';

const Views = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      {/* <Route path="/init" element={<Initialisation />} /> */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default Views;