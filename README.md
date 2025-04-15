Absolutely! Here's the **actual `README.md` code** you can directly copy and paste into your project:

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

---

## 🧠 Why Use Custom Hooks?

- Cleaner components
- Code reusability
- Easy testing
- Separation of logic and UI

---



## 📄 License

This project is open-source and free to use.
