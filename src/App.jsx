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
import Admin from "./pages/admin/Admin";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminProductCreateNew from "./pages/admin/AdminProductCreateNew";

import { useSelector } from "react-redux";

function App() {
  const { isAdmin, newToken } = useSelector((state) => state.user);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:slug" element={<Product />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/aboutproject" element={<AboutUs />} />
        <Route path="/checkout" element={newToken ? <CheckOut /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={isAdmin ? <Admin /> : <Home />} />
        <Route
          path="/admin/products"
          element={isAdmin ? <AdminProducts /> : <Home />}
        />
        <Route
          path="/admin/products/create"
          element={isAdmin ? <AdminProductCreateNew /> : <Home />}
        />
        <Route
          path="/admin/users"
          element={isAdmin ? <AdminUsers /> : <Home />}
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
