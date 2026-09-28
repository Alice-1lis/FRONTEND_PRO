import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0F3D5C',
      light: '#3A6690',
      dark: '#092740',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#F5A623',
      light: '#FFC35C',
      dark: '#C97E00',
      contrastText: '#0F3D5C',
    },
    background: {
      default: '#FBF8F2',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1B2733',
      secondary: '#5B6B79',
    },
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h4: { fontWeight: 700, letterSpacing: '-0.02em' },
    h5: { fontWeight: 700, letterSpacing: '-0.01em' },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600, textTransform: 'none' },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          boxShadow: '0 4px 14px rgba(15, 61, 92, 0.25)',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(15, 61, 92, 0.35)',
            transform: 'translateY(-1px)',
          },
          transition: 'all 0.2s ease',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          boxShadow: '0 2px 10px rgba(15, 61, 92, 0.08)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 28px rgba(15, 61, 92, 0.18)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            transition: 'box-shadow 0.2s ease',
            '&.Mui-focused': {
              boxShadow: '0 0 0 3px rgba(245, 166, 35, 0.25)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#F5A623',
            },
          },
        },
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