import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body3: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }
}

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
            overflow: "hidden",
            borderRadius: "48px",
            backgroundColor: "#051737",
            color: "white",
            "& .MuiInputBase-input": {
              color: "white",
              textAlign: "left",
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
          textTransform: "none",
          "&.Mui-disabled": {
            backgroundColor: "#8080804D",
            color: "#FFFFFF80", 
          },
        },
        containedPrimary: {
          backgroundColor: "#FFFFFF1A",
          color: "white",
          "&:hover": {
            backgroundColor: "#152744",
          },
        },
        outlinedPrimary: {
          borderColor: "#FFFFFF1A",
          color: "white",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "#152744",
          },
        },
      },
      defaultProps: {
        title: "Button", 
      },
    },
    MuiPopover: {
      defaultProps: {
        disableScrollLock: true,
      },
    },
  },
});

export default theme;
