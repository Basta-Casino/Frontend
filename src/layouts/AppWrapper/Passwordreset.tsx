import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const PasswordReset: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#0a1128",
      }}
    >
      <Typography
        variant="h5"
        marginTop={10}
        fontWeight="bold"
        color="white"
        mb={2}
      >
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
          PHONE OR EMAIL
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
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
  );
};

export default PasswordReset;
