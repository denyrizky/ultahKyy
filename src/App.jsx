import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

const App = () => {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;