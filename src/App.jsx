import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CV } from "./pages/CV";
import { Documents } from "./pages/Documents";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/documents" element={<Documents />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
