import { SetStateAction, useState } from "react";
import {
  Box,
  Stack,
  ListItemButton,
  ListItemText,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Link,
} from "@mui/material";
import engFlag from "../../../assets/eng-flag.png";

interface ExtraMenuProps {
  isMinimized: boolean;
}

const ExtraMenu: React.FC<ExtraMenuProps> = ({ isMinimized }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [language, setLanguage] = useState("English");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setLanguage(event.target.value);
  };

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
        <Stack direction="row" spacing={1} width="100%">
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
                flexGrow: 1,
                textAlign: "center",
              }}
              onClick={() => setActiveItem(item.id)}
            >
              <ListItemText
                primary={<Typography variant="body2">{item.label}</Typography>}
              />
            </ListItemButton>
          ))}
        </Stack>

        <ListItemButton
          sx={{
            width: "100%",
            textAlign: "center",
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
            primary={<Typography variant="body2">Support</Typography>}
          />
        </ListItemButton>

        <Stack direction="row" spacing={1} width="100%">
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
                flexGrow: 1,
                textAlign: "center",
              }}
              onClick={() => setActiveItem(item.id)}
            >
              <ListItemText
                primary={<Typography variant="body2">{item.label}</Typography>}
              />
            </ListItemButton>
          ))}
        </Stack>
      </Stack>

      <Box my={8} sx={{ textAlign: "center" }}>
        <FormControl fullWidth>
          <Select
            value={language}
            onChange={handleChange}
            displayEmpty
            sx={{
              margin: "8px",
              borderRadius: "20px",
              background:
                "linear-gradient(0deg, rgba(0, 133, 246, 0.1) 0%, rgba(95, 178, 250, 0.1) 100%)",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.2)",
              },
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexGrow: 1,
              backgroundColor: "#051737",
              "& .MuiSelect-icon": {
                color: "white", // Set the dropdown arrow color to white
              },
            }}
          >
            <MenuItem value="English">
              <Stack direction="row" alignItems="center" spacing={1}>
                <img src={engFlag} alt="English" width={20} height={15} />
                <Typography>English</Typography>
              </Stack>
            </MenuItem>
            <MenuItem value="Spanish">Spanish</MenuItem>
            <MenuItem value="French">French</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box my={2} sx={{ textAlign: "center" }}>
        <Typography variant="body3" color="textSecondary">
          <Link
            href="/home"
            sx={{
              color: "#fff",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Terms & Conditions
          </Link>{" "}
          •{" "}
          <Link
            href="/home"
            sx={{
              color: "#fff",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Privacy Policy
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default ExtraMenu;
