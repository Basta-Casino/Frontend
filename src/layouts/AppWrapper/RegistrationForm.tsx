import React, { useState } from "react";
import { API_URL } from "../../constants/api.ts";
import { Currency } from "../../constants/currencies.ts";
import ThankYouModal from "../../components/common/modals/auth/login/ThankyouModal";
import { SelectChangeEvent } from "@mui/material";
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
  Alert,
  Snackbar,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Gamesbg from "../../assets/games-bg.png";

interface FormData {
  email?: string;
  phone_number?: string;
  password: string;
  currency: Currency;
  agreedToTerms: boolean;
}

interface FormErrors {
  contact?: string;
  password?: string;
}

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    password: "",
    currency: Currency.USD,
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    isError: false,
  });
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const handleCurrencyChange = (event: SelectChangeEvent<Currency>) => {
    setFormData((prev) => ({
      ...prev,
      currency: event.target.value as Currency,
    }));
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name!]: value,
    }));
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const updatedForm: FormData = {
      ...formData,
      email: undefined,
      phone_number: undefined,
    };

    const isEmail = value.includes("@");
    if (isEmail) {
      updatedForm.email = value;
    } else {
      updatedForm.phone_number = value;
    }

    setFormData(updatedForm);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      agreedToTerms: e.target.checked,
    }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.email && !formData.phone_number) {
      newErrors.contact = "Email or phone number is required";
      isValid = false;
    } else if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.contact = "Enter a valid email address";
      isValid = false;
    } else if (
      formData.phone_number &&
      !/^\+?[1-9]\d{1,14}$/.test(formData.phone_number)
    ) {
      newErrors.contact = "Enter a valid phone number";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must contain uppercase, lowercase, number, and special character";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreedToTerms) {
      setNotification({
        show: true,
        message: "Please agree to the terms and conditions",
        isError: true,
      });
      return;
    }

    if (validate()) {
      try {
        const response = await fetch(`${API_URL}/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setShowThankYouModal(true);
          localStorage.setItem("token", data.data.token);
        } else {
          setNotification({
            show: true,
            message: data.error || "Registration failed",
            isError: true,
          });
        }
      } catch (error) {
        setNotification({
          show: true,
          message: "An error occurred during registration",
          isError: true,
        });
      }
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
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

      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          mx: "auto",
          mt: 5,
          p: 3,
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          {["10% CASHBACK", "100% OF THE DEPOSIT", "100% FREE SPINS"].map(
            (text, index) => {
              const match = text.match(/(\d+)(%?)(.*)/);
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
                    marginBottom: "16px",
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
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="PHONE NUMBER OR EMAIL"
              name="contact"
              onChange={handleContactChange}
              error={!!errors.contact}
              helperText={errors.contact}
              sx={{
                mb: 2,
              }}
            />

            <TextField
              fullWidth
              variant="outlined"
              type={showPassword ? "text" : "password"}
              placeholder="PASSWORD"
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

            <FormControl fullWidth sx={{ mb: 2 }}>
              <Select
                value={formData.currency}
                name="currency"
                onChange={handleCurrencyChange}
                sx={{
                  borderRadius: 6,
                  backgroundColor: "#051737",
                  color: "white",
                  "& .MuiSelect-icon": {
                    color: "white", // Set the dropdown arrow color to white
                  },
                }}
              >
                <MenuItem value={Currency.USD}>USD</MenuItem>
                <MenuItem value={Currency.EUR}>EUR</MenuItem>
                <MenuItem value={Currency.INR}>INR</MenuItem>
              </Select>
            </FormControl>

            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.agreedToTerms}
                  onChange={handleCheckboxChange}
                  sx={{ color: "white", "&.Mui-checked": { color: "#FF3366" } }}
                />
              }
              label={
                <Typography variant="body2">
                  I AGREE TO THE{" "}
                  <Typography
                    color="yellow"
                    sx={{ cursor: "pointer", display: "inline-block" }}
                  >
                    TERMS AND CONDITIONS
                  </Typography>
                </Typography>
              }
            />

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
      <ThankYouModal
        open={showThankYouModal}
        onClose={() => setShowThankYouModal(false)}
      />
    </Box>
  );
};

export default RegistrationPage;
