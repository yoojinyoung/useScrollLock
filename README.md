# useScrollLock

**A super simple react hook for scroll lock 🔒**

## Installation

```shell
npm install @yoojinyoung/useScrollLock
```

## Usage

You should follow these two steps.

1. Wrap your application with `ScrollLockProvider`.
2. Use `useScrollLock` in component.

```jsx
// App.jsx
import { ScrollLockProvider } from "@yoojinyoung/usescrolllock"

function App()  {
  return (
    <ScrollLockProvider>
      <... />
    </ScrollLockProvider>
  );
}
```

```jsx
// SomeComponent.jsx
import useScrollLock from "@yoojinyoung/usescrolllock"

function SomeComponent()  {
  const { lock, release, isScrollLocked } = useScrollLock();

  useEffect(() => {
    const lockerId = lock()

    return () => {
      release(lockerId)
    }
  }, [])

  console.log(isScrollLocked)

  return (
    <.../>
  );
}
```

## API

1. `lock`: (id?: string) => void
2. `release`: (id: string) => void
3. `isScrollLocked`: boolean
