

```md
# 🪝 React Custom Hooks

This repository contains reusable React custom hooks for common tasks like checking online status, tracking mouse position, and fetching data.

---

## 📦 Hooks Included

### ✅ `useOnline`

Tracks the user's internet connection status.

**File:** `hooks/useOnline.js`

#### Usage:

```js
import useOnline from './hooks/useOnline';

function Status() {
  const isOnline = useOnline();
  return <h2>{isOnline ? "✅ Online" : "❌ Offline"}</h2>;
}
```

---

### 🖱 `useMousePointer`

Tracks the mouse cursor position on the screen.

**File:** `hooks/useMousePointer.js`

#### Usage:

```js
import useMousePointer from './hooks/useMousePointer';

function MouseTracker() {
  const { x, y } = useMousePointer();
  return <p>Mouse is at X: {x}, Y: {y}</p>;
}
```

---

### 🌐 `useData`

Fetches data from a given API endpoint.

**File:** `hooks/useData.js`

#### Usage:

```js
import useData from './hooks/useData';

function UsersList() {
  const { info, loading } = useData();

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {info.map((user, index) => (
        <li key={index}>{user.firstname}</li>
      ))}
    </ul>
  );
}
```



```markdown
# 🕐 useDebounce Custom Hook

This repository contains a custom React Hook called `useDebounce`, which helps you delay updates to a value until a specified time has passed without changes. This is useful when you want to limit how often a function runs — such as filtering a list, sending API requests, or handling expensive operations.

---

## 🧠 What is Debouncing?

Debouncing is a programming pattern that delays the execution of a function until after a specified wait time has elapsed since the last time it was invoked. It's useful for:
- Search bars
- Auto-saving input
- Filtering lists
- API calls on user input

---

## 📄 Usage

```jsx
import React, { useState } from "react";
import useDebounce from "./hooks/Debounce";

const DebounceExample = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 1000); // 1 second delay

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
```

---

## 🧩 Hook Implementation

```js
// hooks/Debounce.js
import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler); // cleanup if value changes before delay
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
```

---





## 🧠 Why Use Custom Hooks?

- Cleaner components
- Code reusability
- Easy testing
- Separation of logic and UI

---



## 📄 License

This project is open-source and free to use.
