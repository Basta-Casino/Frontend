import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import errorpageImg from "../../assets/errorpage.png";

interface Props {
  navigation?: string | number;
  buttonText?: string;
}

const NotFound: React.FC<Props> = ({ navigation, buttonText }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (typeof navigation === "string") {
      navigate(navigation, { replace: true });
    } else if (typeof navigation === "number") {
      navigate(navigation);
    } else {
      navigate("/home", { replace: true });
    }
    window.location.reload();
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#FFFFFF1A",
          maxWidth: "500px",
          borderRadius: "20px",
          padding: "30px 39px",
          marginTop: "40px",
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "50px", sm: "9vw", md: "100px" },
            color: "#fff",
          }}
        >
          404
        </Typography>

        <Box
          component="img"
          src={errorpageImg}
          alt="Error Page"
          sx={{ width: 200, height: 150 }}
        />

        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "20px", md: "31px", color: "#fff" } }}
        >
          Something went wrong!
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "10px", md: "16px" },
            fontWeight: 400,
            color: "#fff",
          }}
        >
          Page not found
        </Typography>

        <Button
          variant="contained"
          color="error"
          sx={{
            width: "150px",
            marginTop: "16px",
          }}
          onClick={handleNavigation}
        >
          {buttonText ? buttonText : "Go to Home"}
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
