import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Screen1() {
  return <div style={{ padding: 20 }}>Screen 1</div>;
}
function Screen2() {
  return <div style={{ padding: 20 }}>Screen 2</div>;
}
function Screen3() {
  return <div style={{ padding: 20 }}>Screen 3</div>;
}
function Screen4() {
  return <div style={{ padding: 20 }}>Screen 4</div>;
}
function Screen5() {
  return <div style={{ padding: 20 }}>Screen 5</div>;
}

function App() {
  return (
    <Router>
      <nav style={{ display: 'flex', gap: 16, padding: 16, background: '#eee' }}>
        <Link to="/">Screen 1</Link>
        <Link to="/screen2">Screen 2</Link>
        <Link to="/screen3">Screen 3</Link>
        <Link to="/screen4">Screen 4</Link>
        <Link to="/screen5">Screen 5</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Screen1 />} />
        <Route path="/screen2" element={<Screen2 />} />
        <Route path="/screen3" element={<Screen3 />} />
        <Route path="/screen4" element={<Screen4 />} />
        <Route path="/screen5" element={<Screen5 />} />
      </Routes>
    </Router>
  );
}

export default App;
