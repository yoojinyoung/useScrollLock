import { useContext } from "react";
import { ScrollLockContext } from "./scrollLock.context";

function useScrollLock() {
  return useContext(ScrollLockContext);
}

export default useScrollLock;
