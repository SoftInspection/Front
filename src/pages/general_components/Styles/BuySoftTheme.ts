import { createTheme } from "@mui/material";

const buySoftTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#2979ff',
        },
        secondary: {
            main: '#ff4081',
        },
        background: {
            default: '#121212',
            paper: '#0d0d0d',
        },
        text: {
            primary: '#ffffff',
            secondary: '#a0a0a0',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h6: {
            fontWeight: 600,
            color: '#ffffff',
        },
        body1: {
            fontSize: '1rem',
            color: '#ffffff',
        },
        button: {
            textTransform: 'none',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    padding: '8px 16px',
                    color: '#ffffff',
                    '&:hover': {
                        backgroundColor: '#1e88e5',
                    },
                },
                contained: {
                    backgroundColor: '#2979ff',
                    '&:hover': {
                        backgroundColor: '#1e88e5',
                    },
                },
                outlined: {
                    borderColor: '#2979ff',
                    color: '#2979ff',
                    '&:hover': {
                        backgroundColor: 'rgba(41, 121, 255, 0.1)',
                    },
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#0d0d0d',
                    color: '#ffffff',
                    borderRadius: '8px',
                    padding: '16px',
                },
            },
        },
        MuiSnackbar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#333333',
                    color: '#ffffff',
                    borderRadius: '8px',
                    padding: '12px 24px',
                    fontSize: '1rem',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#ffffff',
                },
            },
        },
        MuiCircularProgress: {
            styleOverrides: {
                root: {
                    color: '#2979ff',
                },
            },
        },
    },
});

export default buySoftTheme;