import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
  Backdrop,
  Avatar,
  Alert,
  Snackbar,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import facebookIcon from "../../../../../assets/logo-icons/facebook-icon.svg";
import googleIcon from "../../../../../assets/logo-icons/google-icon.svg";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../../../constants/api";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: "", isError: false });
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleLogin = async () => {
    try {
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrPhone);
      const isPhone = /^\+?[1-9]\d{1,14}$/.test(emailOrPhone);

      if (!isEmail && !isPhone) {
        throw new Error("Please enter a valid email or phone number.");
      }

      const requestBody = {
        [isEmail ? "email" : "phone_number"]: emailOrPhone,
        password,
      };

      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);

        localStorage.setItem("user", JSON.stringify(data.user));

        setNotification({
          show: true,
          message: "Login successful!",
          isError: false,
        });

        setTimeout(() => {
          onClose();
          navigate("/home");
        }, 1500);
      } else {
        throw new Error(data.error || "Login failed. Please try again.");
      }
    } catch (error: any) {
      setNotification({
        show: true,
        message: error.message || "Login failed. Please try again.",
        isError: true,
      });
    }
  };

  const handleGoogleLogin = () => {
    sessionStorage.setItem("redirectUrl", window.location.href);
    window.location.href = `${API_URL}/google`;
  };

  const handleFacebookLogin = () => {
    sessionStorage.setItem("redirectUrl", window.location.href);
    window.location.href = `${API_URL}/facebook`;
  };

  useEffect(() => {
    const handleOAuthCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");
      const error = urlParams.get("error");

      if (error) {
        setNotification({
          show: true,
          message: decodeURIComponent(error),
          isError: true,
        });
        return;
      }

      if (token) {
        try {
          localStorage.setItem("token", token);

          setNotification({
            show: true,
            message: "Login successful!",
            isError: false,
          });

          onClose();

          const redirectUrl = sessionStorage.getItem("redirectUrl");
          if (redirectUrl) {
            sessionStorage.removeItem("redirectUrl");
            window.location.href = redirectUrl;
          }
        } catch (error) {
          setNotification({
            show: true,
            message: "An error occurred during login",
            isError: true,
          });
        }
      }
    };

    handleOAuthCallback();
  }, [onClose]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: { bgcolor: "rgba(0, 0, 0, 0.7)" },
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: 400,
          bgcolor: "#102A4E",
          border: "2px solid #FF3366",
          borderRadius: 3,
          boxShadow: 24,
          p: 3,
          textAlign: "center",
          color: "white",
        }}
      >
        <Snackbar
          open={notification.show}
          autoHideDuration={6000}
          onClose={() => setNotification((prev) => ({ ...prev, show: false }))}
        >
          <Alert
            severity={notification.isError ? "error" : "success"}
            onClose={() => setNotification((prev) => ({ ...prev, show: false }))}
          >
            {notification.message}
          </Alert>
        </Snackbar>

        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 10, right: 10, color: "white" }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="body1" align="left" marginBottom={1}>
          PHONE NUMBER OR EMAIL
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="PHONE NUMBER OR EMAIL"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          sx={{ marginBottom: "12px" }}
        />
        <Typography variant="body1" align="left" marginBottom={1}>
          PASSWORD
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  sx={{ color: "white" }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <FormControlLabel
            control={<Checkbox sx={{ color: "white" }} />}
            label={<Typography sx={{ color: "white" }}>Remember Me</Typography>}
          />
          <Typography
            color="yellow"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              onClose();
              navigate("/reset-password");
            }}
          >
            Forgot Password?
          </Typography>
        </Box>
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            mb: 2,
            background: "linear-gradient(to right, #d32f2f, #ff0000)",
            color: "white",
            fontWeight: "bold",
            borderRadius: 6,
          }}
          onClick={handleLogin}
        >
          LOG IN
        </Button>
        <Box display="flex" justifyContent="center" gap={2} mt={2}>
          <IconButton onClick={handleFacebookLogin}>
            <Avatar
              src={facebookIcon}
              alt="Facebook"
              sx={{ width: 24, height: 24 }}
            />
          </IconButton>
          <IconButton onClick={handleGoogleLogin}>
            <Avatar
              src={googleIcon}
              alt="Google"
              sx={{ width: 24, height: 24 }}
            />
          </IconButton>
        </Box>
        <Typography mt={2} color="gray">
          DON'T HAVE AN ACCOUNT?{" "}
          <span
            style={{ color: "yellow", cursor: "pointer" }}
            onClick={() => {
              onClose();
              navigate("/register");
            }}
          >
            REGISTER
          </span>
        </Typography>
      </Box>
    </Modal>
  );
};

export default LoginModal;