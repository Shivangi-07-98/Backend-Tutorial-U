import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Connect1 from './components/connectFwthB/connectFwthB1'
import Connect2 from './components/connectFwthB/connectFwthB2'
import PageNotFound from './components/PageNotFound/PageNotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/connect1" element={<Connect1 />} />
        <Route path="/connect2" element={<Connect2 />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;