import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: { main: "#3D6FB4", dark: "#1E3A5F", light: "#7FA8D9" },
        error: { main: "#C4453A" },
        background: { default: "#EAF0F9", paper: "#FFFFFF" },
        text: { primary: "#1E3A5F", secondary: "#4A5B7A" },
    },
    typography: {
        fontFamily: "'Inter', sans-serif",
        h4: {
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 800,
            color: "#1E3A5F",
            letterSpacing: "-0.02em",
        },
    },
    shape: { borderRadius: 14 },
    components: {
        MuiButton: {
            styleOverrides: {
                root: { textTransform: "none", fontWeight: 600, borderRadius: 10 },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": { borderRadius: 10 },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: { border: "1px solid #D9E4F5" },
            },
        },
    },
});

export default theme;