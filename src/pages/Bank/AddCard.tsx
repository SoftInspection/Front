import React, { useState } from 'react';
import {
    Button,
    Card,
    CardContent,
    TextField,
    Typography,
    Grid,
    Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../general_components/Layout';

const AddCard: React.FC = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardholderName, setCardholderName] = useState('');

    const [errors, setErrors] = useState({
        cardNumber: false,
        expiryDate: false,
        cvv: false,
        cardholderName: false,
    });

    const navigate = useNavigate();

    const validateCardNumber = (number: string) => {
        // Remove spaces and check length
        const cleanedNumber = number.replace(/\s+/g, '');
        return cleanedNumber.length === 16;
    };

    const validateExpiryDate = (date: string) => {
        // Check for MM/YY format
        const parts = date.split('/');
        return parts.length === 2 && parts[0].length === 2 && parts[1].length === 2;
    };

    const validateCvv = (cvv: string) => {
        return cvv.length === 3;
    };

    const handleAddCard = () => {
        const isCardNumberValid = validateCardNumber(cardNumber);
        const isExpiryDateValid = validateExpiryDate(expiryDate);
        const isCvvValid = validateCvv(cvv);

        setErrors({
            cardNumber: !isCardNumberValid,
            expiryDate: !isExpiryDateValid,
            cvv: !isCvvValid,
            cardholderName: cardholderName.trim() === '',
        });

        if (isCardNumberValid && isExpiryDateValid && isCvvValid && cardholderName.trim() !== '') {
            // Valid card, perform submission logic
            console.log('Номер карты:', cardNumber);
            console.log('Срок действия:', expiryDate);
            console.log('CVV:', cvv);
            console.log('Имя держателя карты:', cardholderName);
        }

        if (isCardNumberValid && isExpiryDateValid && isCvvValid && cardholderName.trim() !== '') {
            localStorage.setItem('isCardExists', 'true');

            navigate('/profile');
        }
    };

    const formatCardNumber = (value: string) => {
        return value
            .replace(/\D/g, '') // Delete ALL non-digit from card number.
            .replace(/(\d{4})(?=\d)/g, '$1 ') // Pasting a space between each 4 numbers in card.
            .trim(); // Clear from spaces.
    };

    const formatExpiryDate = (value: string) => {
        return value
            .replace(/\D/g, '') // Delete ALL non-digit.
            .replace(/(\d{2})(?=\d)/, '$1/') // Pasting the SLASH between two digits.
            .slice(0, 5); // Slice to 5 symbols.
    };

    const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedExpiryDate = formatExpiryDate(e.target.value);
        setExpiryDate(formattedExpiryDate);
    };

    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = formatCardNumber(e.target.value);
        setCardNumber(formattedValue);
    };

    const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCvv(e.target.value);
    };

    const handleCardholderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardholderName(e.target.value);
    };

    return (
        <Layout pagename={`НОВАЯ КАРТА`}>
            <Card sx={{ maxWidth: 400, margin: '0 auto', padding: 2 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Привязка новой карты
                    </Typography>
                    <Box component="form" noValidate autoComplete="off">
                        <TextField
                            label="Номер карты"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            inputProps={{ maxLength: 19 }} // 16 digits + 3 spaces = 19 characters
                            error={errors.cardNumber}
                            helperText={errors.cardNumber ? 'Неверный код карты' : ''}
                        />
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    label="Срок действия (MM/YY)"
                                    variant="outlined"
                                    fullWidth
                                    value={expiryDate}
                                    onChange={handleExpiryDateChange}
                                    error={errors.expiryDate}
                                    helperText={errors.expiryDate ? 'Неверный срок действия' : ''}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="CVV"
                                    variant="outlined"
                                    fullWidth
                                    value={cvv}
                                    onChange={handleCvvChange}
                                    error={errors.cvv}
                                    helperText={errors.cvv ? 'Неверный CVV' : ''}
                                />
                            </Grid>
                        </Grid>
                        <TextField
                            label="Имя держателя"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={cardholderName}
                            onChange={handleCardholderNameChange}
                            error={errors.cardholderName}
                            helperText={errors.cardholderName ? 'Требуется имя держателя' : ''}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ marginTop: 2 }}
                            onClick={handleAddCard}
                        >
                            ДОБАВИТЬ КАРТУ
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Layout>
    );
};

export default AddCard;
