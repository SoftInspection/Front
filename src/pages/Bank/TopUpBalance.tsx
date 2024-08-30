import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Box,
  CircularProgress,
  Snackbar,
  Alert,
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../general_components/Layout';
import { InfoOutlined } from '@mui/icons-material';

const TopUpBalance: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [isCardAvailable, setIsCardAvailable] = useState<boolean>(false);
  const [balance, setBalance] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedIsCardExists = localStorage.getItem('isCardExists');
    const storedBalance = localStorage.getItem('balance');

    setIsCardAvailable(storedIsCardExists === 'true');
    if (storedBalance) {
      setBalance(Number(storedBalance));
    }
  }, []);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setAmount(value);
    }
  };

  const handleTopUp = async () => {
    if (amount > 0) {
      setLoading(true);
      setError(null);
      setSuccess(null);
      try {
        // Simulate a network request
        await new Promise(resolve => setTimeout(resolve, 1000));

        const newBalance = balance + amount;
        setBalance(newBalance);
        localStorage.setItem('balance', newBalance.toString());
        setSuccess('Баланс успешно пополнен!');
        setAmount(0); // Reset the amount field
        navigate('/profile');
      } catch (error) {
        setError('Произошла ошибка при пополнении баланса. Попробуйте ещё раз.');
      } finally {
        setLoading(false);
      }
    } else {
      setError('Введите корректную сумму для пополнения.');
    }
  };

  return (
    <Layout pagename="Пополнение баланса">
      <Container maxWidth="sm">
        <Paper sx={{ padding: 4, marginTop: 4, borderRadius: 2, boxShadow: 3 }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" align="center" gutterBottom>
              Пополнение баланса
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
              Текущий баланс: <strong>{balance} токенов</strong>
            </Typography>
            <Box display="flex" alignItems="center" marginY={2}>
              <Typography variant="h6" color="textSecondary" marginRight={1}>
                КУРС: 1 USD = 1 S2S-Токен
              </Typography>
              <IconButton color="info">
                <InfoOutlined />
              </IconButton>
            </Box>
            {isCardAvailable ? (
              <Box width="100%">
                <TextField
                  label="Сумма пополнения"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="number"
                  value={amount}
                  onChange={handleAmountChange}
                  InputProps={{
                    inputProps: { min: 0 }
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleTopUp}
                  sx={{ marginTop: 2, borderRadius: 1, height: 50 }}
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : 'Пополнить'}
                </Button>
              </Box>
            ) : (
              <Typography variant="h6" align="center" color="textSecondary">
                Карта не привязана. Пожалуйста, привяжите карту, чтобы пополнить баланс.
              </Typography>
            )}
          </Box>
        </Paper>
        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          onClose={() => setError(null)}
          message={error}
        >
          <Alert onClose={() => setError(null)} severity="error">
            {error}
          </Alert>
        </Snackbar>
        <Snackbar
          open={!!success}
          autoHideDuration={6000}
          onClose={() => setSuccess(null)}
          message={success}
        >
          <Alert onClose={() => setSuccess(null)} severity="success">
            {success}
          </Alert>
        </Snackbar>
      </Container>
    </Layout>
  );
};

export default TopUpBalance;
