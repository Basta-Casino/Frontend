import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  TextField,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchNavbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <AppBar
      position="sticky"
      style={{
        backgroundColor: "#D9D9D91A",
        borderRadius: "20px",
        marginTop: "16px",
      }}
    >
      <Toolbar>
        {/* Dropdown Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{ display: { xs: "none", sm: "inline-flex" } }}
          onClick={handleMenuOpen}
        >
          All providers
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
          <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
        </Menu>

        {/* First Button */}
        <Button variant="contained" color="error" style={{ marginLeft: 10 }}>
          Hit
        </Button>

        {/* Second Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 10 }}>
          New
        </Button>

        {/* Align Search Bar to the Right */}
        <Box
          display="flex"
          justifyContent="flex-end"
          marginLeft={1}
          style={{ flexGrow: 1 }}
        >
          <TextField
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            sx={{
              ".MuiOutlinedInput-root": {
                backgroundColor: "#FFFFFF1A",
              },
              ".MuiOutlinedInput-input": {
                color: "white",
              },
              ".MuiOutlinedInput-adornedStart": {
                paddingLeft: "10px",
              },
            }}
            InputProps={{
              startAdornment: (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <SearchIcon sx={{ color: "white" }} />
                </Box>
              ),
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SearchNavbar;
