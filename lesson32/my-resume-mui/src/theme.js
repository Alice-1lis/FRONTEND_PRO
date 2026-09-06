import { createTheme } from "@mui/material/styles";

export const getAppTheme = (mode = "light") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#162d5d",
        dark: "#0d1c3d",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#E3D509",
      },
      ...(mode === "light"
        ? {
          background: { default: "#FFFFFF", paper: "#FFFFFF" },
          text: { primary: "#1A1D21", secondary: "#4A5157" },
        }
        : {
          background: { default: "#0B1220", paper: "#141B2C" },
          text: { primary: "#F2F4F7", secondary: "#A0AEC0" },
        }),
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
      h1: { fontWeight: 700, fontSize: "2.75rem", letterSpacing: "-0.02em" },
      h2: { fontWeight: 700, fontSize: "2.25rem", letterSpacing: "-0.01em" },
      h3: { fontWeight: 600, fontSize: "1.875rem" },
      h4: { fontWeight: 600, fontSize: "1.5rem" },
      h5: { fontWeight: 600, fontSize: "1.25rem" },
      subtitle1: { fontWeight: 500 },
      button: { fontWeight: 600, textTransform: "none" },
    },
    shape: {
      borderRadius: 10,
    },
    components: {
      MuiContainer: {
        defaultProps: {
          maxWidth: "sm",
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: "0 2px 4px rgba(227, 213, 9, 0.25), 0 6px 14px rgba(0, 0, 0, 0.15)",
            backgroundColor: "#162d5d",   // тепер збігається з primary.main
            borderBottom: `1px solid ${mode === "light" ? "rgba(227, 213, 9, 1)" : "rgba(227, 213, 9, 0.6)"
              }`,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            paddingInline: 18,
            transition: "transform 0.15s ease, box-shadow 0.15s ease",
          },
          contained: {
            boxShadow: "0 2px 8px rgba(27, 48, 95, 0.25)",
            "&:hover": {
              transform: "translateY(-1px)",
              boxShadow: "0 4px 14px rgba(27, 48, 95, 0.35)",
            },
          },
          outlined: {
            "&:hover": {
              transform: "translateY(-1px)",
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          outlined: {
            borderColor: mode === "light" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)",
            boxShadow:
              mode === "light"
                ? "0 1px 3px rgba(0,0,0,0.06)"
                : "0 1px 3px rgba(0,0,0,0.4)",
            transition: "box-shadow 0.25s ease, transform 0.25s ease",
            "&:hover": {
              boxShadow:
                mode === "light"
                  ? "0 8px 20px rgba(0,0,0,0.1)"
                  : "0 8px 20px rgba(0,0,0,0.5)",
              transform: "translateY(-2px)",
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: ({ theme, ownerState }) => ({
            borderRadius: 999,
            fontWeight: 500,
            ...(ownerState.variant === "outlined" &&
              ownerState.color === "primary" && {
              borderColor: theme.palette.mode === "light" ? "#1b305f" : "#8FA3D9",
              color: theme.palette.mode === "light" ? "#1b305f" : "#EDEFF2",
            }),
          }),
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            transition: "background-color 0.15s ease",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#1B305F",
              borderWidth: 2,
            },
          },
        },
      },
    },
  });

export default getAppTheme;




