import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import "./components/seldon/styles.css";
import { BarNavigation } from "./components/seldon/modules/BarNavigation";
import { BarNavigationMobile } from "./components/seldon/modules/BarNavigationMobile";
import { BarNavigationTablet } from "./components/seldon/modules/BarNavigationTablet";
import { BarNavigationDesktop } from "./components/seldon/modules/BarNavigationDesktop";
import { CardProduct } from "./components/seldon/parts/CardProduct";
import { CardProductInline } from "./components/seldon/parts/CardProductInline";
import { CardProductMixed } from "./components/seldon/parts/CardProductMixed";
import { ButtonBar } from "./components/seldon/elements/ButtonBar";
import { Title } from "./components/seldon/primitives/Title";
import { Fonts } from "./components/seldon/Fonts";

function Screen1({ screenStyle }: { screenStyle: React.CSSProperties }) {
  return (
    <div
      style={{ padding: 20, gap: 20, display: "flex", flexDirection: "column", ...screenStyle }}
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
function Screen2({ screenStyle }: { screenStyle: React.CSSProperties }) {
  return (
    <div
      style={{ padding: 20, gap: 20, display: "flex", flexDirection: "column", ...screenStyle }}
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
function Screen3({ screenStyle }: { screenStyle: React.CSSProperties }) {
  return <div style={{ padding: 20, ...screenStyle }}>Screen 3</div>;
}
function Screen4({ screenStyle }: { screenStyle: React.CSSProperties }) {
  return <div style={{ padding: 20, ...screenStyle }}>Screen 4</div>;
}
function Screen5({ screenStyle }: { screenStyle: React.CSSProperties }) {
  return <div style={{ padding: 20, ...screenStyle }}>Screen 5</div>;
}

function AppWithNav() {

  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({ minWidth: 601, maxWidth: 900 });
  const laptop = useMediaQuery({ minWidth: 901, maxWidth: 1200 });
  const desktop = useMediaQuery({ minWidth: 1201 });
  const navigate = useNavigate();
  const location = useLocation();

  const SELECTED_TAB = "var(--sdn-swatch-seldon-blue)";

  // Helper to determine if a route is active
  const isActive = (path: string) => location.pathname === path;

  let nav;

  // Define styles for each device type for screens
  const screenStyle = mobile
    ? { minWidth: 0, maxWidth: 600 }
    : tablet
    ? { minWidth: 601, maxWidth: 900 }
    : laptop
    ? { minWidth: 901, maxWidth: 1200 }
    : desktop
    ? { minWidth: 1201 }
    : {};

  const navProps = {
    button: {
      onClick: () => navigate("/"),
      style: isActive("/") ? { backgroundColor: SELECTED_TAB } : undefined,
    },
    button2: {
      onClick: () => navigate("/screen2"),
      style: isActive("/screen2")
        ? { backgroundColor: SELECTED_TAB }
        : undefined,
    },
    button3: {
      onClick: () => navigate("/screen3"),
      style: isActive("/screen3")
        ? { backgroundColor: SELECTED_TAB }
        : undefined,
    },
    button4: {
      onClick: () => navigate("/screen4"),
      style: isActive("/screen4")
        ? { backgroundColor: SELECTED_TAB }
        : undefined,
    },
    button5: {
      onClick: () => navigate("/screen5"),
      style: isActive("/screen5")
        ? { backgroundColor: SELECTED_TAB }
        : undefined,
    },
  };

  if (mobile) {
    nav = <BarNavigationMobile {...navProps} />;
  } else if (tablet) {
    nav = <BarNavigationTablet {...navProps} />;
  } else if (laptop) {
    nav = <BarNavigation {...navProps} />;
  } else {
    nav = <BarNavigationDesktop {...navProps} />;
  }


  return (
    <>
      <Fonts />
      {nav}
      <Routes>
        <Route path="/" element={<Screen1 screenStyle={screenStyle} />} />
        <Route path="/screen2" element={<Screen2 screenStyle={screenStyle} />} />
        <Route path="/screen3" element={<Screen3 screenStyle={screenStyle} />} />
        <Route path="/screen4" element={<Screen4 screenStyle={screenStyle} />} />
        <Route path="/screen5" element={<Screen5 screenStyle={screenStyle} />} />
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
