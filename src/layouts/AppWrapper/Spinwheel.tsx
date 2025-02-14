import React, { useState } from "react";
import {
  Modal,
  Box,
  Button,
  IconButton,
  Typography,
  Backdrop,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const SpinWheelModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSpin = () => {
    if (spinning) return;
    setSpinning(true);

    const randomRotation = Math.floor(Math.random() * 360) + 720; // Spins 2+ rounds
    setRotation(rotation + randomRotation);

    setTimeout(() => {
      setSpinning(false);
    }, 2000); // Matches animation duration
  };

  return (
    <div>
      {/* Open Modal Button */}
      <Button variant="contained" color="error" onClick={handleOpen}>
        Open Spinner
      </Button>

      {/* Modal Component */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "#0A1A33",
            borderRadius: 3,
            boxShadow: 24,
            p: 3,
            textAlign: "center",
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 10, right: 10, color: "white" }}
          >
            <CloseIcon />
          </IconButton>

          {/* Title */}
          <Typography variant="h6" color="white" mb={2}>
            Spin the Wheel 🎡
          </Typography>

          {/* Wheel */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 3,
            }}
          >
            <img
              src="https://t3.ftcdn.net/jpg/05/23/83/14/360_F_523831470_nKfQJHgwruOrivBpkSysxopFQe4y9QK9.jpg"
              alt="Spin Wheel"
              width="250"
              height="250"
              style={{
                borderRadius: "50%",
                transition: "transform 2s ease-out",
                transform: `rotate(${rotation}deg)`,
                width: "200px",
                height: "200px",
              }}
            />
          </Box>

          {/* Spin Button */}
          <Button
            onClick={handleSpin}
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #d32f2f, #ff0000)",
              color: "white",
              fontWeight: "bold",
              borderRadius: 5,
            }}
            disabled={spinning}
          >
            {spinning ? "Spinning..." : "SPIN"}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default SpinWheelModal;
