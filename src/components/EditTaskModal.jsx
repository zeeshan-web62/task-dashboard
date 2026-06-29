
 import { useState, useEffect } from "react";
function EditTaskModal({ task, onSave, onClose , isDark}) {
  if (!task) return null;
    const [todo, setTodo] = useState("");

useEffect(() => {
  if (task) {
    setTodo(task.todo);
  }
}, [task]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
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
          width: "320px",
        }}
      >
        <h3>Edit Task</h3>

        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
          }}
        />

        <div style={{ marginTop: "20px" }}>
          <button onClick={onClose}>Close</button>
          <button
            onClick={() => {
              onSave({
                ...task,
                todo: todo,
              });
              onClose();
            }}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "10px",
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditTaskModal;