export default function TaskList({ tasks, onUpdate, onDelete }) {
  return (
    <div className="space-y-3">
      {tasks.map((t) => (
        <div key={t._id} className="border rounded p-3 flex items-start justify-between">
          <div>
            <h3 className="font-semibold">{t.title}</h3>
            {t.description && <p className="text-sm text-gray-600">{t.description}</p>}
            <span className="text-xs bg-gray-200 px-2 py-1 rounded">{t.status}</span>
          </div>
          <div className="flex gap-2">
            <button
              className="px-2 py-1 border rounded"
              onClick={() => onUpdate(t._id, { status: t.status === "done" ? "todo" : "done" })}
            >
              Toggle Done
            </button>
            <button
              className="px-2 py-1 bg-red-600 text-white rounded"
              onClick={() => onDelete(t._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {tasks.length === 0 && <p className="text-gray-600">No tasks yet.</p>}
    </div>
  );
}
