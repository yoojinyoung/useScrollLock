"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollLockProvider = exports.ScrollLockContext = void 0;
const react_1 = require("react");
const initialContextValue = {
    lock: () => { },
    release: () => { },
    isScrollLocked: false,
};
exports.ScrollLockContext = (0, react_1.createContext)(initialContextValue);
function ScrollLockProvider({ children }) {
    const [scrollLockerIds, setScrollLockerIds] = (0, react_1.useState)([]);
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
    const isScrollLocked = (0, react_1.useMemo)(() => scrollLockerIds.length > 0, [scrollLockerIds]);
    (0, react_1.useEffect)(() => {
        if (isScrollLocked) {
            lock();
        }
        else {
            release();
        }
    }, [isScrollLocked]);
    const value = (0, react_1.useMemo)(() => ({
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
    return (<exports.ScrollLockContext.Provider value={value}>
      {children}
    </exports.ScrollLockContext.Provider>);
}
exports.ScrollLockProvider = ScrollLockProvider;
//# sourceMappingURL=scrollLock.context.jsx.map