import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import Gamesbg from "../../assets/games-bg.png";

const PasswordReset: React.FC = () => {
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
            minWidth: { xs: "unset", md: "500px" }, // Remove minWidth on small screens
          }}
        >
          <Typography variant="body2" color="white" mb={1}>
            PHONE OR EMAIL
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="ENTER PHONE OR EMAIL"
            sx={{
              mb: 2,
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

export default PasswordReset;
