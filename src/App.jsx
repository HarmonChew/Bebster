import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import Success from "./pages/Success";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="app">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route
            path="register"
            element={user ? <Navigate to="/" replace /> : <Register />}
          />
          <Route
            path="login"
            element={user ? <Navigate to="/" replace /> : <Login />}
          />
          <Route path="products">
            <Route index element={<ProductList />} />
            <Route path=":category" element={<ProductList />} />
          </Route>
          <Route path="product/:id" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
