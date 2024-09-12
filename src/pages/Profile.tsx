import React, { useState, useEffect } from 'react';
import { Box, Paper, Button, Container, TextField, Typography, Stepper, Step, StepLabel, FormControlLabel, Checkbox } from '@mui/material';
import { Link } from "react-router-dom";
import Layout from './general_components/Layout';
import AddedProducts from './Dev_Mode_Additional/AddedProducts';

const Profile: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isCardAvailable, setIsCardAvailable] = useState<boolean>(false);
    const [balance, setBalance] = useState<number>(0);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isPasswordRelevant, setIsPasswordRelevant] = useState<boolean>(true);
    const [isDeveloperMode, setIsDeveloperMode] = useState<boolean>(false); // New state for developer mode

    const steps = ['Введите электронную почту', 'Создайте логин и пароль', 'Доп. секция'];

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        const storedBalance = localStorage.getItem('balance');
        const storedCardExists = localStorage.getItem('isCardExists');

        if (storedUsername && storedIsLoggedIn === 'true') {
            setUsername(storedUsername);
            setIsLoggedIn(true);
        }

        setIsCardAvailable(storedCardExists === 'true');
        if (storedBalance) {
            setBalance(parseFloat(storedBalance));
        }
    }, []);

    const handleChangeIsLoggedIn = () => {
        if (password.length >= 7 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password)) {
            setIsPasswordRelevant(true);
            setIsLoggedIn(!isLoggedIn);
            if (!isLoggedIn) {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', username);
                localStorage.setItem('isDeveloperMode', isDeveloperMode ? 'true' : 'false');
            } else {
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('username');
                localStorage.removeItem('isDeveloperMode');
            }
        } else {
            setIsPasswordRelevant(false);
            setActiveStep(1);
        }
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        localStorage.removeItem('balance');
        localStorage.removeItem('isCardExists');
        localStorage.removeItem('isDeveloperMode');
        localStorage.removeItem('myProducts');
        setIsLoggedIn(false);
        setUsername('');
        setEmail('');

        window.location.reload();

        localStorage.clear();
    };

    const renderStepContent = (step: number) => {
        switch (step) {
            case 0:
                return (
                    <TextField
                        label="Электронная почта"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                );
            case 1:
                return (
                    <>
                        <TextField
                            label="Логин"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        {isPasswordRelevant ?
                            <TextField
                                label="Пароль"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                fullWidth
                                margin="normal"
                            /> :
                            <TextField
                                error
                                label="Пароль"
                                type="password"
                                helperText="Пароль должен содержать не менее 7 символов а так же состоять из букв и цифр."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                fullWidth
                                margin="normal"
                            />
                        }
                    </>
                );
            case 2:
                return (
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={isDeveloperMode}
                                onChange={(e) => setIsDeveloperMode(e.target.checked)}
                                color="primary"
                            />
                        }
                        label="Активировать режим разработчика"
                    />
                );
            default:
                return 'Неизвестный шаг';
        }
    };

    return (
        <Layout pagename="Мой профиль">
            {!isLoggedIn ?
                (<Container maxWidth="sm">
                    <Box sx={{ marginTop: 4 }}>
                        <Typography variant="h4" align="center">
                            Регистрация
                        </Typography>
                        <Stepper activeStep={activeStep} sx={{ marginY: 4 }}>
                            {steps.map((label, index) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <Box>
                            {activeStep === steps.length ? (
                                <Box>
                                    <Typography variant="h6" align="center" gutterBottom>
                                        Регистрация завершена!
                                    </Typography>
                                    <Typography variant="h6" align="center" color="secondary" onClick={handleChangeIsLoggedIn} gutterBottom>
                                        Добро пожаловать, {username}!
                                    </Typography>
                                </Box>
                            ) : (
                                <Box>
                                    {renderStepContent(activeStep)}
                                    <Box sx={{ justifyContent: 'space-between', marginTop: 4 }}>
                                        <Button disabled={activeStep === 0} onClick={handleBack}>
                                            Назад
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={activeStep === steps.length - 1 ? handleChangeIsLoggedIn : handleNext}
                                            disabled={
                                                (activeStep === 0 && !email) ||
                                                (activeStep === 1 && (!username || !password))
                                            }
                                        >
                                            {activeStep === steps.length - 1 ? 'Завершить' : 'Далее'}
                                        </Button>
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Container>) :
                (
                    <Container>
                        <Container maxWidth="sm">
                            {isLoggedIn ? (
                                <Paper sx={{ padding: 4, marginTop: 4 }}>
                                    <Typography variant="h4" align="center" gutterBottom>
                                        Профиль пользователя
                                    </Typography>
                                    <Box sx={{ marginY: 2 }}>
                                        <Typography variant="h6">
                                            Логин:
                                        </Typography>
                                        <Typography variant="body1">
                                            {username}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ marginY: 2 }}>
                                        <Typography variant="h6">
                                            Статус профиля:
                                        </Typography>
                                        <Typography variant="body1">
                                            {isDeveloperMode ? 'Разработчик' : 'Пользователь'}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ marginY: 2 }}>
                                        <Typography variant="h6">
                                            Баланс:
                                        </Typography>
                                        <Typography variant="body1">
                                            {
                                                !isCardAvailable ?
                                                    <React.Fragment>
                                                        <Typography variant="body1" component={Link} to="/add+new+card">Карта не привязана. ПРИВЯЗАТЬ</Typography>
                                                    </React.Fragment> :
                                                    <React.Fragment>
                                                        <Typography variant="body1">{balance} токенов</Typography>
                                                        <Typography variant="body1" component={Link} to="/deposit">Пополнить баланс</Typography>
                                                    </React.Fragment>
                                            }
                                        </Typography>
                                    </Box>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        onClick={handleLogout}
                                        sx={{ marginTop: 4 }}
                                    >
                                        Выйти
                                    </Button>
                                </Paper>
                            ) : (
                                <Paper sx={{ padding: 4, marginTop: 4 }}>
                                    <Typography variant="h5" align="center">
                                        Пожалуйста, войдите в систему.
                                    </Typography>
                                </Paper>
                            )}
                        </Container>
                    </Container>
                )}
                <hr />
                <AddedProducts />
        </Layout>
    );
};

export default Profile;
