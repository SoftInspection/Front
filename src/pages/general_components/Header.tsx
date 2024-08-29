import React from 'react';
import { Box, Typography, IconButton, InputBase, Badge, AppBar, Toolbar, Container } from '@mui/material';
import { Search, AccountCircle, ShoppingCart, NoAccounts } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useSavedProducts } from '../context/SavedProductsContext';

interface HeaderProps {
    pagename: string;
}

const Header: React.FC<HeaderProps> = ({ pagename }) => {
    const [searchFieldValue, setSearchFieldValue] = React.useState<string>("");
    const { savedCount } = useSavedProducts();

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const balance = localStorage.getItem('balance');

    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchFieldValue.trim()) {
            navigate("/", { state: { searchFor: searchFieldValue } });
            setSearchFieldValue("");
        }
    }

    return (
        <AppBar position="static" color="default" elevation={2}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h6" noWrap component={Link} to="/" sx={{
                            textDecoration: 'none',
                            color: 'primary.main',
                            fontWeight: 'bold',
                            mr: 2
                        }}>
                            Sub2Soft
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                            {" | "}
                            {pagename}
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <InputBase
                            placeholder="Search here..."
                            value={searchFieldValue}
                            onChange={(e) => setSearchFieldValue(e.target.value)}
                            sx={{
                                ml: 1,
                                pl: 2,
                                pr: 2,
                                height: '36px',
                                borderRadius: '20px',
                                backgroundColor: 'background.paper',
                                boxShadow: 1,
                                minWidth: '200px'
                            }}
                        />
                        <IconButton
                            color="primary"
                            disabled={!searchFieldValue.trim()}
                            onClick={handleSearch}
                            sx={{ ml: 1 }}
                        >
                            <Search />
                        </IconButton>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body1" sx={{ color: 'text.secondary', mr: 2 }}>
                            {isLoggedIn ?
                                <>Баланс: <span style={{ fontWeight: 'bold', color: 'primary.main' }}>{balance ? balance : '0'}</span> токенов</> :
                                <>Не авторизован</>
                            }
                        </Typography>
                        <IconButton component={Link} to="/profile" color={isLoggedIn ? "primary" : "error"}>
                            {isLoggedIn ? <AccountCircle /> : <NoAccounts />}
                        </IconButton>
                        <IconButton component={Link} to="/saved" color="primary" sx={{ ml: 1 }}>
                            <Badge badgeContent={savedCount} color="error">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
