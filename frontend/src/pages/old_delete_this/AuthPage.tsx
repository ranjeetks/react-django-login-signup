import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa", // Bootstrap's bg-light color
      }}
    >
      <div className="w-100" style={{ maxWidth: "420px", padding: "1rem" }}>
        {/* 👇 Render Login or Signup Form */}
        {showLogin ? <LoginForm /> : <SignupForm />}

        {/* 👇 Toggle Button */}
        <div className="text-center mt-3">
          {showLogin ? (
            <span>
              Don’t have an account?{" "}
              <button
                onClick={() => setShowLogin(false)}
                className="btn btn-link p-0"
              >
                Sign up
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <button
                onClick={() => setShowLogin(true)}
                className="btn btn-link p-0"
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
