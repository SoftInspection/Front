import React, { ReactNode } from 'react';
import { styled, ThemeProvider, useTheme } from '@mui/material/styles';
import { Drawer, CssBaseline, Box, Toolbar, List, Divider, IconButton, ListItemText } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SaveIcon from '@mui/icons-material/Save';
import SchoolIcon from '@mui/icons-material/School';
import FeedbackIcon from '@mui/icons-material/Feedback';
import InfoIcon from '@mui/icons-material/Info';
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';

import Header from "./Header";
import darkTheme from './Styles/LayoutTheme';
import { AccountCircle } from '@mui/icons-material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

interface LayoutProps {
    pagename: string;
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ pagename, children }) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar position="fixed" open={open} sx={{ backgroundColor: '#222' }}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{ marginRight: 5, ...(open && { display: 'none' }) }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Header pagename={pagename} />
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                                backgroundColor: "#2E2E2E",
                                color: "#FFFFFF",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                            },
                        }}
                        variant="persistent"
                        anchor="left"
                        open={open}
                    >
                        <DrawerHeader>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </IconButton>
                        </DrawerHeader>
                        <Divider sx={{ backgroundColor: theme.palette.divider }} />
                        <List>
                            {[
                                { text: "Главная", link: "/", icon: <HomeIcon /> },
                                { text: 'Профиль', link: '/profile', icon: <AccountCircle /> },
                                { text: 'История тран-ций', link: '/transactions', icon: <AccountBalanceIcon /> },
                                ...(localStorage.getItem('isDeveloperMode') === 'true'
                                    ? [{ text: 'Добавить свой', link: '/add-product', icon: <AddCircleIcon /> }]
                                    : []),
                            ].map((item) => (
                                <ListItem key={item.text} disablePadding>
                                    <ListItemButton component={Link} to={item.link} sx={{ '&:hover': { backgroundColor: '#424242' } }}>
                                        <ListItemIcon sx={{ color: theme.palette.text.primary }}>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={<Typography variant="body1" color="inherit">{item.text}</Typography>}
                                            sx={{ marginLeft: -2 }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        <Divider sx={{ backgroundColor: theme.palette.divider }} />
                        <List>
                            {[
                                { text: 'Сохранённое', link: '/saved', icon: <SaveIcon /> },
                                { text: 'Инструктаж', link: '/instruction', icon: <SchoolIcon /> },
                                { text: 'Feedback', link: '/feedback', icon: <FeedbackIcon /> },
                                { text: 'О нас', link: '/about', icon: <InfoIcon /> },
                            ].map((item) => (
                                <ListItem key={item.text} disablePadding>
                                    <ListItemButton component={Link} to={item.link} sx={{ '&:hover': { backgroundColor: '#424242' } }}>
                                        <ListItemIcon sx={{ color: theme.palette.text.primary }}>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={<Typography variant="body1" color="inherit">{item.text}</Typography>}
                                            sx={{ marginLeft: -2 }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                    <Main open={open}>
                        <DrawerHeader />
                        {children}
                    </Main>
                </Box>
            </ThemeProvider>
        </>
    );
};

export default Layout;
