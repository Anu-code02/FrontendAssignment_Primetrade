import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../api/profile";
import { useAuthGuard } from "../hooks/useAuthGuard";
import { useAuthStore } from "../store/authStore";

export default function ProfilePage() {
  useAuthGuard();
  const { setAuth } = useAuthStore();
  const [user, setUser] = useState({ name: "", email: "" });
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const load = async () => {
      const { data } = await getProfile();
      setUser(data.user);
      setAuth({ user: data.user, token: localStorage.getItem("token") });
    };
    load();
  }, [setAuth]);

  const onSave = async () => {
    setMsg("");
    const { data } = await updateProfile({ name: user.name });
    setUser(data.user);
    setMsg("Profile updated");
  };

  return (
    <div className="max-w-lg mx-auto p-6 space-y-3">
      <h1 className="text-2xl font-semibold">Profile</h1>
      {msg && <p className="text-green-700">{msg}</p>}
      <div className="space-y-2">
        <label>Name</label>
        <input className="w-full border p-2 rounded" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })}/>
      </div>
      <div className="space-y-2">
        <label>Email</label>
        <input className="w-full border p-2 rounded" value={user.email} disabled />
      </div>
      <button onClick={onSave} className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
    </div>
  );
}
