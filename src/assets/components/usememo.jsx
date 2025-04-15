import { useMemo, useState } from "react";

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // ✅ Memoized value - only recalculates if `count` changes
  const expensiveCalculation = useMemo(() => {
    console.log("🔄 Running expensive calculation...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += count;
    }
    return result;
  }, [count]);

  const themeStyles = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "10px",
    marginTop: "20px",
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>

      <div style={themeStyles}>
        <p>Count: {count}</p>
        <p>Calculated: {expensiveCalculation}</p>
      </div>
    </>
  );
};

export default ExpensiveComponent;
