import { alpha, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    pound: React.CSSProperties;
    label: React.CSSProperties;
    labelLink: React.CSSProperties;
    bodyLink: React.CSSProperties;
    body: React.CSSProperties;
    fadedLabel: React.CSSProperties;
    smallLabel: React.CSSProperties;
    smallLabelLink: React.CSSProperties;
    smallBody: React.CSSProperties;
    smallBodyLink: React.CSSProperties;
    footnote: React.CSSProperties;
    mediumFootnote: React.CSSProperties;
    smallFootnote: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    pound?: React.CSSProperties;
    label?: React.CSSProperties;
    labelLink?: React.CSSProperties;
    bodyLink?: React.CSSProperties;
    body?: React.CSSProperties;
    fadedLabel?: React.CSSProperties;
    smallLabel?: React.CSSProperties;
    smallLabelLink?: React.CSSProperties;
    smallBody?: React.CSSProperties;
    smallBodyLink?: React.CSSProperties;
    footnote?: React.CSSProperties;
    mediumFootnote?: React.CSSProperties;
    smallFootnote?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    pound: true;
    label: true;
    labelLink: true;
    body: true;
    bodyLink: true;
    fadedLabel: true;
    smallLabel: true;
    smallLabelLink: true;
    smallBody: true;
    smallBodyLink: true;
    footnote: true;
    mediumFootnote: true;
    smallFootnote: true;
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff69b4", // bright pink
    },
    secondary: {
      main: "#80c342", // lime green
    },
    error: {
      main: "#ff1744", // bright red
    },
    warning: {
      main: "#ffb74d", // orange
    },
    info: {
      main: "#2196f3", // blue
    },
    success: {
      main: "#4caf50", // green
    },
    background: {
      default: "#f1f1f1", // light gray
      paper: "#ffffff", // white
    },
  },
  typography: {
    // fontFamily: ['"Inter"', "sans-serif"].join(","),
    pound: {
      fontWeight: 500,
      fontSize: "48px",
      lineHeight: "42px",
      letterSpacing: "-0.01em",
    },
    h1: {
      fontWeight: 800,
      fontSize: "34px",
      lineHeight: "42px",
      letterSpacing: "-0.01em",
    },
    h2: {
      fontWeight: 800,
      fontSize: "28px",
      lineHeight: "34px",
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "28px",
      letterSpacing: "-0.02em",
    },
    h4: {
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "18px",
      letterSpacing: "-0.01em",
    },
    h5: {
      fontWeight: 700,
      fontSize: "12px",
      lineHeight: "20px",
      letterSpacing: "0.13em",
    },
    h6: {
      fontWeight: 700,
      fontSize: "10px",
      lineHeight: "20px",
      letterSpacing: "0.13em",
    },
    label: {
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "-0.01em",
    },
    labelLink: {
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "-0.01em",
      textDecoration: "underline",
    },
    body: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "-0.01em",
    },
    bodyLink: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "-0.01em",
      textDecoration: "underline",
    },
    fadedLabel: {
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "-0.01em",
      color: "rgba(7, 26, 36, 0.5)",
    },
    smallLabel: {
      fontWeight: 600,
      fontSize: "12px",
      lineHeight: "18px",
      letterSpacing: "0.01em",
    },
    smallLabelLink: {
      fontWeight: 600,
      fontSize: "12px",
      lineHeight: "18px",
      letterSpacing: "0.01em",
      textDecoration: "underline",
    },
    smallBody: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "17px",
      letterSpacing: "0.01em",
    },
    smallBodyLink: {
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "18px",
      letterSpacing: "0.01em",
      textDecoration: "underline",
    },
    footnote: {
      fontWeight: 400,
      fontSize: "11px",
      lineHeight: "15px",
      letterSpacing: "0.01em",
      color: "rgba(7, 26, 36, 0.5)",
    },
    mediumFootnote: {
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "14.4px",
      letterSpacing: "0.01em",
    },
    smallFootnote: {
      fontWeight: 500,
      fontSize: "9px",
      lineHeight: "15px",
      letterSpacing: "0.01em",
      color: "rgba(7, 26, 36, 0.5)",
    },
  },
});

export default theme;
