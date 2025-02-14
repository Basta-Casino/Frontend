import { useState } from "react";
import {
  Box,
  Stack,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { FaGlobe } from "react-icons/fa";

interface ExtraMenuProps {
  isMinimized: boolean;
}

const ExtraMenu: React.FC<ExtraMenuProps> = ({ isMinimized }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const menuItems = [
    { id: 1, label: "Help" },
    { id: 2, label: "FAQ" },
    { id: 3, label: "Support" },
    { id: 4, label: "Blog" },
    { id: 5, label: "Rank System" },
  ];

  return (
    <Box sx={{ padding: "10px" }}>
      <Stack spacing={1} alignItems="center">
        {/* First Row */}
        <Stack direction="row" spacing={1}>
          {menuItems.slice(0, 2).map((item) => (
            <ListItemButton
              key={item.id}
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
              onClick={() => setActiveItem(item.id)}
            >
              <ListItemText
                primary={<Typography variant="body3">{item.label}</Typography>}
              />
            </ListItemButton>
          ))}
        </Stack>

        {/* Second Row */}
        <ListItemButton
          sx={{
            margin: "8px",
            borderRadius: "20px",
            background:
              activeItem === 3
                ? "linear-gradient(90deg, #D62828, #A00000)"
                : "linear-gradient(0deg, rgba(0, 133, 246, 0.1) 0%, rgba(95, 178, 250, 0.1) 100%)",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.2)",
            },
          }}
          onClick={() => setActiveItem(3)}
        >
          <ListItemText
            primary={<Typography variant="body3">Support</Typography>}
          />
        </ListItemButton>

        {/* Third Row */}
        <Stack direction="row" spacing={1}>
          {menuItems.slice(3, 5).map((item) => (
            <ListItemButton
              key={item.id}
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
              onClick={() => setActiveItem(item.id)}
            >
              <ListItemText
                primary={<Typography variant="body3">{item.label}</Typography>}
              />
            </ListItemButton>
          ))}
        </Stack>
      </Stack>

      {/* Language Selection */}
      <Box sx={{ textAlign: "center", padding: "10px" }}>
        <ListItemButton
          sx={{
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "10px",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FaGlobe size={20} />
          {!isMinimized && (
            <Typography variant="body3" sx={{ marginLeft: 1 }}>
              English
            </Typography>
          )}
        </ListItemButton>
      </Box>
    </Box>
  );
};

export default ExtraMenu;
