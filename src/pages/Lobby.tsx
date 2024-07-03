import React from 'react';

// Other visual components.
import Menu from "./general_components/Menu";

// MaterialUI
import { Container, Grid, Card, CardContent, CardMedia, Typography, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Drawer, AppBar, Toolbar } from '@mui/material';
import { Inbox as InboxIcon, Drafts as DraftsIcon, MoveToInbox as MoveToInboxIcon, Mail as MailIcon } from '@mui/icons-material';

import KeyIcon from '@mui/icons-material/Key';

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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
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
                            <Typography gutterBottom variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                            <Typography variant="body2" color="text.primary">
                                Цена: ${product.price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Категория: {product.category}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                В наличии: {product.stock}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};


const Lobby: React.FC = () => {
    const drawerWidth = 250;

    return (
        <>
            return (
            <Box sx={{ display: 'flex' }}>
                <AppBar
                    position="fixed"
                    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
                >
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Toolbar />
                    <h1>Sub2Soft</h1>
                    <Divider />
                    <List>
                        {['Программное обеспечение', 'Боты', 'Специальные ключи', 'API'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <KeyIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['Избранное', 'Инструктаж', 'Feedback'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <MailIcon /> : <InboxIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                >
                    <Toolbar />
                    <ProductGrid />
                </Box>
            </Box>
            );
        </>
    );
};

export default Lobby;
