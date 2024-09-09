import React, { useEffect, useState } from 'react';
import { Paper, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar, Container, Divider, Grid, Chip } from '@mui/material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { Bar, Pie, Line } from 'react-chartjs-2';
import Layout from './general_components/Layout';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement);

interface Transaction {
    id: number;
    type: 'deposit' | 'expense';
    amount: number;
    date: string;
    time: string;
    description: string;
}

const TransactionHistory: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        const storedTransactions = localStorage.getItem('transactions');
        if (storedTransactions) {
            setTransactions(JSON.parse(storedTransactions));
        }
    }, []);

    const deposits = transactions.filter((t) => t.type === 'deposit');
    const expenses = transactions.filter((t) => t.type === 'expense');

    const pieData = {
        labels: ['Deposits', 'Expenses'],
        datasets: [
            {
                data: [deposits.reduce((sum, t) => sum + t.amount, 0), expenses.reduce((sum, t) => sum + t.amount, 0)],
                backgroundColor: ['#4caf50', '#f44336'],
            },
        ],
    };

    const barData = {
        labels: ['Deposits', 'Expenses'],
        datasets: [
            {
                label: 'Amount',
                data: [
                    deposits.reduce((sum, t) => sum + t.amount, 0),
                    expenses.reduce((sum, t) => sum + t.amount, 0),
                ],
                backgroundColor: ['#4caf50', '#f44336'],
            },
        ],
    };


    const lineData = {
        labels: transactions.map((t) => `${t.date} ${t.time}`),
        datasets: [
            {
                label: 'Amount',
                data: transactions.map((t) => t.type === 'deposit' ? t.amount : -t.amount),
                fill: false,
                borderColor: '#2196f3',
            },
        ],
    };

    return (
        <Layout pagename="История транзакций">
            <Container maxWidth="lg" sx={{ marginTop: 4 }}>
                <Paper elevation={6} sx={{ padding: 4, borderRadius: 3, color: '#f0f0f0' }}>
                    <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                        История транзакций
                    </Typography>
                    <Divider sx={{ marginBottom: 4, borderColor: '#424242' }} />
                    {transactions.length === 0 ? (
                        <Typography variant="h6" align="center" sx={{ color: '#b0bec5' }}>
                            Нет доступных транзакций.
                        </Typography>
                    ) : (
                        <>
                            <List>
                                {transactions.map((transaction) => (
                                    <ListItem
                                        key={transaction.id}
                                        sx={{
                                            marginY: 2,
                                            padding: 2,
                                            borderRadius: 2,
                                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
                                        }}
                                    >
                                        <ListItemAvatar>    
                                            <Avatar sx={{ bgcolor: transaction.type === 'deposit' ? '#4caf50' : '#f44336' }}>
                                                {transaction.type === 'deposit' ? <ArrowDownward /> : <ArrowUpward />}
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <Grid container justifyContent="space-between" alignItems="center">
                                                    <Grid item xs={12} sm={6}>
                                                        <Typography variant="h6" sx={{ color: '#f0f0f0', fontWeight: 'bold' }}>
                                                            {transaction.type === 'deposit' ? `+${transaction.amount} токенов` : `${transaction.amount} токенов`}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                                        <Chip
                                                            label={transaction.type === 'deposit' ? 'Пополнение' : 'Трата'}
                                                            sx={{
                                                                backgroundColor: transaction.type === 'deposit' ? '#388e3c' : '#d32f2f',
                                                                color: '#ffffff',
                                                                fontWeight: 'bold',
                                                            }}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            }
                                            secondary={
                                                <Grid container justifyContent="space-between" sx={{ marginTop: 1 }}>
                                                    <Grid item>
                                                        <Typography variant="body2" sx={{ color: '#b0bec5' }}>
                                                            {transaction.description} | ID {transaction.id}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant="body2" sx={{ color: '#b0bec5', fontStyle: 'italic' }}>
                                                            {transaction.date} в {transaction.time}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            }
                                        />
                                    </ListItem>
                                ))}
                            </List>
                            <Divider sx={{ marginY: 4, borderColor: '#424242' }} />
                            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                                Графики транзакций
                            </Typography>
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={4}>
                                    <Paper sx={{ padding: 2 }}>
                                        <Typography variant="h6" align="center">
                                            Распределение по типам
                                        </Typography>
                                        <Pie data={pieData} />
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Paper sx={{ padding: 2 }}>
                                        <Typography variant="h6" align="center">
                                            Сумма депозитов и расходов
                                        </Typography>
                                        <Bar data={barData} />
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Paper sx={{ padding: 2 }}>
                                        <Typography variant="h6" align="center">
                                            Транзакции по времени
                                        </Typography>
                                        <Line data={lineData} />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </>
                    )}
                </Paper>
            </Container>
        </Layout>
    );
};

export default TransactionHistory;
