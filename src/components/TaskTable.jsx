import TaskRow from "./TaskRow";

function TaskTable({ tasks, onView, onDelete, onToggle , onEdit , isDark}) {
  return (
    <table
      border="1"
      cellPadding="10"
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
        backgroundColor: isDark ? "#1f2937" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <thead>
        <tr>
          <th>ID</th>
          <th>Task</th>
          <th>Status</th>
          <th>User ID</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map((task) => (
         <TaskRow
            key={task.id}
            task={task}
            onView={onView}
            onDelete={onDelete}
            onToggle={onToggle}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TaskTable;