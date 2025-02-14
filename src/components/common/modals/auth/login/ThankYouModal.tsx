import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Goldicon from "../../../../../assets/logo-icons/gold-thumsup.png";
interface ThankYouModalProps {
  open: boolean;
  onClose: () => void;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="thank-you-modal">
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

        {/* Gold Icon */}
        <Box
          component="img"
          src={Goldicon}
          alt="Gold Icon"
          sx={{ width: 60, height: 60 }}
        />

        {/* Title */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          THANK YOU FOR REGISTERING
        </Typography>

        {/* Description */}
        <Typography sx={{ fontSize: "14px", textAlign: "center", px: 2 }}>
          Thank you for registering! We're excited to have you on board. Stay
          tuned for updates and enjoy exploring all the features we offer.
        </Typography>

        {/* "Good Luck" Text */}
        <Typography sx={{ fontWeight: "bold", mt: 1 }}>Good Luck</Typography>

        {/* Play Button */}
        <Button
          variant="contained"
          sx={{
            mt: 2,
            background: "linear-gradient(to right, #FF4B2B, #FF416C)",
            color: "white",
            fontWeight: "bold",
            borderRadius: "20px",
            px: 4,
          }}
          onClick={onClose}
        >
          PLAY
        </Button>
      </Box>
    </Modal>
  );
};

export default ThankYouModal;
