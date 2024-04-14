import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Biography from "./pages/Biography.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/biography" element={<Biography />} />
      </Routes>
    </Router>
  );
}

export default App;
