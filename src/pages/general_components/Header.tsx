import React from 'react';
import { Box, Typography, IconButton, InputBase, Badge } from '@mui/material';
import { Search, AccountCircle, ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSavedProducts } from '../context/SavedProductsContext';

const Header: React.FC = () => {
    const { savedCount } = useSavedProducts();

    return (
        <>
            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                Sub2Soft
            </Typography>
            <Box sx={{ display: { sm: 'flex' }, justifyContent: 'center' }}>
                <InputBase
                    placeholder="Search here"
                    sx={{ mr: 1 }}
                />
                <IconButton color="inherit">
                    <Search />
                </IconButton>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <IconButton component={Link} to="/profile" color="inherit">
                    <AccountCircle />
                </IconButton>
                <IconButton component={Link} to="/saved" color="inherit">
                    <Badge badgeContent={savedCount} color="error">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            </Box>
        </>
    );
};

export default Header;
