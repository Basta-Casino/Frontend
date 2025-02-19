import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface RegistrationFormModalProps {
  open: boolean;
  onClose: () => void;
}

const RegistrationFormModal: React.FC<RegistrationFormModalProps> = ({
  open,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    currency: "USD",
    agreedToTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, agreedToTerms: e.target.checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="registration-form-modal"
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
        {/* Close Button */}
        <CloseIcon
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            cursor: "pointer",
            color: "white",
          }}
        />

        {/* Title */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          REGISTRATION
        </Typography>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          {/* Phone Number or Email */}
          <Typography
            variant="body1"
            align="left"
            sx={{ color: "white", fontSize: "14px" }}
          >
            PHONE OR EMAIL
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Phone Number or Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{
              mt: 1,
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 5,
                backgroundColor: "#081828",
                color: "white",
                border: "1px solid #3A506B",
              },
              "& .MuiInputBase-input": {
                color: "white",
              },
            }}
          />

          {/* Password */}
          <Typography
            variant="body1"
            align="left"
            sx={{ color: "white", fontSize: "14px" }}
          >
            PASSWORD
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            sx={{
              mt: 1,
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 5,
                backgroundColor: "#081828",
                color: "white",
                border: "1px solid #3A506B",
              },
              "& .MuiInputBase-input": {
                color: "white",
              },
            }}
          />

          {/* Currency Dropdown */}
          <Typography
            variant="body1"
            align="left"
            sx={{ color: "white", fontSize: "14px" }}
          >
            CURRENCY
          </Typography>
          <FormControl fullWidth sx={{ mt: 1, mb: 2 }}>
            <Select
              value={formData.currency}
              name="currency"
              onChange={handleChange}
              displayEmpty
              sx={{
                borderRadius: 5,
                backgroundColor: "#081828",
                color: "white",
                border: "1px solid #3A506B",
                "& .MuiSelect-icon": { color: "white" },
              }}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="INR">INR</MenuItem>
            </Select>
          </FormControl>

          {/* Terms & Conditions Checkbox */}
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.agreedToTerms}
                onChange={handleCheckboxChange}
                sx={{
                  color: "white",
                  "&.Mui-checked": { color: "#FFF" },
                }}
              />
            }
            label={
              <Typography sx={{ fontSize: "12px", color: "white" }}>
                I AGREE TO THE{" "}
                <span style={{ color: "#FF3366", cursor: "pointer" }}>
                  TERMS AND CONDITIONS
                </span>
              </Typography>
            }
          />

          {/* Register Button */}
          <Button fullWidth variant="contained" color="error">
            REGISTRATION
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default RegistrationFormModal;
