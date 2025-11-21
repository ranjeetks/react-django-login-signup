import UserInfo from "../components/UserInfo";
import LogoutButton from "../components/LogoutButton";

const Dashboard = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        className="p-4 shadow rounded text-center"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <h2 className="mb-4">Welcome to Dashboard</h2>
        <UserInfo />
        <LogoutButton />
      </div>
    </div>
  );
};
export default Dashboard;
