import React, { createContext, useEffect, useMemo, useState, } from "react";
const initialContextValue = {
    lock: () => { },
    release: () => { },
    isScrollLocked: false,
};
export const ScrollLockContext = createContext(initialContextValue);
export function ScrollLockProvider({ children }) {
    const [scrollLockerIds, setScrollLockerIds] = useState([]);
    const lock = () => {
        console.log("lock");
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
    const isScrollLocked = useMemo(() => scrollLockerIds.length > 0, [scrollLockerIds]);
    useEffect(() => {
        if (isScrollLocked) {
            lock();
        }
        else {
            release();
        }
    }, [isScrollLocked]);
    const value = useMemo(() => ({
        lock: (id) => {
            id = id || crypto.randomUUID();
            setScrollLockerIds((prev) => [...prev, id]);
            return id;
        },
        release: (id) => {
            setScrollLockerIds((prev) => prev.filter((scrollLocker) => scrollLocker !== id));
        },
        isScrollLocked,
    }), [isScrollLocked]);
    return (React.createElement(ScrollLockContext.Provider, { value: value }, children));
}
//# sourceMappingURL=scrollLock.context.js.map