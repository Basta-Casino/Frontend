import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Gamesbg from "../../assets/games-bg.png";
import { useNavigate, useLocation } from "react-router-dom";
import { API_URL } from "../../constants/api";

const PasswordResetNew: React.FC = () => {
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const handleResetPassword = async () => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      if (!token) {
        throw new Error("Reset token is missing");
      }

      const response = await fetch(`${API_URL}/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to reset password");
      }

      setSuccess("Password reset successful! Redirecting to login...");

      setTimeout(() => {
        navigate("/login");
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
              sx={{ whiteSpace: "nowrap" }}
            >
              NEW PASSWORD
            </Typography>
            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              InputProps={{
                style: { color: "white" },
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
          </Box>

          <Button
            variant="contained"
            onClick={handleResetPassword}
            disabled={loading || !password}
            color="error"
            title="Reset Password"
          >
            {loading ? "PROCESSING..." : "RESET PASSWORD"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PasswordResetNew;
