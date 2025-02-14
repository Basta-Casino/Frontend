import { Box, Stack, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/app/sidebar/Sidebar";
import Navbar from "../../components/common/Navbar";
import Footer from "./Footer";
// import BottomBar from "./BottomBar";

const AppWrapper = () => {
  const isMobile = useMediaQuery("(max-width: 768px)"); // Adjust breakpoint as needed

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      {/* Navbar */}
      <Box
        sx={{
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1201,
          backgroundColor: "white",
          boxShadow: 1,
        }}
      >
        <Navbar />
      </Box>

      {/* Sidebar + Main Content */}
      <Stack direction="row" sx={{ flex: 1, marginTop: "64px", width: "100%" }}>
        {!isMobile && (
          <Box>
            <Sidebar />
          </Box>
        )}

        {/* Main Content Area */}
        <Box
          className="custom-scrollbar"
          sx={{
            flexGrow: 1,
            padding: 0,
            width: "100%",
          }}
        >
          <Outlet />
        </Box>
      </Stack>

      {/* Bottom Bar for Mobile */}
      {/* {isMobile && <BottomBar />} */}

      <Footer />
    </Box>
  );
};

export default AppWrapper;
