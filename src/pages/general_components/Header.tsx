// Header.tsx
import React from 'react';
import { Box, Typography, IconButton, InputBase, Badge } from '@mui/material';
import { Search, AccountCircle, ShoppingCart } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useSavedProducts } from '../context/SavedProductsContext';

interface HeaderProps {
    pagename: string;
}

const Header: React.FC<HeaderProps> = ({ pagename }) => {
    const [searchFieldValue, setSearchFieldValue] = React.useState<string>("");
    const [isSearchButtonClicked, setIsSearchButtonClicked] = React.useState<boolean>(false);
    const { savedCount } = useSavedProducts();
    const navigate = useNavigate();

    const handleChangeIsSearchButtonClicked = () => {
        setIsSearchButtonClicked(true);
        navigate("/", { state: { searchFor: searchFieldValue } });
        setIsSearchButtonClicked(false);
    }

    return (
        <>
            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                Sub2Soft | {pagename}
            </Typography>
            <Box sx={{ display: { sm: 'flex' }, justifyContent: 'center' }}>
                <InputBase
                    placeholder="Search here"
                    value={searchFieldValue}
                    onChange={(e) => setSearchFieldValue(e.target.value)}
                    sx={{ mr: 1 }}
                />
                <IconButton color="inherit" onClick={handleChangeIsSearchButtonClicked}>
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
