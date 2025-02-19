import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Alert, Button } from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import { useModal } from "../../services/ModalControl";
import { API_URL } from "../../constants/api";

interface Props {
  navigation?: string | number;
  buttonText?: string;
}

interface VerificationState {
  isLoading: boolean;
  isVerified: boolean;
  error: string | null;
}

const VerifyEmail: React.FC<Props> = () => {
  const [searchParams] = useSearchParams();
  const { setOpenLogin } = useModal();
  const [verificationState, setVerificationState] = useState<VerificationState>({
    isLoading: true,
    isVerified: false,
    error: null,
  });

  const [isModalContextReady, setIsModalContextReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmailToken = async () => {
      const token = searchParams.get("token");

      if (!token) {
        setVerificationState({
          isLoading: false,
          isVerified: false,
          error: "Verification token is missing",
        });
        return;
      }

      try {
        const response = await axios.get(`${API_URL}/verify-email`, {
          params: { token },
        });
        if (response.data.success) {
          setVerificationState({
            isLoading: false,
            isVerified: true,
            error: null,
          });
        }
      } catch (error: any) {
        setVerificationState({
          isLoading: false,
          isVerified: false,
          error: error.response?.data?.error || "Verification failed. Please try again.",
        });
      } finally {
        setIsModalContextReady(true);
      }
    };

    verifyEmailToken();
  }, [searchParams]);

  const handleLoginClick = () => {
    navigate("/login"); 
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 0",
        backgroundColor: "#071426",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#102A4E",
          maxWidth: "500px",
          width: "90%",
          borderRadius: "20px",
          padding: "30px 39px",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
          textAlign: "center",
          border: "2px solid #FF3366",
        }}
      >
        {verificationState.isLoading ? (
          <>
            <CircularProgress sx={{ marginBottom: "20px", color: "#FF3366" }} size={60} />
            <Typography variant="h6" color="white">
              Verifying your email...
            </Typography>
          </>
        ) : verificationState.isVerified ? (
          <>
            <Typography variant="h4" color="white" sx={{ mb: 2 }}>
              Email Verified!
            </Typography>
            <Alert severity="success" sx={{ mb: 2, width: "100%" }}>
              Your email has been successfully verified. You can now login to your account.
            </Alert>
            {/* Conditionally render the button */}
            {isModalContextReady && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleLoginClick}
                sx={{
                  mt: 2,
                  backgroundColor: "#FF3366",
                  "&:hover": {
                    backgroundColor: "#FF1F5A",
                  },
                }}
              >
                Login Now
              </Button>
            )}
          </>
        ) : (
          <>
            <Typography variant="h4" color="white" sx={{ mb: 2 }}>
              Verification Failed
            </Typography>
            {verificationState.error && (
              <Alert severity="error" sx={{ mb: 2, width: "100%" }}>
                {verificationState.error}
              </Alert>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default VerifyEmail;