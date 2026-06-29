function TaskDetailModal({ task, onClose , isDark}) {
  if (!task) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          background: isDark ? "#1f2937" : "white",
          color: isDark ? "white" : "black",
          padding: "20px",
          borderRadius: "10px",
          width: "400px",
        }}
      >
        <h2>Task Details</h2>

        <p><b>ID:</b> {task.id}</p>
        <p><b>Task:</b> {task.todo}</p>
        <p><b>Status:</b> {task.completed ? "Completed" : "Pending"}</p>
        <p><b>User ID:</b> {task.userId}</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default TaskDetailModal;