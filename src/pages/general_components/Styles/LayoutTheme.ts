import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#2979ff', 
        },
        secondary: {
            main: '#ff4081', 
        },
        background: {
            paper: '#0d0d0d',
        },
        text: {
            primary: '#ffffff',
            secondary: '#a0a0a0'
        },
    },
});

export default darkTheme;
