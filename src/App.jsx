import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Product from "./pages/product/Product";
import AboutUs from "./pages/aboutUs/AboutUs";
import NoMatch from "./components/NoMatch";
import CheckOut from "./pages/checkOut/CheckOut";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:slug" element={<Product />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/aboutproject" element={<AboutUs />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
