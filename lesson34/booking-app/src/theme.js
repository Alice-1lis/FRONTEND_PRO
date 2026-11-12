import { createTheme, alpha } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#08324f",
      light: "#114474",
      dark: "#092740",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#F5A623",
      light: "#FFC35C",
      dark: "#C97E00",
      contrastText: "#054e7e",
    },
    background: {
      default: "#FBF8F2",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1B2733",
      secondary: "#5B6B79",
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h4: { fontWeight: 700, letterSpacing: "-0.02em" },
    h5: { fontWeight: 700, letterSpacing: "-0.01em" },
    h6: { fontWeight: 700 },
    button: { fontWeight: 700, textTransform: "none" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, #F3EEE2 100%)`,
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        },
        "::selection": {
          background: theme.palette.secondary.main,
          color: theme.palette.primary.main,
        },
      }),
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: ({ theme }) => ({
          boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.25)}`,
          "&:hover": {
            boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.35)}`,
            transform: "translateY(-1px)",
          },
          transition: "all 0.2s ease",
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          boxShadow: `0 2px 10px ${alpha(theme.palette.primary.main, 0.08)}`,
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: `0 12px 28px ${alpha(theme.palette.primary.main, 0.18)}`,
          },
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiOutlinedInput-root": {
            borderRadius: theme.spacing(2), // 16px, м'якіші кути
            backgroundColor: alpha(theme.palette.primary.main, 0.05),
            transition:
              "background-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent", // у спокої рамки не видно
              borderWidth: 1.5,
              transition: "border-color 0.2s ease",
            },
            "&:hover": {
              backgroundColor: alpha(theme.palette.primary.main, 0.07),
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: alpha(theme.palette.primary.main, 0.25),
            },
            "&.Mui-focused": {
              backgroundColor: theme.palette.background.paper,
              boxShadow: `0 4px 16px ${alpha(theme.palette.secondary.main, 0.25)}`,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.secondary.main,
              borderWidth: 2,
            },
            "&.Mui-error": {
              backgroundColor: alpha(theme.palette.error.main, 0.04),
            },
            "&.Mui-error .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.error.main,
            },
            "&.Mui-error.Mui-focused": {
              boxShadow: `0 4px 16px ${alpha(theme.palette.error.main, 0.2)}`,
            },
          },
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
