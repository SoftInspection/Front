import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../general_components/Layout';

const TopUpBalance: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [isCardAvailable, setIsCardAvailable] = useState<boolean>(false);
  const [balance, setBalance] = useState<number>(0);
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
    setAmount(Number(e.target.value));
  };

  const handleTopUp = () => {
    if (amount > 0) {
      const newBalance = balance + amount;
      setBalance(newBalance);
      localStorage.setItem('balance', newBalance.toString());
      navigate('/profile');
    }
  };

  return (
    <Layout pagename="Пополнение баланса">
      <Container maxWidth="sm">
        <Paper sx={{ padding: 4, marginTop: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Пополнение баланса
          </Typography>
          {isCardAvailable ? (
            <Box>
              <TextField
                label="Сумма пополнения"
                variant="outlined"
                fullWidth
                margin="normal"
                type="number"
                value={amount}
                onChange={handleAmountChange}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleTopUp}
                sx={{ marginTop: 2 }}
              >
                Пополнить
              </Button>
            </Box>
          ) : (
            <Typography variant="h6" align="center" color="textSecondary">
              Карта не привязана. Пожалуйста, привяжите карту, чтобы пополнить баланс.
            </Typography>
          )}
        </Paper>
      </Container>
    </Layout>
  );
};

export default TopUpBalance;
