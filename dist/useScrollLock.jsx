"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const scrollLock_context_1 = require("./scrollLock.context");
function useScrollLock() {
    return (0, react_1.useContext)(scrollLock_context_1.ScrollLockContext);
}
exports.default = useScrollLock;
//# sourceMappingURL=useScrollLock.jsx.map