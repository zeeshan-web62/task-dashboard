


import EditTaskModal from "./components/EditTaskModal";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import AddTaskModal from "./components/AddTaskModal";
import TaskDetailModal from "./components/TaskDetailModal";
import Pagination from "./components/Pagination";
import TaskRow from "./components/TaskRow";
import TaskTable from "./components/TaskTable";
import { useState, useEffect, useMemo } from "react";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import SummaryCards from "./components/SummaryCards";
// import { useState, useEffect } from "react";
import { fetchTasks } from "./services/taskService";

function App() {
  // ==========================
  // State
  // ==========================
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDark, setIsDark] = useState(false);

  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const [currentPage, setCurrentPage] = useState(1);

  const [selectedTask, setSelectedTask] = useState(null);
  const [editingTask, setEditingTask] = useState(null);
  const [deleteTask, setDeleteTask] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
 

  // ==========================
  // Fetch Tasks from API
  // ==========================
  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchTasks();
        setTasks(data);

        console.log(data); // Check browser console
      } catch (err) {
  console.error(err);
  setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  // ==========================
  // Debounce Search
  // ==========================
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchInput);
      setCurrentPage(1);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput]);

  // ==========================
  // Temporary UI
  // ==========================
  const completedCount = tasks.filter(task => task.completed).length;

  const pendingCount = tasks.filter(task => !task.completed).length;
  const processedTasks = useMemo(() => {
  let result = [...tasks];

  // Filter
  if (filter === "completed") {
    result = result.filter(task => task.completed);
  } else if (filter === "pending") {
    result = result.filter(task => !task.completed);
  }

  // Search
  if (searchQuery.trim()) {
    result = result.filter(task =>
      task.todo.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  // sort
   if (sortBy === "az") {
  result.sort((a, b) => a.todo.localeCompare(b.todo));
} else if (sortBy === "za") {
  result.sort((a, b) => b.todo.localeCompare(a.todo));
} else if (sortBy === "completed") {
  result.sort((a, b) => b.completed - a.completed);
} else if (sortBy === "pending") {
  result.sort((a, b) => a.completed - b.completed);
}

  return result;
}, [tasks, filter, searchQuery, sortBy]); 
 const itemsPerPage = 10;

const totalPages = Math.ceil(processedTasks.length / itemsPerPage);

const currentTasks = processedTasks.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);
const handleAddTask = (newTask) => {
  setTasks((prevTasks) => [newTask, ...prevTasks]);
};
const handleToggle = (id) => {
  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  );
};
const handleEditTask = (updatedTask) => {
  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    )
  );
};
const handleDeleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
  setDeleteTask(null);
};
return (
  <div
    className={isDark ? "dark" : ""}
    style={{
      backgroundColor: isDark ? "#111827" : "#ffffff",
      color: isDark ? "#ffffff" : "#000000",
      minHeight: "100vh",
      padding: "30px",
      transition: "0.3s",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <h1>Task Dashboard</h1>

      <button
        onClick={() => setIsDark(!isDark)}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          border: "none",
          backgroundColor: isDark ? "#facc15" : "#1f2937",
          color: isDark ? "black" : "white",
        }}
      >
        {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>

    <SummaryCards
      total={tasks.length}
      completed={completedCount}
      pending={pendingCount}
      isDark={isDark}
    />

      {loading && <h3>Loading...</h3>}

      {error && <h3>{error}</h3>}

      {!loading && !error && (
        <>
          <p>Total Tasks : {tasks.length}</p>

         <SearchBar
  value={searchInput}
  onChange={setSearchInput}
  isDark={isDark}
   />
        <select
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
>
  <option value="default">Default</option>
  <option value="az">A → Z</option>
  <option value="za">Z → A</option>
  <option value="completed">Completed First</option>
  <option value="pending">Pending First</option>
</select>
        <FilterBar
  currentFilter={filter}
  onFilterChange={setFilter}
  isDark={isDark}
  />
     <button
  onClick={() => setShowAddModal(true)}
 style={{
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  padding: "10px 18px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  marginTop: "10px",
  marginBottom: "20px",
}}
>
  + Add Task
</button>
          <h3 style={{ marginTop: "20px" }}>
            Search Query : {searchQuery}
          </h3>
          <p>Filtered Tasks: {processedTasks.length}</p>
          {/* <h2>Pagination Test</h2> */}
          <TaskTable
          tasks={currentTasks}
          onDelete={setDeleteTask}
         onView={setSelectedTask}
         onToggle={handleToggle}
         onEdit={setEditingTask}
         isDark={isDark}
        />
        
         <Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={(page) => {
    console.log("Clicked:", page);
    setCurrentPage(page);
  }}
/>
     <TaskDetailModal
  task={selectedTask}
  onClose={() => setSelectedTask(null)}
  isDark={isDark}
/>
  {showAddModal && (
  <AddTaskModal
    onAdd={handleAddTask}
    onClose={() => setShowAddModal(false)}
    isDark={isDark}
  />
  
)}
    {deleteTask && (
  <DeleteConfirmModal
    task={deleteTask}
    onDelete={handleDeleteTask}
    onClose={() => setDeleteTask(null)}
    isDark={isDark}
  />
)}
{editingTask && (
  <EditTaskModal
    task={editingTask}
    onSave={handleEditTask}
    onClose={() => setEditingTask(null)}
    isDark={isDark}
  />
)}
        </>
       
      )}
    </div>
  );
}

export default App;