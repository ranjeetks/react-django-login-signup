import { Button } from "react-bootstrap";
import { logout } from "../services/authService";

const LogoutButton = () => {
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      logout();
    }
  };
  return (
    <Button variant="danger" className="mt-3" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
