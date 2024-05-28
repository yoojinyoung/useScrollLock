import { PropsWithChildren } from "react";
type ScrollLockContext = {
    lock: (id?: string) => void;
    release: (id: string) => void;
    isScrollLocked: boolean;
};
export declare const ScrollLockContext: import("react").Context<ScrollLockContext>;
export declare function ScrollLockProvider({ children }: PropsWithChildren<{}>): import("react").JSX.Element;
export {};
//# sourceMappingURL=scrollLock.context.d.ts.map