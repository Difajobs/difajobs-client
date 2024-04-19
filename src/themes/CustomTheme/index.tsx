import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    logotype?: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    logotype?: React.CSSProperties;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    logotype: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: "1.8rem",
    },
    h1: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 700,
      color: "black",
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },

    h2: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 700,
      color: "black",
      "@media (max-width:600px)": {
        fontSize: "2.2rem",
      },
    },

    h3: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 700,
      color: "black",
      "@media (max-width:600px)": {
        fontSize: "1.6rem",
      },
    },

    h4: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 400,
      color: "black",
      "@media (max-width:600px)": {
        fontSize: "1.4rem",
      },
    },

    h5: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 400,
      color: "black",
      "@media (max-width:600px)": {
        fontSize: "1.2rem",
      },
    },

    h6: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 200,
      color: "#fc801a",
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },

    body1: {
      fontFamily: "Inter, sans-serif",
      color: "black",
      fontSize: "1rem",
      "@media (max-width:600px)": {
        fontSize: "0.9rem",
      },
    },

    body2: {
      fontFamily: "Inter, sans-serif",
      color: "black",
      fontSize: "12px",
      "@media (max-width:600px)": {
        fontSize: "14px",
      },
    },
  },
});

export default theme;
