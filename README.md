# useScrollLock

**A super simple React hook for scroll lock 🔒**

## Installation

To install the `useScrollLock` hook, use the following command:

```shell
npm install @yoojinyoung/usescrolllock
```

## Usage

To use the `useScrollLock` hook, follow these two steps:

1. Wrap your application with `ScrollLockProvider`.
2. Use the `useScrollLock` hook in your component.

### Step 1: Wrap your application with `ScrollLockProvider`

In your main application file (e.g., `App.jsx`), wrap your application with the `ScrollLockProvider` component:

```jsx
// App.jsx
import { ScrollLockProvider } from "@yoojinyoung/useScrollLock";

function App() {
  return (
    <ScrollLockProvider>
      <YourAppComponents />
    </ScrollLockProvider>
  );
}
```

### Step 2: Use `useScrollLock` in your component

In any component where you want to control the scroll lock, use the `useScrollLock` hook:

```jsx
// SomeComponent.jsx
import { useEffect } from "react";
import { useScrollLock } from "@yoojinyoung/useScrollLock";

function SomeComponent() {
  const { lock, release, isScrollLocked } = useScrollLock();

  useEffect(() => {
    const lockerId = lock();

    return () => {
      release(lockerId);
    };
  }, [lock, release]);

  console.log(isScrollLocked); // Check if the scroll is locked

  return <div>{/* Your component content */}</div>;
}
```

## API

The `useScrollLock` hook provides the following API:

### 1. `lock`: (id?: string) => string

- This function locks the scroll and returns a locker ID, which can be used to release this lock.
- It creates a unique ID if you don't pass an ID, but you can use your own ID if desired.

### 2. `release`: (id?: string) => void

- This function releases the scroll lock associated with the given locker ID.
- If you do not pass a locker ID, it releases all scroll locks created by this hook.

### 3. `isScrollLocked`: boolean

- This boolean value indicates whether the scroll is currently locked or not.
