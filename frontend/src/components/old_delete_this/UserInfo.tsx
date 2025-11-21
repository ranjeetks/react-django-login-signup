import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Alert, Spinner } from "react-bootstrap";

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
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        setError("Token expired or invalid. Please login again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner animation="border" />;

  return (
    <Card className="mt-4 shadow">
      <Card.Body>
        <h5>User Info</h5>
        {error && <Alert variant="danger">{error}</Alert>}
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
      </Card.Body>
    </Card>
  );
};

export default UserInfo;
