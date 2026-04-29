// App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BodyParts from "./pages/BodyParts";
import Exercises from "./pages/Exercises";

function App() {
  return (
    
    <div>
      <Navbar />
      <Home />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/bodyparts/:name" element={<BodyParts />} />
      </Routes>
    </div>
    
  );
}

export default App;
