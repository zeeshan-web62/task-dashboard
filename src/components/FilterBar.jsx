function FilterBar({ currentFilter, onFilterChange , isDark}) {
  const filters = ["all", "completed", "pending"];

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
         style={{
  padding: "10px 20px",
  marginRight: "10px",
  borderRadius: "8px",
  border: "1px solid #2563eb",
 backgroundColor:
  currentFilter === filter
    ? "#2563eb"
    : isDark
      ? "#374151"
      : "white",

color:
  currentFilter === filter
    ? "white"
    : isDark
      ? "white"
      : "#2563eb",
}}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;