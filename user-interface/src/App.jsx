import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Landing from './Pages/landing';
const App = () => {
  return (
  <Routes>
<Route path="/"  element={<Landing/>} />


  </Routes>
  );
}

export default App;
