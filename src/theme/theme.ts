import { createTheme } from "@mui/material/styles";

// Extend Typography to recognize body3
declare module "@mui/material/styles" {
  interface TypographyVariants {
    body3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }
}

// Allow usage of `variant="body3"` in Typography components
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: "3rem",
      "@media (max-width:991px)": {
        fontSize: "2.5rem",
      },
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h2: {
      fontSize: "2.5rem",
      "@media (max-width:991px)": {
        fontSize: "2rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1.75rem",
      },
    },
    h3: {
      fontSize: "2rem",
      "@media (max-width:991px)": {
        fontSize: "1.75rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h4: {
      fontSize: "1.75rem",
      "@media (max-width:991px)": {
        fontSize: "1.5rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1.25rem",
      },
    },
    h5: {
      fontSize: "1.5rem",
      "@media (max-width:991px)": {
        fontSize: "1.25rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1.125rem",
      },
    },
    h6: {
      fontSize: "1.25rem",
      "@media (max-width:991px)": {
        fontSize: "1.125rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
    body1: {
      fontSize: "16px",
      "@media (max-width:991px)": {
        fontSize: "15px",
      },
      "@media (max-width:600px)": {
        fontSize: "14px",
      },
    },
    body2: {
      fontSize: "14px",
      "@media (max-width:991px)": {
        fontSize: "13px",
      },
      "@media (max-width:600px)": {
        fontSize: "12px",
      },
    },
    body3: {
      fontSize: "12px",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        body {
          font-family: 'Poppins', sans-serif;
        }
      `,
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "'Poppins', sans-serif",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            overflow: "hidden", // ✅ Fix border-radius clipping issues
            borderRadius: "48px",
            backgroundColor: "#051737",
            color: "white",
            "& .MuiInputBase-input": {
              color: "white", // Ensures text inside the input is white
            },
            "& fieldset": {
              borderColor: "#051737",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          textTransform: "none", // Optional: Prevents uppercase text
        },
        containedPrimary: {
          backgroundColor: "#152744",
          color: "white",
          "&:hover": {
            backgroundColor: "#0f1d33", // Darker shade on hover
          },
        },
        outlinedPrimary: {
          borderColor: "#152744",
          color: "white",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "rgba(21, 39, 68, 0.1)", // Light transparent effect
          },
        },
      },
    },
    
  },
});

export default theme;
