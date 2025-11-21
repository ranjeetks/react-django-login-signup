// ✅ App.tsx - Routing setup remains same
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import { refreshAccessToken } from "./services/authService";
import { useEffect } from "react";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  useEffect(() => {
    const checkLogin = async () => {
      try {
        await refreshAccessToken();
      } catch {}
    };
    checkLogin();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
