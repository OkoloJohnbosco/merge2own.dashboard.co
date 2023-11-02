import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import AuthLayout from "./components/layout/auth-layout";
import ForgotPassword from "./modules/auth/forget-passowrd";
import Login from "./modules/auth/login";
import Register from "./modules/auth/register";
import Home from "./modules/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
