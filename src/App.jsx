import "./sass/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages";
import DesignOne from "./pages/DesignOne.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="DesignOne" element={<DesignOne />} />
      </Routes>
    </Router>
  );
}

export default App;
