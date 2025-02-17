import React, { useState } from "react";
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
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import facebookIcon from "../../../../../assets/logo-icons/facebook-icon.svg";
import googleIcon from "../../../../../assets/logo-icons/google-icon.svg";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

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
              onClose(); // Close the modal first
              navigate("/reset-password"); // Then navigate
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
          onClick={onClose}
        >
          LOG IN
        </Button>
        <Box display="flex" justifyContent="center" gap={2} mt={2}>
          <IconButton>
            <Avatar
              src={facebookIcon}
              alt="Facebook"
              sx={{ width: 24, height: 24 }}
            />
          </IconButton>
          <IconButton>
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
              onClose(); // Close the modal first
              navigate("/register"); // Then navigate
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
