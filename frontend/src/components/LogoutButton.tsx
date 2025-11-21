// ✅ LogoutButton.tsx - Converted to Bootstrap 5+
import { logout } from "../services/authService";

const LogoutButton = () => {
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) logout();
  };

  return (
    <button className="btn btn-danger mt-3" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
