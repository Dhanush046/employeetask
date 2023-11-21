import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Add from "./Add";
import Update from "./Update";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
