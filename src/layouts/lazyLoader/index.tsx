import { Suspense, lazy, ComponentType } from "react";

// Wrapper function to load pages lazily with Suspense
const lazyLoad = <T extends ComponentType<any>>(importFunc: () => Promise<{ default: T }>) => {
    const Component = lazy(importFunc);
    return (props: React.ComponentProps<T>) => (
        <Suspense fallback={<div>Loading...</div>}>
            <Component {...props} />
        </Suspense>
    );
};

export default lazyLoad;
