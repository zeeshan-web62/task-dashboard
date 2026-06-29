function DeleteConfirmModal({ task, onDelete, onClose , isDark}) {
  if (!task) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          // background: "white",
          background: isDark ? "#1f2937" : "white",
          color: isDark ? "white" : "black",
          padding: "20px",
          borderRadius: "10px",
          width: "350px",
        }}
      >
        <h2>Delete Task</h2>

        <p>
          Are you sure you want to delete:
          <br />
          <strong>{task.todo}</strong> ?
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <button onClick={onClose}>Cancel</button>

          <button
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "8px 15px",
              cursor: "pointer",
            }}
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmModal;