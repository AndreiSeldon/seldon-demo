import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./App.css";

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
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const isTablet = useMediaQuery({ minWidth: 601, maxWidth: 900 });
  const isLaptop = useMediaQuery({ minWidth: 901, maxWidth: 1200 });
  const isDesktop = useMediaQuery({ minWidth: 1201 });

  let nav;
  if (isMobile) {
    nav = (
      <nav style={{ background: "#eee", padding: 16 }}>
        <div>Mobile Navigation</div>
        <Link to="/">Screen 1</Link>
        <Link to="/screen2">Screen 2</Link>
        <Link to="/screen3">Screen 3</Link>
        <Link to="/screen4">Screen 4</Link>
        <Link to="/screen5">Screen 5</Link>
      </nav>
    );
  } else if (isTablet) {
    nav = (
      <nav
        style={{
          background: "#cce",
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <div>Tablet Navigation</div>
        <Link to="/">Screen 1</Link>
        <Link to="/screen2">Screen 2</Link>
        <Link to="/screen3">Screen 3</Link>
        <Link to="/screen4">Screen 4</Link>
        <Link to="/screen5">Screen 5</Link>
      </nav>
    );
  } else if (isLaptop) {
    nav = (
      <nav
        style={{ background: "#cec", padding: 16, display: "flex", gap: 24 }}
      >
        <div>Laptop Navigation</div>
        <Link to="/">Screen 1</Link>
        <Link to="/screen2">Screen 2</Link>
        <Link to="/screen3">Screen 3</Link>
        <Link to="/screen4">Screen 4</Link>
        <Link to="/screen5">Screen 5</Link>
      </nav>
    );
  } else if (isDesktop) {
    nav = (
      <nav
        style={{
          background: "#ecc",
          padding: 16,
          display: "flex",
          gap: 32,
          justifyContent: "center",
        }}
      >
        <div>Desktop Navigation</div>
        <Link to="/">Screen 1</Link>
        <Link to="/screen2">Screen 2</Link>
        <Link to="/screen3">Screen 3</Link>
        <Link to="/screen4">Screen 4</Link>
        <Link to="/screen5">Screen 5</Link>
      </nav>
    );
  }

  return (
    <Router>
      {nav}
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
