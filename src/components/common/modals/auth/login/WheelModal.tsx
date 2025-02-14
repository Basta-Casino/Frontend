import React, { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface WheelModalProps {
  open: boolean;
  onClose: () => void;
}

const WheelModal: React.FC<WheelModalProps> = ({ open, onClose }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * segments.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="wheel-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "#0B2B48",
          color: "white",
          boxShadow: 24,
          p: 4,
          borderRadius: "16px",
          textAlign: "center",
          border: "2px solid #FF3366",
          outline: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
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
      </Box>
    </Modal>
  );
};

export default WheelModal;
