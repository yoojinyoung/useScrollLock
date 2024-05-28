import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type ScrollLockContext = {
  lock: (id?: string) => void;
  release: (id: string) => void;
  isScrollLocked: boolean;
};

const initialContextValue: ScrollLockContext = {
  lock: () => {},
  release: () => {},
  isScrollLocked: false,
};

export const ScrollLockContext = createContext(initialContextValue);

export function ScrollLockProvider({ children }: PropsWithChildren<{}>) {
  const [scrollLockerIds, setScrollLockerIds] = useState<string[]>([]);

  const lock = () => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${scrollY}px`;
  };

  const release = () => {
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo({
      behavior: "instant",
      left: 0,
      top: parseInt(scrollY || "0") * -1,
    });
  };

  const isScrollLocked = useMemo(
    () => scrollLockerIds.length > 0,
    [scrollLockerIds]
  );

  useEffect(() => {
    if (isScrollLocked) {
      lock();
    } else {
      release();
    }
  }, [isScrollLocked]);

  const value = useMemo(
    () => ({
      lock: (id?: string) => {
        id = id || crypto.randomUUID();
        setScrollLockerIds((prev) => [...prev, id as string]);

        return id;
      },
      release: (id: string) => {
        setScrollLockerIds((prev) =>
          prev.filter((scrollLocker) => scrollLocker !== id)
        );
      },
      isScrollLocked,
    }),
    [isScrollLocked]
  );

  return (
    <ScrollLockContext.Provider value={value}>
      {children}
    </ScrollLockContext.Provider>
  );
}
