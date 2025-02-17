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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#0a1128",
      }}
    >
      <Typography variant="h5" fontWeight="bold" color="white" mb={2}>
        PASSWORD RESET
      </Typography>

      <Box
        sx={{
          backgroundColor: "#162744",
          padding: 4,
          borderRadius: 3,
          boxShadow: 3,
          width: "100%",
          maxWidth: "450px",
        }}
      >
        <Typography variant="body2" color="white" mb={1}>
          NEW PASSWORD
        </Typography>
        <TextField
          fullWidth
          type={showPassword ? "text" : "password"}
          variant="outlined"
          sx={{
            mb: 2,
          }}
          slotProps={{
            input: {
              style: { color: "white" }, // Correct way to set input text color
            },
          }}
          InputProps={{
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
  );
};

export default PasswordResetNew;
