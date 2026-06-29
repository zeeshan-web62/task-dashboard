function SummaryCards({ total, completed, pending , isDark}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          background: "#3b82f6",
          // backgroundColor: isDark ? "#1f2937" : "white",
           color: isDark ? "white" : "black",
          // color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "180px",
         flex: 1,
         textAlign: "center",
        }}
      >
        <h3>Total Tasks</h3>
        <h1>{total}</h1>
      </div>

      <div
        style={{
          background: "#22c55e",
          // backgroundColor: isDark ? "#1f2937" : "white",
          color: isDark ? "white" : "black",
          // color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "180px",
          flex: 1,
         textAlign: "center",
        }}
      >
        <h3>Completed</h3>
        <h1>{completed}</h1>
      </div>

      <div
        style={{
          background: "#f59e0b",
          // backgroundColor: isDark ? "#1f2937" : "white",
          color: isDark ? "white" : "black",
          // color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "180px",
          flex: 1,
          textAlign: "center",
        }}
      >
        <h3>Pending</h3>
        <h1>{pending}</h1>
      </div>
    </div>
  );
}

export default SummaryCards;