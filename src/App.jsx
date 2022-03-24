import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NavegationBar from "./components/NavegationBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavegationBar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Shop />} />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
