import { useState } from "react";
import { registerUser } from "../api/auth";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.password || form.password.length < 6) {
      return setError("Please fill all fields. Password >= 6 chars.");
    }
    try {
      await registerUser(form);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Create account</h1>
      {error && <p className="text-red-600 mb-3">{error}</p>}
      <form onSubmit={onSubmit} className="space-y-3">
        <input className="w-full border p-2 rounded" placeholder="Name" value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}/>
        <input className="w-full border p-2 rounded" placeholder="Email" type="email" value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}/>
        <input className="w-full border p-2 rounded" placeholder="Password" type="password" value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}/>
        <button className="w-full bg-blue-600 text-white p-2 rounded">Register</button>
        <p className="text-sm">Already have an account? <Link className="text-blue-600" to="/login">Login</Link></p>
      </form>
    </div>
  );
}
