import { useState, useEffect, SetStateAction } from "react";
import { Box, Button, Stack, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../assets/logo-icons/logo.png";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useModal } from "../../../services/ModalControl/index";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [user, setUser] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user data:", error);
        setUser(null);
      }
    }
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget as HTMLButtonElement | null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  const { setOpenThankYou } = useModal();

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
        <Link to="/home">
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{ height: 40, cursor: "pointer" }}
          />
        </Link>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {user ? (
            <>
              <Button onClick={handleClick} color="inherit">
                Menu
              </Button>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={() => navigate("/profile")}>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/login")}
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
            </>
          )}
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
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Button onClick={handleClick} color="inherit">
            <MenuIcon sx={{ fontSize: 28 }} />
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {user ? (
              <>
                <MenuItem onClick={() => navigate("/profile")}>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </>
            ) : (
              <>
                <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
                <MenuItem onClick={() => navigate("/register")}>
                  Register
                </MenuItem>
              </>
            )}
            <MenuItem onClick={handleClose}>Help</MenuItem>
          </Menu>
        </Box>
      </Stack>
    </Box>
  );
};

export default Navbar;
