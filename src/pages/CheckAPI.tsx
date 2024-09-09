import React, { useEffect, useState } from "react";
import Layout from "./general_components/Layout";
import { Paper, Typography, Container, Box, Grid } from "@mui/material";
import { Pie } from 'react-chartjs-2';

interface CheckAPIProps {
    isAdmin: boolean;
}

const MAX_LOCAL_STORAGE_SIZE_MB = 10;
const MAX_LOCAL_STORAGE_SIZE_BYTES = MAX_LOCAL_STORAGE_SIZE_MB * 1024 * 1024;

const CheckAPI: React.FC<CheckAPIProps> = ({ isAdmin }) => {
    const [localStorageSize, setLocalStorageSize] = useState<number>(0);

    const calculateLocalStorageSize = () => {
        let totalSize = 0;
        for (const key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                const value = localStorage.getItem(key);
                if (value) {
                    totalSize += key.length + value.length;
                }
            }
        }
        return totalSize * 2;
    };

    useEffect(() => {
        const size = calculateLocalStorageSize();
        setLocalStorageSize(size);
    }, []);

    const pieData = {
        labels: ['Занято', 'Свободно'],
        datasets: [
            {
                data: [localStorageSize, MAX_LOCAL_STORAGE_SIZE_BYTES - localStorageSize],
                backgroundColor: ['#f44336', '#4caf50'],
            },
        ],
    };

    return (
        <Layout pagename="API">
            <Container maxWidth="md">
                {!isAdmin ? (
                    <Typography variant="h6" color="error" align="center">
                        Извините, но вы не являетесь администратором.
                    </Typography>
                ) : (
                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h6" align="center" gutterBottom>
                            Вес localStorage
                        </Typography>
                        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
                            Вес localStorage: {localStorageSize} байт из {MAX_LOCAL_STORAGE_SIZE_BYTES} байт
                            ({(localStorageSize / MAX_LOCAL_STORAGE_SIZE_BYTES * 100).toFixed(2)}% от максимального объема).
                        </Typography>
                        <Grid container spacing={4} justifyContent="center">
                            <Grid item xs={12} md={6}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Typography variant="h6" align="center" sx={{ mb: 2 }}>
                                        Распределение по типам
                                    </Typography>
                                    <div style={{ width: '100%', height: '300px' }}>
                                        <Pie data={pieData} />
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                )}
            </Container>
        </Layout>
    );
};

export default CheckAPI;
