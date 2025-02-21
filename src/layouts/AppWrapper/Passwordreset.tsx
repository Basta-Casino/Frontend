import React, { useState } from "react";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";
import Gamesbg from "../../assets/games-bg.png";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../constants/api";

const PasswordReset: React.FC = () => {
  const navigate = useNavigate();
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      // Determine if input is email or phone
      const isEmail = contact.includes("@");
      const payload = isEmail ? { email: contact } : { phone_number: contact };

      const response = await fetch(`${API_URL}/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to reset password");
      }

      setSuccess(data.message);
      setTimeout(() => {
        navigate("/reset-new-password");
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

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

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}

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
          <Box gap={1} mb={2}>
            <Typography
              variant="body1"
              color="white"
              mb={1}
              sx={{ whiteSpace: "nowrap" }}
            >
              PHONE OR EMAIL
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter your email or phone number"
              sx={{
                flexGrow: 1,
                "& .MuiOutlinedInput-root": {
                  color: "white",
                },
              }}
            />
          </Box>

          <Button
            variant="contained"
            color="error"
            onClick={handleReset}
            disabled={loading || !contact}
            sx={{ width: "100%" }}
            title="Click to reset"
          >
            {loading ? "PROCESSING..." : "RESET PASSWORD"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PasswordReset;
