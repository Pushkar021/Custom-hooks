import React, { useState } from "react";
import useDebounce from "../../hooks/Debounce";

const DebounceExample = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 1000);
 

  return (
    <div>
        <h3>{debouncedValue}</h3>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Type something"
      />
    </div>
  );
};

export default DebounceExample;
