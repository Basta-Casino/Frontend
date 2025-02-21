import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { FaBars, FaSearch } from "react-icons/fa";

interface BottomBarProps {
  toggleSidebar: () => void;
}

const BottomBar: React.FC<BottomBarProps> = ({ toggleSidebar }) => {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: "flex", sm: "flex", md: "none" },
        backgroundColor: "#051837",
        color: "#fff",
        zIndex: 1100,
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        sx={{
          backgroundColor: "transparent",
        }}
      >
        <BottomNavigationAction
          label="Menu"
          icon={<FaBars size={20} />}
          onClick={toggleSidebar}
          sx={{ color: "#fff" }}
        />
        <BottomNavigationAction
          label="Search"
          icon={<FaSearch size={20} />}
          onClick={() => console.log("Open Search")}
          sx={{ color: "#fff" }}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomBar;
