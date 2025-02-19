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

const PasswordResetNew: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
            boxShadow: 3,
            width: "100%",
            maxWidth: "550px",
            minWidth: { xs: "unset", md: "500px" },
          }}
        >
          <Typography variant="body2" color="white" mb={1}>
            NEW PASSWORD
          </Typography>
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            variant="outlined"
            sx={{ mb: 2 }}
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

          <Button
            fullWidth
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
