import React from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  navigation?: string | number;
  buttonText?: string;
}

const VerifyEmail: React.FC<Props> = ({ navigation, buttonText }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (typeof navigation === "string") {
      navigate(navigation, { replace: true });
    } else if (typeof navigation === "number") {
      navigate(navigation);
    } else {
      navigate("/home", { replace: true });
    }
    window.location.reload();
  };

  const handleVerify = () => {
    // Simulate email verification success
    alert("Email verified successfully!");
    navigate("/dashboard"); // Navigate to a dashboard or home page after verification
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFFFF1A",
          maxWidth: "500px",
          borderRadius: "20px",
          padding: "30px 39px",
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <CircularProgress
          sx={{ marginBottom: "20px" }}
          size={60}
          color="primary"
        />

        <Typography variant="h2" color="white">
          Verify Email
        </Typography>

        <Typography variant="h6" color="white">
          Please verify your email address
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
            fontWeight: 400,
            color: "#555",
            marginTop: "10px",
          }}
        >
          We have sent a verification link to your email. Click the button below
          if you've already verified your email.
        </Typography>

        <Button
          variant="contained"
          color="success"
          sx={{
            width: "150px",
            marginTop: "20px",
          }}
          onClick={handleVerify}
        >
          Verify
        </Button>

        <Button
          variant="contained"
          color="error"
          sx={{
            width: "150px",
            marginTop: "15px",
          }}
          onClick={handleNavigation}
        >
          {buttonText ? buttonText : "Go to Home"}
        </Button>
      </Box>
    </Box>
  );
};

export default VerifyEmail;
