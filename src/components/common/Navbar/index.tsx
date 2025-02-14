import { useState } from "react";
import { Box, Button, Stack, Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../assets/logo-icons/logo.png";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useModal } from "../../../services/ModalControl/index";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { setOpenLogin, setOpenThankYou, setOpenRegistrationForm } = useModal();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1100,
        backgroundColor: "#051837",
        color: "white",
        boxShadow: 2,
        padding: "12px 24px",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        {/* Logo */}
        <Link to="/">
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{ height: 40, cursor: "pointer" }}
          />
        </Link>
        {/* Desktop Buttons */}
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => setOpenLogin(true)}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              borderColor: "yellow",
              color: "yellow",
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": {
                borderColor: "gold",
                backgroundColor: "rgba(255, 255, 0, 0.1)",
              },
            }}
            onClick={() => setOpenThankYou(true)}
          >
            <HelpOutlineIcon sx={{ fontSize: 18, color: "yellow" }} />
            Help
          </Button>
        </Stack>

        {/* Mobile Dropdown */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton onClick={handleClick} color="inherit">
            <MenuIcon sx={{ fontSize: 28 }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              paper: {
                sx: {
                  backgroundColor: "#0B2447",
                  color: "white",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                  minWidth: 140,
                  overflow: "hidden",
                },
              },
            }}
          >
            <MenuItem
              onClick={handleClose}
              sx={{
                padding: "10px 16px",
                fontSize: "16px",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              Login
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              sx={{
                padding: "10px 16px",
                fontSize: "16px",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              Register
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              sx={{
                padding: "10px 16px",
                fontSize: "16px",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              Help
            </MenuItem>
          </Menu>
        </Box>
      </Stack>
    </Box>
  );
};

export default Navbar;
