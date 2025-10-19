import React, { type JSX, Suspense } from "react";
import PageLoading from "./PageLoading";

export default function PageLoader<P extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<P>
) {
  return function WrappedComponent(props: P) {
    return (
      <Suspense fallback={<PageLoading />}>
        <Component {...(props as P)} />
      </Suspense>
    );
  };
}
