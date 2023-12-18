import "./App.css";
import AnotherCer from "./components/AnotherCer/AnotherCer";
// import AnotherCer from "./components/AnotherCer/AnotherCer";
import Certificate from "./components/Certificate/Certificate";
import Welcome from "./components/Welcome/Welcome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/AnotherCer" element={<AnotherCer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
