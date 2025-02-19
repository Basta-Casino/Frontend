import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Gamesbg from "../../assets/games-bg.png";

const PasswordResetNew: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Gamesbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: 400,
          borderRadius: 3,
          p: 3,
          textAlign: "left",
          color: "white",
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="white" mb={2}>
          PASSWORD RESET
        </Typography>

        <Box
          sx={{
            backgroundColor: "#102A4E",
            padding: 4,
            borderRadius: 3,
            border: "2px solid #FF3366",
            boxShadow: 24,
            width: "100%",
            maxWidth: "550px",
            minWidth: { xs: "unset", md: "500px" },
          }}
        >
          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <Typography
              variant="body2"
              color="white"
              sx={{ whiteSpace: "nowrap" }}
            >
              NEW PASSWORD
            </Typography>
            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              variant="outlined"
              InputProps={{
                style: { color: "white" }, // Set input text color
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      sx={{ color: "white" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              background: "linear-gradient(45deg, #e52d27, #b31217)",
              color: "white",
              fontWeight: "bold",
              "&:hover": {
                background: "linear-gradient(45deg, #b31217, #e52d27)",
              },
            }}
          >
            RESET PASSWORD
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PasswordResetNew;
