import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "./general_components/Layout";
import { Box, Typography, Button, Container, CircularProgress } from "@mui/material";

const UndefinedAddress: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const currentLocation = useLocation();

    const handleReload = () => {
        setLoading(true);
        setTimeout(() => {
            window.location.reload();
        }, 1000); //* Delay ONLY FOR DEMONSTRATION.
    };

    return (
        <React.Fragment>
            <Container maxWidth="md" sx={{ textAlign: 'center', mt: 8 }}>
                <Typography variant="h1" color="error" component="div" gutterBottom>
                    404
                </Typography>
                <Typography variant="h5" color="error" gutterBottom>
                    Не получилось найти адрес...
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                    {currentLocation.pathname}
                </Typography>
                <Box mt={4}>
                    {loading ? (
                        <CircularProgress />
                    ) : (
                        <>
                            <Button variant="contained" color="primary" onClick={handleReload} sx={{ mr: 2 }}>
                                Перезагрузить
                            </Button>
                            <Button variant="contained" color="primary" component={Link} to="/">
                                Вернуться на главную
                            </Button>
                        </>
                    )}
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default UndefinedAddress;
