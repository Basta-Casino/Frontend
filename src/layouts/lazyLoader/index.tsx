import { Suspense, lazy, ComponentType } from "react";
import { Box, CircularProgress } from "@mui/material";

// MUI-based Loader Component
const Loader = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <CircularProgress size={60} sx={{ color: "white" }} />
  </Box>
);

// Wrapper function to load pages lazily with Suspense
const lazyLoad = <T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>
) => {
  const Component = lazy(importFunc);
  return (props: React.ComponentProps<T>) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default lazyLoad;
