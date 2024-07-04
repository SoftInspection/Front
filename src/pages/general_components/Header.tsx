import React from 'react';

// MaterialUI
import { Box, Typography, IconButton, InputBase, Badge } from '@mui/material';
import { Search, AccountCircle, ShoppingCart } from '@mui/icons-material';

function Header() {
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
                <IconButton color="inherit">
                    <AccountCircle />
                </IconButton>
                <IconButton color="inherit">
                    <Badge badgeContent={0} color="error">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            </Box>
        </>

    );
}

export default Header;
