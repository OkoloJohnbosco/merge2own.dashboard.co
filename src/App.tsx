import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import AuthLayout from "./components/layout/auth-layout";
import OnBoardLayout from "./components/layout/onboard-layout";
import { AuthProvider } from "./lib/context/auth";
import ForgotPassword from "./modules/auth/forget-passowrd";
import Login from "./modules/auth/login";
import Register from "./modules/auth/register";
import ResetPassword from "./modules/auth/reset-password";
import SuccessPage from "./modules/auth/success";
import Home from "./modules/home";
import OnboardingPage from "./modules/onbaord";

function App() {
  return (
    <Routes>
      <Route element={<AuthProvider />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="verify" element={<ResetPassword kind="create" />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route element={<OnBoardLayout />}>
        <Route path="register/success" element={<SuccessPage />} />
        <Route element={<AuthProvider />}>
          <Route path="onboarding" element={<OnboardingPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
