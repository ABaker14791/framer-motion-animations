import "./sass/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages";
import DesignOne from "./pages/DesignOne.jsx";
import Forms from "./pages/Forms";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="DesignOne" element={<DesignOne />} />
        <Route path="Forms" element={<Forms />} />
      </Routes>
    </Router>
  );
}

export default App;
