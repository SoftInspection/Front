import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
        secondary: {
            main: '#f48fb1',
        },
        background: {
            paper: '#1f1f1f',
        },
        text: {
            primary: '#e0e0e0',
            secondary: '#b0b0b0'
        },
    },
});

export default darkTheme;
