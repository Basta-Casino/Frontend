import React, { JSX, useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Tooltip,
  Divider,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaHome,
  FaUser,
  FaFile,
  FaCalendar,
  FaBell,
  FaCog,
  FaAngleLeft,
} from "react-icons/fa";
import ExtraMenu from "./ExtraMenu";
import { useModal } from "../../../services/ModalControl/index";
import BonusImg from "../../../assets/bonus-frame.png";
import WheelImg from "../../../assets/bonus-wheel.png";

interface MenuItem {
  id: string;
  text: string;
  icon: JSX.Element;
}

const menuItems: MenuItem[] = [
  { id: "home", text: "HOME", icon: <FaHome /> },
  { id: "slots", text: "SLOTS", icon: <FaUser /> },
  { id: "liveGames", text: "LIVE GAMES", icon: <FaFile /> },
  { id: "tables", text: "TABLES", icon: <FaCalendar /> },
  { id: "events", text: "EVENTS", icon: <FaBell /> },
  { id: "settings", text: "SETTINGS", icon: <FaCog /> },
];

const Sidebar: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleItemClick = (id: string, text: string) => {
    setActiveItem(id);
  };
  const { setOpenWheelModal } = useModal(); // Access modal context

  return (
    <Drawer
      variant="persistent"
      open={!isMinimized}
      sx={{
        position: "relative", // Ensure it follows normal flow
        width: isMinimized ? 65 : 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          position: "relative", // Remove fixed positioning from the paper
          width: isMinimized ? 65 : 240,
          backgroundColor: "#051837",
          color: "#fff",
          transition: "width 0.3s ease",
          borderRight: "none",
        },
      }}
    >
      {/* Sidebar Header */}
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px",
          paddingTop: 10,
        }}
      >
        <IconButton onClick={toggleMinimize} sx={{ color: "#fff" }}>
          <FaAngleLeft />
        </IconButton>
      </Box> */}

      {/* Bonus & Wheel Section */}
      <Box
        sx={{
          textAlign: "center",
          margin: 2,
          display: "flex",
          gap: 2,
        }}
      >
        {/* BONUS Button */}
        <ListItemButton
          sx={{
            borderRadius: "10px",
            width: 80, // Adjust width
            height: 80, // Adjust height
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
          }}
        >
          <Box
            component="img"
            src={BonusImg}
            alt="Bonus Icon"
            sx={{ width: "100%", height: "100%", borderRadius: "20px" }}
          />
        </ListItemButton>

        {/* WHEEL Button */}
        <ListItemButton
          sx={{
            borderRadius: "10px",
            width: 80,
            height: 80,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
          }}
          onClick={() => setOpenWheelModal(true)}
        >
          <Box
            component="img"
            src={WheelImg}
            alt="Wheel Icon"
            sx={{ width: "100%", height: "100%", borderRadius: "20px" }}
          />
        </ListItemButton>
      </Box>

      {/* Navigation Menu */}
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <Tooltip
              title={isMinimized ? item.text : ""}
              placement="right"
              arrow
            >
              <ListItemButton
                onClick={() => handleItemClick(item.id, item.text)}
                sx={{
                  margin: "8px",
                  borderRadius: "20px",
                  background:
                    activeItem === item.id
                      ? "linear-gradient(90deg, #D62828, #A00000)"
                      : "linear-gradient(0deg, rgba(0, 133, 246, 0.1) 0%, rgba(95, 178, 250, 0.1) 100%)",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.2)",
                  },
                }}
              >
                <ListItemIcon
                  sx={{ color: "#fff", minWidth: "35px", paddingLeft: "10px" }}
                >
                  {item.icon}
                </ListItemIcon>
                {!isMinimized && (
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 600,
                        }}
                        variant="body2"
                      >
                        {item.text}
                      </Typography>
                    }
                    sx={{
                      color: "#fff",
                      fontWeight: activeItem === item.id ? "bold" : "normal",
                    }}
                  />
                )}
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider
        sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)", margin: "10px 0" }}
      />

      <ExtraMenu isMinimized={isMinimized} />
    </Drawer>
  );
};

export default Sidebar;
