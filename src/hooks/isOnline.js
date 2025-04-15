import { useEffect, useState } from 'react';
function useisOnline(){
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);

    useEffect(() => {
      const handleOnline = () => setIsOnline(true);
      const handleOffline = () => setIsOnline(false);

      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);

      return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
    }, []);


    return isOnline;
}   

export default useisOnline;



// Great question! Let's break it down step by step and explain **why we use both** `window.navigator.onLine` and `window.addEventListener(...)` together.

// ---

// ### 🔹 `const [isOnline, setIsOnline] = useState(window.navigator.onLine);`

// This line:

// ✅ Sets the **initial value** of `isOnline` based on the current status of the browser:
// - If you're connected to the internet: `window.navigator.onLine` → `true`
// - If you're not connected: `false`

// But this **only gives you the value at that moment**.

// ---

// ### 🔹 Why we use `window.addEventListener(...)`

// The internet connection can **change at any time** after the component loads. So we need to **listen** for future changes — like:
// - When Wi-Fi disconnects
// - When the user goes offline
// - Or reconnects again

// That's why we use:

// ```js
// window.addEventListener('online', () => setIsOnline(true));
// window.addEventListener('offline', () => setIsOnline(false));
// ```

// These event listeners **update the state** when the connection status changes in real-time.

// ---

// ### 🔄 What if we didn’t use `addEventListener`?

// Then `isOnline` would only be correct when the component first renders — and would never change again.

// ---

// ### ⚠ One more important fix (Bug in your current code!)

// You're using this in the cleanup function:

// ```js
// return () => {
//   window.removeEventListener("online", () => setIsOnline(true)); ❌
//   window.removeEventListener("offline", () => setIsOnline(false)); ❌
// };
// ```

// This won’t work — because `() => setIsOnline(true)` is a **different function reference** than the one used in `addEventListener`. So it won’t actually remove anything.

// ---

// ### ✅ Corrected Version:

// ```js
// useEffect(() => {
//   const handleOnline = () => setIsOnline(true);
//   const handleOffline = () => setIsOnline(false);

//   window.addEventListener('online', handleOnline);
//   window.addEventListener('offline', handleOffline);

//   return () => {
//     window.removeEventListener("online", handleOnline);
//     window.removeEventListener("offline", handleOffline);
//   };
// }, []);
// ```

// ---

// ### 🔁 Summary:

// | What | Why |
// |------|-----|
// | `window.navigator.onLine` | Sets the **initial state** (online or offline) |
// | `window.addEventListener` | Keeps the state updated **on future changes** |
// | Cleanup with `removeEventListener` | Prevents **memory leaks** or duplicate listeners |

// Let me know if you want to show toast notifications when status changes too 😄