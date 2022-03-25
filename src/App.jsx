import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import AboutUs from "./components/AboutUs";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:id" element={<Shop />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/aboutproject" element={<AboutUs />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
