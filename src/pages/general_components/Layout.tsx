import React, { ReactNode } from 'react';
import { styled, ThemeProvider, useTheme } from '@mui/material/styles';
import { Drawer, CssBaseline, Box, Toolbar, List, Divider, IconButton } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import KeyIcon from '@mui/icons-material/Key';
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';

import Header from "./Header";
import darkTheme from './Styles/LayoutTheme';

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
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
                    <AppBar position="fixed" open={open}>
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
                            <Header />
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                                // backgroundColor: theme.palette.background.paper,
                                backgroundColor: "#343434",
                                // color: theme.palette.text.primary,
                                color: "white"
                            },
                        }}
                        variant="persistent"
                        anchor="left"
                        open={open}
                    >
                        <DrawerHeader>
                            {/* <Typography variant="h6">Sub2Soft</Typography> */}
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                                {/* <ChevronRightIcon /> */}
                            </IconButton>
                        </DrawerHeader>
                        <Divider sx={{ backgroundColor: theme.palette.divider }} />
                        <List>
                            {[
                                { text: "Главная", link: "/" },
                                { text: 'Программное обеспечение', link: '/software' },
                                { text: 'Боты', link: '/bots' },
                                { text: 'Специальные ключи', link: '/keys' },
                                { text: 'API', link: '/api' },
                            ].map((item, index) => (
                                <ListItem key={item.text} disablePadding>
                                    <ListItemButton component={Link} to={item.link}>
                                        <ListItemIcon sx={{ color: theme.palette.text.primary }}>
                                            {index % 2 === 0 ? <KeyIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <p>{item.text}</p>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        <Divider sx={{ backgroundColor: theme.palette.divider }} />
                        <List>
                            {[
                                { text: 'Сохранённое', link: '/saved' },
                                { text: 'Инструктажа', link: '/training' },
                                { text: 'Feedback', link: '/feedback' },
                            ].map((item, index) => (
                                <ListItem key={item.text} disablePadding>
                                    <ListItemButton component={Link} to={item.link}>
                                        <ListItemIcon sx={{ color: theme.palette.text.primary }}>
                                            {index % 2 === 0 ? <MailIcon /> : <InboxIcon />}
                                        </ListItemIcon>
                                        <p>{item.text}</p>
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
