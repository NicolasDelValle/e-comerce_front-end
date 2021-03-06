import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Product from "./pages/product/Product";
import AboutUs from "./pages/aboutUs/AboutUs";
import NoMatch from "./components/NoMatch";
import Cart from "./pages/cart/Cart";
import CheckOut from "./pages/checkOut/CheckOut";
import ThankYou from "./pages/thankyou/ThankYou";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminProductCreateNew from "./pages/admin/AdminProductCreateNew";
import AdminProductEdit from "./pages/admin/AdminProductEdit";
import UserSettingsAccount from "./pages/userSettings/UserSettingsAccount";
import UserSettingsAddress from "./pages/userSettings/UserSettingsAddress";
import AdminUsersOrders from "./pages/admin/AdminUsersOrders";
import AdminUsersOrderById from "./pages/admin/AdminUsersOrderById";
import UserOrderHistory from "./pages/orderHistory/UserOrderHistory";
import { useSelector } from "react-redux";

function App() {
  const { isAdmin } = useSelector((state) => state.user);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:slug" element={<Product />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/checkout" element={<CheckOut />} />
        <Route path="/cart/thankyou" element={<ThankYou />} />
        <Route path="/settings/account" element={<UserSettingsAccount />} />
        <Route path="/settings/address" element={<UserSettingsAddress />} />
        <Route path="/history" element={<UserOrderHistory />} />
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
          path="/admin/products/edit/:slug"
          element={isAdmin ? <AdminProductEdit /> : <Home />}
        />
        <Route
          path="/admin/users"
          element={isAdmin ? <AdminUsers /> : <Home />}
        />
        <Route
          path="/admin/orders"
          element={isAdmin ? <AdminUsersOrders /> : <Home />}
        />
        <Route
          path="/admin/orders/:id"
          element={isAdmin ? <AdminUsersOrderById /> : <Home />}
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
