import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./themes/CustomTheme";
import { DashboardPage, LoginPage, NotFoundPage } from "./pages";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<div>DIFAJOBS CLIENT</div>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={< NotFoundPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
