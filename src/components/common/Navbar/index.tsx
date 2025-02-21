import { useState } from "react";
import {
  Box,
  Button,
  Stack,
  Menu,
  MenuItem,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo-icons/logo.png";
import profileImg from "../../../assets/dummy-profile.png";
import BastaImg from "../../../assets/logo-icons/basta-coin.png";

const Navbar = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [anchorElTopUp, setAnchorElTopUp] = useState<HTMLElement | null>(null);
  const [anchorElProfile, setAnchorElProfile] = useState<HTMLElement | null>(
    null
  );
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTopUpClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElTopUp(event.currentTarget);
  };

  const handleProfileClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorElTopUp(null);
    setAnchorElProfile(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

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
        <Link to="/home">
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{ height: 40, cursor: "pointer" }}
          />
        </Link>

        {/* Desktop Menu */}
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: { xs: "none", md: "flex" } }}
          alignItems="center"
        >
          {user ? (
            <Box
              display="flex"
              alignItems="center"
              sx={{
                gap: { xs: 2, md: 30 },
              }}
            >
              {/* Top Up Section */}
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  backgroundColor: "#FEFEFE12",
                  p: 1,
                  borderRadius: "30px",
                }}
              >
                <Box
                  component="img"
                  src={BastaImg}
                  alt="coin"
                  width={20}
                  height={20}
                />
                <Typography
                  variant="body2"
                  mx={1}
                  color="white"
                  sx={{ textAlign: "center" }}
                >
                  1000022.00
                </Typography>
                <IconButton
                  onClick={handleTopUpClick}
                  size="small"
                  sx={{
                    color: "white",
                    backgroundColor: "#0000002B",
                    borderRadius: "30px",
                    padding: "5px 10px",
                    fontSize: "7px",
                    marginRight: "5px",
                  }}
                >
                  BKC <ExpandMoreIcon sx={{ fontSize: "10px" }} />
                </IconButton>

                <Menu
                  anchorEl={anchorElTopUp}
                  open={Boolean(anchorElTopUp)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>BKC</MenuItem>
                  <MenuItem onClick={handleClose}>ETH</MenuItem>
                  <MenuItem onClick={handleClose}>BTC</MenuItem>
                </Menu>

                <Button variant="contained" color="error" title="top up">
                  Top Up
                </Button>
              </Box>

              {/* User Profile */}
              <Box
                display="flex"
                alignItems="center"
                sx={{ cursor: "pointer" }}
                onClick={handleProfileClick}
              >
                <Avatar src={profileImg} />
                <Typography mx={1} color="white">
                  PLAYER86718
                </Typography>
                <ExpandMoreIcon sx={{ color: "white" }} />
              </Box>

              <Menu
                anchorEl={anchorElProfile}
                open={Boolean(anchorElProfile)}
                onClose={handleClose}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Box>
          ) : (
            <>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/login")}
                title="Log in"
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => navigate("/register")}
                title="Register"
              >
                Register
              </Button>
            </>
          )}

          {/* Help Button */}
          <Button
            variant="outlined"
            color="inherit"
            title="Help"
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
          >
            <HelpOutlineIcon sx={{ fontSize: 18, color: "yellow" }} />
            Help
          </Button>
        </Stack>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Button onClick={handleClick} color="inherit">
            <MenuIcon sx={{ fontSize: 28 }} />
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
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
