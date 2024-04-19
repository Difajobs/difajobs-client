import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./themes/CustomTheme";
import {
  DashboardPage,
  GoogleRegisterPage,
  LoginPage,
  NotFoundPage,
  RegisterPage,
  ProfilePage,
  VerificationPage,
  VerifiedPage,
  LandingPage,
} from "./pages";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/register-google" element={<GoogleRegisterPage />} />
            <Route path="/verification" element={<VerificationPage />} />
            <Route
              path="/account-verified/:email/:token"
              element={<VerifiedPage />}
            />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
