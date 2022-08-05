import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Dashboard from './web/pages/Dashboard/Dashboard';

export default function Container() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}
