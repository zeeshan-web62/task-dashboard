function SearchBar({ value, onChange , isDark}) {
  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
     style={{
  width: "300px",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outline: "none",
  fontSize: "15px",
}}
    />
  );
}

export default SearchBar;