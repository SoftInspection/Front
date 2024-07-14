import React from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "./general_components/Layout";
import { Box, Typography, Button, Container } from "@mui/material";

const UndefinedAddress: React.FC = () => {
    const currentLocation = useLocation();

    return (
        <Layout>
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
                    <Button variant="contained" color="primary">
                        <Link to="/">Вернуться на главную</Link>
                    </Button>
                </Box>
            </Container>
        </Layout>
    );
};

export default UndefinedAddress;
