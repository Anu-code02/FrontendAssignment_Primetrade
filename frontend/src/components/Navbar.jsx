import { useAuthStore } from "../store/authStore";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, clearAuth } = useAuthStore();
  const navigate = useNavigate();
  const logout = () => {
    clearAuth();
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <Link to="/" className="font-semibold">Tasky</Link>
      <div className="flex gap-4 items-center">
        {user && <Link to="/profile">Profile</Link>}
        {user && <Link to="/dashboard">Dashboard</Link>}
        {user ? (
          <button onClick={logout} className="px-3 py-1 bg-gray-900 text-white rounded">Logout</button>
        ) : (
          <Link to="/login" className="px-3 py-1 border rounded">Login</Link>
        )}
      </div>
    </nav>
  );
}
