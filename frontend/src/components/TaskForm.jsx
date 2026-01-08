import { useState } from "react";

export default function TaskForm({ onCreate }) {
  const [form, setForm] = useState({ title: "", description: "", status: "todo" });

  const submit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    onCreate(form);
    setForm({ title: "", description: "", status: "todo" });
  };

  return (
    <form onSubmit={submit} className="space-y-2 p-4 border rounded">
      <input className="w-full border p-2 rounded" placeholder="Title" value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}/>
      <textarea className="w-full border p-2 rounded" placeholder="Description" value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}/>
      <select className="w-full border p-2 rounded" value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}>
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <button className="bg-green-600 text-white px-4 py-2 rounded">Add Task</button>
    </form>
  );
}
