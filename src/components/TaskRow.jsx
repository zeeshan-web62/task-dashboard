function TaskRow({ task, onView, onDelete, onToggle , onEdit}) {
 return (
  <tr >
    <td>{task.id}</td>
    <td>{task.todo}</td>
     <td>
  <button onClick={(e) => {
    e.stopPropagation();
    onToggle(task.id);
  }}>
    {task.completed ? "Completed ✅" : "Pending ⏳"}
  </button>
  </td>
    <td>{task.userId}</td>
    <td>
  <button onClick={() => onView(task)}>
    View
  </button>

  <button
  onClick={() => onEdit(task)}
  style={{ marginLeft: "10px", color: "blue" }}
>
  Edit
</button>
  <button
    onClick={() => onDelete(task)}
    style={{ marginLeft: "10px", color: "red" }}
  >
    Delete
  </button>
</td>
  </tr>
);
}
export default TaskRow;