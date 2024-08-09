import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    Box, Button, Stepper, Step, StepLabel, TextField,
    Card, CardContent, Typography, Accordion, AccordionSummary,
    AccordionDetails, Alert, LinearProgress, Snackbar, InputAdornment
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyIcon from '@mui/icons-material/VpnKey';
import PRODUCTS from "../external_data/Products";
import { motion } from 'framer-motion';

const BuySoft: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const product = PRODUCTS.find((p) => p.name === name);
    const isAvailable = product?.stock !== false;

    const navigate = useNavigate();

    const [activeStep, setActiveStep] = useState(0);
    const [specialKey, setSpecialKey] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [purchaseComplete, setPurchaseComplete] = useState(false);

    const steps = ['Подтвердите выбор', 'Введите ключ', 'Подтвердите покупку'];

    const handleNext = () => {
        if (activeStep === steps.length - 1) {
            setPurchaseComplete(true);
            setTimeout(() => {
                setOpenSnackbar(true);
                setPurchaseComplete(false);
                navigate(`/`);
            }, 2000);
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep === 0) {
            navigate(`/item/${product?.name}`);
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSpecialKey(event.target.value);
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
        navigate(`/`);
    };

    if (!product) {
        return <Alert severity="error">Товар не найден.</Alert>;
    }

    return (
        <Box sx={{ width: '100%', maxWidth: 600, margin: 'auto', padding: 2 }}>
            <Card sx={{ mb: 3 }}>
                <CardContent>
                    <Typography variant="h5">{product.name} ({product.category})</Typography>
                    <Typography variant="h6" color="text.secondary">Цена: ${product.price}</Typography>
                </CardContent>
            </Card>

            <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <LinearProgress variant="determinate" value={(activeStep + 1) * (100 / steps.length)} sx={{ mb: 3 }} />

            {activeStep === 0 && (
                <Card>
                    <CardContent>
                        <Accordion sx={{ mt: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Описание</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{product.description}</Typography>
                            </AccordionDetails>
                        </Accordion>
                        {isAvailable ? (
                            <Alert severity="success" sx={{ mt: 2 }}>Доступен</Alert>
                        ) : (
                            <Alert severity="error" sx={{ mt: 2 }}>Недоступен</Alert>
                        )}
                    </CardContent>
                </Card>
            )}

            {activeStep === 1 && (
                <Box>
                    <Typography variant="h6">Введите ключ доступа</Typography>
                    <TextField
                        fullWidth
                        label="Special Key"
                        variant="outlined"
                        value={specialKey}
                        onChange={handleChange}
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <KeyIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            )}

            {activeStep === 2 && (
                <Card>
                    <CardContent>
                        <Typography variant="h6">Подтвердите покупку...</Typography>
                        <Typography>Товар: {product.name}</Typography>
                        <Typography>Ключ: {specialKey}</Typography>
                        <Typography>Всего: ${product.price}</Typography>
                    </CardContent>
                </Card>
            )}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                <Button
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                >
                    Назад
                </Button>
                <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    disabled={!isAvailable && activeStep === 0}
                >
                    {activeStep === steps.length - 1 ? 'Подтвердить' : 'Далее'}
                </Button>
            </Box>

            {purchaseComplete && (
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography variant="h4" color="primary">Обработка...</Typography>
                    </motion.div>
                </Box>
            )}

            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message='Покупка состоялась.'
            />
        </Box>
    );
}

export default BuySoft;
