import * as React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Table from './components/Table';
import Transformer from './components/Transformer';
import Chart from './components/Chart'
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="flex">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tong-quan" element={<Table />} />
            <Route path="/truc-quan" element={<Chart />} />
            <Route path="/thong-tin" element={<Transformer />} />
            <Route path="/thong-tin" element={<Transformer />} />
            <Route path="/thong-tin" element={<Transformer />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
