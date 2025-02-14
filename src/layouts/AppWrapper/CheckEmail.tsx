import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import EmailIcon from "../../assets/logo-icons/doc-search-icon.svg"; // Replace with your actual email icon import

const CheckEmail: React.FC = () => {
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
      <Typography
        variant="h5"
        fontWeight="bold"
        color="white"
        mb={2}
        textAlign="center"
      >
        PLEASE CHECK YOUR EMAIL
      </Typography>

      <Box
        display="flex"
        justifyContent="center"
        sx={{
          backgroundColor: "#162744",
          padding: 6,
          borderRadius: 3,
          boxShadow: 3,
          textAlign: "center",
          color: "white",
          maxWidth: "550px",
          widht: "100%",
        }}
      >
        {/* Email Icon */}
        <Box mb={2}>
          <Avatar
            src={EmailIcon}
            alt="EmailIcon"
            sx={{ height: 80, width: 60, color: "#FFD700" }}
          />{" "}
          {/* Yellow Email Icon */}
        </Box>
        <Box>
          {/* Email Message */}
          <Typography variant="body1" mb={1}>
            A message has been sent to you containing a link for resetting your
            password.
          </Typography>
          <Typography variant="body2" mb={1}>
            Please note that you will not be able to request a new password in
            the next two hours.
          </Typography>
          <Typography variant="body2">
            If you have not received the message, please check your spam folder
            or try again.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckEmail;
