import React from "react";
import { Button as MUIButton } from "@mui/material";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = "primary",
}) => {
  return (
    <MUIButton
      onClick={onClick}
      sx={{
        backgroundColor: variant === "primary" ? "#ff5722" : "#1976d2", // Custom colors
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "8px",
        fontSize: "16px",
        fontWeight: "bold",
        textTransform: "none",
        "&:hover": {
          backgroundColor: variant === "primary" ? "#e64a19" : "#1565c0",
        },
      }}
    >
      {text}
    </MUIButton>
  );
};

export default Button;
