import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import "./components/seldon/styles.css";
import { BarNavigation } from "./components/seldon/modules/BarNavigation";
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
      <h2>Screen 1 - General Components</h2>
      {/* Default components with default theme */}
      <div
        style={{
          padding: 20,
          gap: 20,
          display: "flex",
        }}
      >
        <Title children="Testing Titles" />
        <ButtonBar
          button2={{ onClick: () => alert("Yoohoo clicked!") }}
          icon2={{ icon: "material-addBox" }}
          label2={{ children: "Yoohoo!" }}
        />
      </div>
    </div>
  );
}
function Screen2() {
  return (
    <div
      style={{ padding: 20, gap: 20, display: "flex", flexDirection: "column" }}
    >
      <h2>Screen 2 - Product Cards</h2>
      {/* Default CardProduct */}
      <CardProduct />

      {/* Customized CardProduct */}
      <CardProduct
        tagline={{ children: "New Product" }}
        titleProps={{ children: "Customized Card" }}
        button={{ onClick: () => alert("Special button clicked!") }}
        label={{ children: "Featured" }}
        icon={{ icon: "material-addChart" }}
        button2={{ onClick: () => alert("Action A clicked!") }}
        label2={{ children: "Buy Now" }}
        icon2={{ icon: "material-addBox" }}
        button3={{ onClick: () => alert("Action B clicked!") }}
        label3={{ children: "Learn More" }}
        icon3={{ icon: "material-addLocation" }}
      />

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
      <CardProductInline
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
      />

      {/* Default Mixed Variant */}
      <CardProductMixed
        tagline={{}}
        titleProps={{}}
        tagline2={{}}
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
      <CardProductMixed
        style={{ marginTop: 20, width: 500 }}
        titleProps={{ children: "Customized Mixed Card" }}
        button={{ onClick: () => alert("Special mix button clicked!") }}
        label={{ children: "Test Me" }}
        icon={{ icon: "material-addChart" }}
        button4={{ onClick: () => alert("Action A clicked!") }}
        label4={{ children: "Shopping" }}
        icon4={{ icon: "material-addBox" }}
      />
    </div>
  );
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

function AppWithNav() {

  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({ minWidth: 601, maxWidth: 900 });
  const laptop = useMediaQuery({ minWidth: 901, maxWidth: 1200 });
  const desktop = useMediaQuery({ minWidth: 1201 });
  const general = { minWidth: 1201 };
  const navigate = useNavigate();
  const location = useLocation();

  const SELECTED_TAB = "var(--sdn-swatch-seldon-blue)";

  // Helper to determine if a route is active
  const isActive = (path: string) => location.pathname === path;

  let nav;
  nav = (
    <BarNavigation
      button={{
        onClick: () => navigate("/"),
        style: isActive("/") ? { backgroundColor: SELECTED_TAB } : undefined,
      }}
      button2={{
        onClick: () => navigate("/screen2"),
        style: isActive("/screen2") ? { backgroundColor: SELECTED_TAB } : undefined,
      }}
      button3={{
        onClick: () => navigate("/screen3"),
        style: isActive("/screen3") ? { backgroundColor: SELECTED_TAB } : undefined,
      }}
      button4={{
        onClick: () => navigate("/screen4"),
        style: isActive("/screen4") ? { backgroundColor: SELECTED_TAB } : undefined,
      }}
      button5={{
        onClick: () => navigate("/screen5"),
        style: isActive("/screen5") ? { backgroundColor: SELECTED_TAB } : undefined,
      }}
    />
  );

  return (
    <>
      <Fonts />
      {nav}
      <Routes>
        <Route path="/" element={<Screen1 />} />
        <Route path="/screen2" element={<Screen2 />} />
        <Route path="/screen3" element={<Screen3 />} />
        <Route path="/screen4" element={<Screen4 />} />
        <Route path="/screen5" element={<Screen5 />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWithNav />
    </Router>
  );
}

export default App;
