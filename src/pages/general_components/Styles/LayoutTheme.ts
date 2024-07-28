import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#2979ff', // глубокий синий
        },
        secondary: {
            main: '#ff4081', // насыщенный розовый
        },
        background: {
            paper: '#0d0d0d', // еще более темный фон
        },
        text: {
            primary: '#ffffff', // чисто белый для основного текста
            secondary: '#a0a0a0' // светлее для второстепенного текста
        },
    },
});

export default darkTheme;
