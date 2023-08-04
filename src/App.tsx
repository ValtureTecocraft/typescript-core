import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;
