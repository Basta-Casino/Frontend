import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import LockIcon from "../../assets/red-lock-icon.png"; // Replace with your custom lock icon
import Gamesbg from "../../assets/games-bg.png";

const PasswordResetScreen: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
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
          backgroundColor: "#102A4E",
          padding: 4,
          borderRadius: 3,
          border: "2px solid #FF3366",
          boxShadow: 24,
          width: "100%",
          maxWidth: "550px",
          minWidth: { xs: "unset", md: "500px" },
          color: "white",
        }}
      >
        {/* Lock Icon */}
        <Box display="flex" justifyContent="center" mb={2}>
          <Avatar
            src={LockIcon}
            alt="LockIcon"
            sx={{ height: 130, width: 110 }}
          />{" "}
          {/* Replace with your actual icon */}
        </Box>

        {/* Heading */}
        <Typography variant="h5" fontWeight="bold" mb={1}>
          PASSWORD RESET
        </Typography>

        {/* Message */}
        <Typography variant="body2" mb={3}>
          We regret that you were not able to log in to your account. We will
          help you recover your account password.
        </Typography>

        {/* Reset Button */}
        <Button
          variant="contained"
          title="Reset"
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
          RESET
        </Button>
      </Box>
    </Box>
  );
};

export default PasswordResetScreen;
