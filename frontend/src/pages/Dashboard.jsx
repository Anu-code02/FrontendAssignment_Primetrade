import { useEffect, useState } from "react";
import { useAuthGuard } from "../hooks/useAuthGuard";
import { fetchTasks, createTask, updateTask, deleteTask } from "../api/tasks";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  useAuthGuard();
  const [tasks, setTasks] = useState([]);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("");

  const load = async () => {
    const { data } = await fetchTasks({ q, status });
    setTasks(data.tasks);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, status]);

  const onCreate = async (payload) => {
    await createTask(payload);
    load();
  };

  const onUpdate = async (id, payload) => {
    await updateTask(id, payload);
    load();
  };

  const onDelete = async (id) => {
    await deleteTask(id);
    load();
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="flex gap-2">
        <input className="border p-2 rounded w-full" placeholder="Search title..." value={q}
          onChange={(e) => setQ(e.target.value)} />
        <select className="border p-2 rounded" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">All</option>
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <TaskForm onCreate={onCreate} />
      <TaskList tasks={tasks} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}
