import { useState, useEffect } from "react";
import { loginUser } from "../api/auth";
import { useAuthStore } from "../store/authStore";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { setAuth } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    // If already logged in, go to dashboard
    if (localStorage.getItem("token")) navigate("/dashboard");
  }, [navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.email || !form.password) return setError("Enter email and password");
    try {
      const { data } = await loginUser(form);
      setAuth({ user: data.user, token: data.token });
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      {error && <p className="text-red-600 mb-3">{error}</p>}
      <form onSubmit={onSubmit} className="space-y-3">
        <input className="w-full border p-2 rounded" placeholder="Email" type="email"
          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}/>
        <input className="w-full border p-2 rounded" placeholder="Password" type="password"
          value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}/>
        <button className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
      <p className="text-sm mt-2">No account? <Link className="text-blue-600" to="/register">Register</Link></p>
    </div>
  );
}
