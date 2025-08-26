
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import "./components/seldon/styles.css";
import { CardProduct } from "./components/seldon/parts/CardProduct";
import { CardProductInline } from "./components/seldon/parts/CardProductInline";
import { CardProductMixed } from "./components/seldon/parts/CardProductMixed";
import { ButtonBar } from "./components/seldon/elements/ButtonBar";
import { Title } from "./components/seldon/primitives/Title";
import { Fonts } from "./components/seldon/Fonts";

function Screen1() {
  return (
    <div
      style={{ padding: 20, gap: 20, display: "flex", flexDirection: "column" }}
    >
      <h2>Screen 1 - CardProductInline Demo</h2>

      {/* Default components with default theme */}
      <div
        style={{
          padding: 20,
          gap: 20,
          display: "flex",
        }}
      >
        <Title children="Testing Titles" />
        <ButtonBar />
      </div>

      {/* Default CardProduct */}
      <CardProduct />

      {/* Default Inline Variant */}
      <CardProductInline
        tagline={{}}
        titleProps={{}}
        button={{}}
        label={{}}
        icon={{}}
        button2={{}}
        label2={{}}
        icon2={{}}
        button3={{}}
        label3={{}}
        icon3={{}}
        button4={{}}
        label4={{}}
        icon4={{}}
        button5={{}}
        label5={{}}
        icon5={{}}
        button6={{}}
        label6={{}}
        icon6={{}}
        button7={{}}
        label7={{}}
        icon7={{}}
      />

      {/* Customized Inline Variant */}
      {/* <CardProductInline
        style={{ marginTop: 20, width: 500 }}
        tagline={{ children: "New Product" }}
        titleProps={{ children: "Customized Inline Card" }}
        button={{ onClick: () => alert("Special inline button clicked!") }}
        label={{ children: "Featured" }}
        icon={{ icon: "material-addChart" }}
        button4={{ onClick: () => alert("Action A clicked!") }}
        label4={{ children: "Buy Now" }}
        icon4={{ icon: "material-addBox" }}
        button5={{ onClick: () => alert("Action B clicked!") }}
        label5={{ children: "Learn More" }}
        icon5={{ icon: "material-addLocation" }}
      /> */}

      {/* Default Mixed Variant */}
      <CardProductMixed
        tagline={{}}
        titleProps={{}}
        description={{}}
        button={{}}
        label={{}}
        icon={{}}
        button2={{}}
        label2={{}}
        icon2={{}}
        button3={{}}
        label3={{}}
        icon3={{}}
        button4={{}}
        label4={{}}
        icon4={{}}
      />

      {/* Customized Mixed Variant */}
      {/* <CardProductMixed
        style={{ marginTop: 20, width: 500 }}
        tagline2={{ children: "Is this thing on?" }}
        titleProps={{ children: "Customized Mixed Card" }}
        button={{ onClick: () => alert("Special mix button clicked!") }}
        label={{ children: "Test Me" }}
        icon={{ icon: "material-addChart" }}
        button4={{ onClick: () => alert("Action A clicked!") }}
        label4={{ children: "Shopping" }}
        icon4={{ icon: "material-addBox" }}
      /> */}
    </div>
  );
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
  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({ minWidth: 601, maxWidth: 900 });
  const laptop = useMediaQuery({ minWidth: 901, maxWidth: 1200 });
  const desktop = useMediaQuery({ minWidth: 1201 });

  let nav;
  if (mobile) {
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
  } else if (tablet) {
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
  } else if (laptop) {
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
  } else if (desktop) {
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
      <Fonts />
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
