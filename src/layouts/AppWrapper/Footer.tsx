import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, YouTube, Close } from "@mui/icons-material";
import VisaImg from "../../assets/footerImg1.png";
import MastercardImg from "../../assets/footerImg2.png";
import SkrillImg from "../../assets/footerImg3.png";
import BastaPatImg from "../../assets/footerImg4.png";
import VWImg from "../../assets/footerImg6.png";
import ScrillImg from "../../assets/footerImg5.png";
import EpImg from "../../assets/18plus.png";
import GcbImg from "../../assets/footerImgGcb.png";

// Sample payment method logos (Replace with real assets)
const paymentMethods = [
  { name: "Visa", src: VisaImg },
  { name: "Mastercard", src: MastercardImg },
  { name: "Skrill", src: SkrillImg },
  { name: "BastaPay", src: BastaPatImg },
  { name: "VWPay", src: VWImg },
  { name: "Scrill", src: ScrillImg },
];

// Footer links
const footerLinks = [
  "Send Us a Message",
  "Terms and Conditions",
  "Sports Betting Policy",
  "Responsible Gambling",
];

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "#0A1A36", color: "#fff", py: 4 }}>
      <Container maxWidth="lg">
        {/* Links Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              flexWrap: "wrap",
              mb: 3,
            }}
          >
            {footerLinks.map((link, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{ cursor: "pointer", "&:hover": { color: "#ddd" } }}
              >
                {link}
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            {/* Social Media Icons */}
            <IconButton sx={{ color: "#fff" }}>
              <Facebook />
            </IconButton>
            <IconButton sx={{ color: "#fff" }}>
              <Instagram />
            </IconButton>
            <IconButton sx={{ color: "#fff" }}>
              <YouTube />
            </IconButton>
            <IconButton sx={{ color: "#fff" }}>
              <Close />
            </IconButton>
          </Box>
        </Box>
        {/* Payment Methods */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
            mb: 3,
          }}
        >
          {paymentMethods.map((method, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                height: { xs: "50px", sm: "60px", md: "100px" }, // Responsive height
              }}
            >
              <img
                src={method.src}
                alt={method.name}
                style={{ maxWidth: "100%", height: "100%" }} // `height: 100%` makes it adapt to the Box height
              />
            </Box>
          ))}
        </Box>

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: { xs: 1, sm: 2 },
          }}
        >
          <Box
            sx={{
              bgcolor: "#112244",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: { xs: 1, sm: 2 },
              borderRadius: 2,
              minWidth: "45%",
              minHeight: { xs: "unset", sm: "200px" }, // Unset on extra small screens
            }}
          >
            <img
              src={EpImg}
              alt="18+"
              style={{ maxWidth: window.innerWidth < 600 ? "80px" : "130px" }}
            />
          </Box>
          <Box
            sx={{
              bgcolor: "#112244",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: { xs: 1, sm: 2 },
              borderRadius: 2,
              minWidth: "45%",
              minHeight: { xs: "unset", sm: "200px" }, // Unset on extra small screens
            }}
          >
            <img
              src={GcbImg}
              alt="GCB Certified"
              style={{ maxWidth: "130px" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
