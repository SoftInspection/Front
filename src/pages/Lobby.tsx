import React from 'react';

// MaterialUI
import { styled, useTheme } from '@mui/material/styles';
import { Drawer } from "@mui/material";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// Other vital visual components.
import Header from "./general_components/Header"
import Menu from "./general_components/Menu";
import Layout from "./general_components/Layout"

// MaterialUI
import { Container, Grid, Card, CardContent, CardMedia, Typography as MuiTypography } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';

const drawerWidth = 240;

const PRODUCTS = [
    {
        id: 1,
        name: 'Софт 1',
        price: 299.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Софт',
        stock: 25,
        image: '?'
    },
    {
        id: 2,
        name: 'Бот 1',
        price: 799.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedита modi animi sunt rerum iure!",
        category: 'Бот',
        stock: 15,
        image: '?'
    },
    {
        id: 3,
        name: 'Спец-токен 1',
        price: 99.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Токен',
        stock: 50,
        image: '?'
    },
    {
        id: 4,
        name: 'Бот 2',
        price: 199.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam долorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Бот',
        stock: 30,
        image: '?'
    },
    {
        id: 5,
        name: 'Софт 2',
        price: 49.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Софт',
        stock: 40,
        image: '?'
    }
];

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
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const ProductGrid: React.FC = () => {
    return (
        <Grid container spacing={4}>
            {PRODUCTS.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image={product.image}
                            alt={product.name}
                        />
                        <CardContent>
                            <MuiTypography gutterBottom variant="h5" component="div">
                                {product.name}
                            </MuiTypography>
                            <MuiTypography variant="body2" color="text.secondary">
                                {product.description}
                            </MuiTypography>
                            <MuiTypography variant="body2" color="text.primary">
                                Цена: ${product.price}
                            </MuiTypography>
                            <MuiTypography variant="body2" color="text.secondary">
                                Категория: {product.category}
                            </MuiTypography>
                            <MuiTypography variant="body2" color="text.secondary">
                                В наличии: {product.stock}
                            </MuiTypography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

const Lobby: React.FC = () => {
    return (<>
        <Layout>
            <ProductGrid />
        </Layout>
    </>)
};

export default Lobby;
