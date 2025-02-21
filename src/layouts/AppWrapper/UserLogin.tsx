import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Alert,
  Snackbar,
  Avatar,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../constants/api";
import Gamesbg from "../../assets/games-bg.png";
import facebookIcon from "../../assets/logo-icons/facebook-icon.svg";
import googleIcon from "../../assets/logo-icons/google-icon.svg";

const UserLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    isError: false,
  });
  const [emailOrPhone, setEmailOrPhone] = useState(
    localStorage.getItem("rememberedEmail") || ""
  );
  const [rememberMe, setRememberMe] = useState(
    localStorage.getItem("rememberedEmail") ? true : false
  );
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  useEffect(() => {
    if (!rememberMe) {
      localStorage.removeItem("rememberedEmail");
    }
  }, [rememberMe]);
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log("data", data);

      if (response.ok) {
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("user", JSON.stringify(data.data.user));

        if (rememberMe) {
          localStorage.setItem("rememberedEmail", emailOrPhone);
        }

        setNotification({
          show: true,
          message: "Login successful!",
          isError: false,
        });

        setTimeout(() => {
          navigate("/home");
          window.location.reload();
        }, 1000);
      } else {
        throw new Error(data.error || "Login failed. Please try again.");
      }
    } catch (error: any) {
      setNotification({ show: true, message: error.message, isError: true });
    }
  };
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked);
    if (event.target.checked) {
      localStorage.setItem("rememberedEmail", emailOrPhone);
    } else {
      localStorage.removeItem("rememberedEmail");
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
      {" "}
      <Snackbar
        open={notification.show}
        autoHideDuration={6000}
        onClose={() => setNotification((prev) => ({ ...prev, show: false }))}
      >
        <Alert severity={notification.isError ? "error" : "success"}>
          {notification.message}
        </Alert>
      </Snackbar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: 600,
          borderRadius: 3,
          boxShadow: 24,
          p: 3,
          textAlign: "center",
          color: "white",
        }}
      >
        {" "}
        <Box>
          <Typography variant="h5" fontWeight="bold" color="white" mb={2}>
            LOGIN{" "}
          </Typography>
          <Box
            sx={{
              width: "100%",
              minWidth: { xs: "unset", md: 600 },
              mx: "auto",
              p: 3,
              px: { xs: 3, md: 10 },
              bgcolor: "#102A4E",
              borderRadius: 3,
              boxShadow: 3,
              textAlign: "center",
              color: "white",
              border: "2px solid #FF3366",
            }}
          >
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
              placeholder="PASSWORD"
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
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={handleCheckboxChange}
                    sx={{
                      color: "white",
                      "&.Mui-checked": { color: "#FF3366" },
                    }}
                  />
                }
                label={
                  <Typography sx={{ color: "white" }}>Remember Me</Typography>
                }
              />
              <Typography
                color="yellow"
                sx={{ cursor: "pointer" }}
                onClick={() => {
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
              title="Log In"
            >
              LOG IN
            </Button>
            <Box display="flex" justifyContent="center" gap={2} mt={1}>
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
                  navigate("/register");
                }}
              >
                REGISTER
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserLogin;
