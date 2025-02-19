import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import Gamesbg from "../../assets/games-bg.png";
import { useNavigate } from "react-router-dom";

const PasswordReset: React.FC = () => {
  const navigate = useNavigate();

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
              PHONE OR EMAIL
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              // placeholder="ENTER PHONE OR EMAIL"
              sx={{
                flexGrow: 1,
              }}
            />
          </Box>

          <Button
            variant="contained"
            color="error"
            onClick={() => navigate("/reset-new-password")}
          >
            RESET PASSWORD
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PasswordReset;
