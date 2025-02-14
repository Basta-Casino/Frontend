import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Gamesbg from "../../assets/games-bg.png";

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    currency: "USD",
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, agreedToTerms: e.target.checked });
  };

  const validate = () => {
    let tempErrors = { email: "", password: "" };
    let isValid = true;

    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Enter a valid email address";
      isValid = false;
    }

    if (!formData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Registration Successful!");
      console.log("Form Data Submitted:", formData);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
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
          width: "100%",
          maxWidth: 500,
          mx: "auto",
          mt: 5,
          p: 3,
          position: "absolute",
          top: "40%",
          left: "46%",
          transform: "translate(-50%, -50%)",
          color: "white",
          boxShadow: 24,
          borderRadius: "16px",
          textAlign: "center",
        }}
      >
        {" "}
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          REGISTRATION
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", mb: 2, color: "white" }}
        >
          Register now to unlock exclusive features and a personalized
          experience!
        </Typography>
        {/* Bonus Boxes */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          {["10% CASHBACK", "100% OF THE DEPOSIT", "100% FREE SPINS"].map(
            (text, index) => {
              const match = text.match(/(\d+)(%?)(.*)/); // Extract number, %, and remaining text
              const number = match ? match[1] : "";
              const percentage = match ? match[2] : "";
              const label = match ? match[3] : "";

              return (
                <Box
                  key={index}
                  sx={{
                    bgcolor: "#102A4E",
                    border: "2px solid #FF3366",
                    borderRadius: "12px",
                    padding: "12px 20px",
                    textAlign: "center",
                    minWidth: "120px",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                    color: "#FFF",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{ fontWeight: "bold", color: "#FF1A44" }}
                  >
                    {number}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{
                      fontWeight: "bold",
                      color: "#FF1A44",
                      marginLeft: "2px",
                    }}
                  >
                    {percentage}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{ display: "block", marginTop: "4px", color: "#EEE" }}
                  >
                    {label}
                  </Typography>
                </Box>
              );
            }
          )}
        </Box>
        ;
        <Box
          sx={{
            width: "100%",
            maxWidth: 500,
            mx: "auto",
            p: 3,
            bgcolor: "#102A4E",
            borderRadius: 3,
            boxShadow: 3,
            textAlign: "center",
            color: "white",
            border: "2px solid #FF3366",
          }}
        >
          {/* Registration Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Phone Number or Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              sx={{
                mb: 2,
              }}
            />

            {/* Password Input */}
            <TextField
              fullWidth
              variant="outlined"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              sx={{
                mb: 2,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      sx={{ color: "white" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Currency Dropdown */}
            <FormControl fullWidth sx={{ mb: 2 }}>
              <Select
                value={formData.currency}
                name="currency"
                onChange={handleChange}
                sx={{
                  borderRadius: 6,
                  backgroundColor: "#051737",
                  color: "white",
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
                  sx={{ color: "white", "&.Mui-checked": { color: "#FF3366" } }}
                />
              }
              label={
                <Typography sx={{ fontSize: "12px" }}>
                  I AGREE TO THE TERMS AND CONDITIONS
                </Typography>
              }
            />

            {/* Register Button */}
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: "#D50000",
                color: "#fff",
                py: 1.5,
                borderRadius: 6,
              }}
            >
              REGISTER
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default RegistrationPage;
