import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    Box, Button, Stepper, Step, StepLabel, TextField,
    Card, CardContent, Typography, Accordion, AccordionSummary,
    AccordionDetails, Alert, LinearProgress, Snackbar, InputAdornment,
    Grid, Container, IconButton, Avatar, Dialog, DialogTitle, DialogContent, DialogActions,
    CircularProgress
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
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
    const [openErrorDialog, setOpenErrorDialog] = useState(false); // Для отображения ошибки

    //! DEMO TOKENS (DEMONSTRATION BALANCE)
    const balance: number = 600;
    //! --------

    const steps = ['Подтвердите выбор', 'Введите ключ', 'Подтвердите покупку'];

    const handleNext = () => {
        if (product) {
            if (balance < product?.price) {
                setOpenErrorDialog(true);
            } else if (activeStep === steps.length - 1) {
                setPurchaseComplete(true);
                setTimeout(() => {
                    setOpenSnackbar(true);
                    setPurchaseComplete(false);
                    navigate('/');
                }, 2000);
            } else {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            }
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

    const handlePaste = () => {
        navigator.clipboard.readText().then((text) => {
            setSpecialKey(text);
        });
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
        navigate('/');
    };

    const handleCloseErrorDialog = () => {
        setOpenErrorDialog(false);
    };

    if (!product) {
        return <Alert severity="error">Товар не найден.</Alert>;
    }

    return (
        <Container sx={{ py: 4 }} maxWidth="sm">
            <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Typography variant="h4" component="h1">Sub2Soft</Typography>
                <Typography variant="h6">(Транзакция)</Typography>
                <Typography variant="h6" color="text.secondary">Баланс: {balance} токенов</Typography>
            </Box>

            <Card sx={{ mb: 3, p: 2 }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={4}>
                        <Avatar
                            variant="rounded"
                            src={product.image}
                            alt={product.name}
                            sx={{ width: '100%', height: 'auto' }}
                        />
                    </Grid>

                    <Grid item xs={8}>
                        <Typography variant="h5" component="h1">{product.name}</Typography>
                        <Typography variant="body2" color="text.secondary">{product.category}</Typography>
                        <Typography variant="h6" color="primary" sx={{ mt: 1 }}>Цена: ${product.price}</Typography>
                        {isAvailable ? (
                            <Alert severity="success" sx={{ mt: 1 }}>Доступен</Alert>
                        ) : (
                            <Alert severity="error" sx={{ mt: 1 }}>Недоступен</Alert>
                        )}
                    </Grid>
                </Grid>
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
                <Card sx={{ mb: 3 }}>
                    <CardContent>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Описание</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{product.description}</Typography>
                            </AccordionDetails>
                        </Accordion>
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
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handlePaste} edge="end">
                                        <ContentPasteIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            )}

            {activeStep === 2 && (
                <Card sx={{ mb: 3 }}>
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
                        <CircularProgress />
                    </motion.div>
                </Box>
            )}

            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message='Покупка состоялась.'
            />

            {/* Диалоговое окно ошибки */}
            <Dialog
                open={openErrorDialog}
                onClose={handleCloseErrorDialog}
            >
                <DialogTitle>Ошибка</DialogTitle>
                <DialogContent>
                    <Typography>Недостаточно токенов для покупки.</Typography>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => navigate('/profile')}
                    >
                        Пополнить баланс токенов
                    </Button>
                    <Button
                        onClick={() => navigate('/')}
                    >
                        На главную
                    </Button>
                    <Button
                        onClick={() => window.location.reload()}
                    >
                        Перезагрузить
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

export default BuySoft;
