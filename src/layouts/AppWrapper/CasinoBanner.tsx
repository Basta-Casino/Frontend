import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Container, Stack } from "@mui/material";
import casinoImg from "../../assets/casino.png";
import casinoBg from "../../assets/casino-bg-full.jpg";

const CasinoBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 15,
    minutes: 45,
    seconds: 75,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;
        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${casinoBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        padding: "30px",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        minHeight: "250px",
        overflow: "hidden",
        marginTop: "30px",
      }}
    >
      <Box>
        <Box
          sx={{
            backgroundColor: "rgba(251, 0, 46, 0.14)", // Apply 14% opacity background
            border: "1px solid #871628",
            padding: "10px",
            borderRadius: "30px",
            display: "inline-block",
            marginBottom: "30px",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
            }}
          >
            DON'T MISS THE MAIN EVENT
          </Typography>
        </Box>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "white" }}
        >
          YOUR ULTIMATE CASINO ADVENTURE AWAITS
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Apply 14% opacity background
            padding: "10px",
            borderRadius: "50px",
            width: "fit-content",
          }}
        >
          <Button
            variant="contained"
            color="error"
            title="Play"
            // startIcon={<CasinoIcon />}
          >
            PLAY
          </Button>
          <Typography variant="body1" sx={{ color: "white" }}>
            DON'T MISS
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "white",
                backgroundColor: "rgba(251, 0, 46, 0.14)", // Apply 14% opacity background
                border: "1px solid #871628",
                padding: "10px",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {timeLeft.hours}
            </Typography>
            <Typography sx={{ color: "white" }}>:</Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "white",
                backgroundColor: "rgba(251, 0, 46, 0.14)", // Apply 14% opacity background
                border: "1px solid #871628",
                padding: "10px",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {timeLeft.minutes}
            </Typography>
            <Typography sx={{ color: "white" }}>:</Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "white",
                backgroundColor: "rgba(251, 0, 46, 0.14)", // Apply 14% opacity background
                border: "1px solid #871628",
                padding: "10px",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {timeLeft.seconds}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          transform: "scale(1.4)",
          transition: "0.3s ease-in-out",
        }}
      >
        <img src={casinoImg} alt="Casino Slot Machine" width={400} />
      </Box>
    </Box>
  );
};

export default CasinoBanner;
