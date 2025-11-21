// ✅ AuthPage.tsx - Pure Bootstrap 5 layout
import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="w-100" style={{ maxWidth: "420px", padding: "1rem" }}>
        {showLogin ? <LoginForm /> : <SignupForm />}

        <div className="text-center mt-3">
          {showLogin ? (
            <span>
              Don’t have an account?{" "}
              <button
                className="btn btn-link p-0"
                onClick={() => setShowLogin(false)}
              >
                Sign up
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <button
                className="btn btn-link p-0"
                onClick={() => setShowLogin(true)}
              >
                Log in
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
