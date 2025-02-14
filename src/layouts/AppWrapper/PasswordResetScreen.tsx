import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import LockIcon from "../../assets/red-lock-icon.png"; // Replace with your custom lock icon

const PasswordResetScreen: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#0a1128",
        padding: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#162744",
          padding: 4,
          borderRadius: 3,
          boxShadow: 3,
          width: "100%",
          maxWidth: "500px",
          textAlign: "center",
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
