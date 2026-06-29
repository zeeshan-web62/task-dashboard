import { useState } from "react";

function AddTaskModal({ onAdd, onClose , isDark}) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo.trim()) return;

    onAdd({
      id: Date.now(),
      todo,
      completed: false,
      userId: 1,
    });

    setTodo("");
    onClose();
  };

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
          // background: "white",
          background: isDark ? "#1f2937" : "white",
          color: isDark ? "white" : "black",
          padding: "20px",
          borderRadius: "10px",
          width: "350px",
        }}
      >
        <h2>Add Task</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Task..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            style={{ width: "100%", padding: "10px" }}
          />

          <br />
          <br />

          <button type="submit">Add</button>

          <button
            type="button"
            onClick={onClose}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTaskModal;