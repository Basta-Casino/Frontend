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
    body1: {
      fontSize: "16px",
      "@media (max-width:600px)": {
        fontSize: "14px",
      },
    },
    body2: {
      fontSize: "14px",
      "@media (max-width:600px)": {
        fontSize: "12px",
      },
    },
    body3: {
      fontSize: "12px", // Custom variant for 12px text
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
            "&:hover fieldset": {
              // borderColor: "#FF3366", // Change border color on hover
            },
            "&.Mui-focused fieldset": {
              // borderColor: "#FF3366", // Change border color when focused
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
        },
      },
    },
  },
});

export default theme;
