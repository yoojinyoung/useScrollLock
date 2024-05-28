import React, { PropsWithChildren } from "react";
type ScrollLockContext = {
    lock: (id?: string) => void;
    release: (id: string) => void;
    isScrollLocked: boolean;
};
export declare const ScrollLockContext: React.Context<ScrollLockContext>;
export declare function ScrollLockProvider({ children }: PropsWithChildren<{}>): React.JSX.Element;
export {};
//# sourceMappingURL=scrollLock.context.d.ts.map