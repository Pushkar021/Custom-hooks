import { useEffect, useState } from "react";


function Lifecyclehooks() {
  return (
    <>
      <C1 />
    </>
  );
}

// This is a child component
const C1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // ✅ This runs after the component mounts and after every update to `count`
    console.log("🎯 Effect: Component mounted or 'count' changed");

    // 🔁 This function runs before the next effect (if `count` changes) or on unmount
    return () => {
      console.log("🧹 Cleanup: Component is about to re-render or unmount");
    };
  }, [count]); // 👀 Dependency: The effect runs whenever `count` changes

  return (
    <>
      <p>Count is: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </>
  );
};

export default Lifecyclehooks;
