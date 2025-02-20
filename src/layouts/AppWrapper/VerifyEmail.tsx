import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Button } from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import { API_URL } from "../../constants/api";
import Gamesbg from "../../assets/games-bg.png";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

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
  const [verificationState, setVerificationState] = useState<VerificationState>(
    {
      isLoading: true,
      isVerified: false,
      error: null,
    }
  );

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
          error:
            error.response?.data?.error ||
            "Verification failed. Please try again.",
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
            <CircularProgress
              sx={{ marginBottom: "20px", color: "#FF3366" }}
              size={60}
            />
            <Typography variant="h6" color="white">
              Verifying your email...
            </Typography>
          </>
        ) : verificationState.isVerified ? (
          <>
            <Typography variant="h4" color="white" sx={{ mb: 2 }}>
              Email Verified!
            </Typography>
            <Typography
              variant="body1"
              color="success"
              sx={{
                mb: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              {" "}
              Your email has been successfully verified. You can now login to
              your account.
            </Typography>
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
            <Box
              sx={{
                borderRadius: 2,
                padding: 3,
                textAlign: "center",
                color: "white",
                width: "100%",
              }}
            >
              <Typography variant="h4" color="error" sx={{ mb: 2 }}>
                Verification Failed
              </Typography>
              {verificationState.error && (
                <Typography
                  variant="body1"
                  color="white"
                  sx={{
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  {verificationState.error.includes("token") && (
                    <ErrorOutlineIcon />
                  )}
                  {verificationState.error}
                </Typography>
              )}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default VerifyEmail;
