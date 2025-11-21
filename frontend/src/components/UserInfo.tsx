// ✅ UserInfo.tsx - Converted to Bootstrap 5+
import { useEffect, useState } from "react";
import axios from "axios";

const UserInfo = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      setError("No token found. Please log in.");
      setLoading(false);
      return;
    }

    axios
      .get("http://localhost:8000/api/auth/me/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch(() => setError("Token expired or invalid. Please login again."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="spinner-border" role="status"></div>;

  return (
    <div className="card mt-4 shadow">
      <div className="card-body">
        <h5>User Info</h5>
        {error && <div className="alert alert-danger">{error}</div>}
        {user && (
          <div>
            <p>
              <strong>ID:</strong> {user.id}
            </p>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
