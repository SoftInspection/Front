import React, { useState, useEffect } from 'react';
import { Box, Paper, Button, Container, TextField, Typography, Stepper, Step, StepLabel } from '@mui/material';
import Layout from './general_components/Layout';

const Profile: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [email, setEmail] = useState('');
    // const [verificationCode, setVerificationCode] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const steps = ['Введите электронную почту', 'Создайте логин и пароль'];

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');

        if (storedUsername && storedIsLoggedIn === 'true') {
            setUsername(storedUsername);
            setIsLoggedIn(true);
        }
    }, []);

    const handleChangeIsLoggedIn = () => {
        setIsLoggedIn(!isLoggedIn);
        if (!isLoggedIn) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);
        } else {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
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
        setIsLoggedIn(false);
        setUsername('');
        setEmail('');
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
            // case 1:
            //     return (
            //         <TextField
            //             label="Код верификации"
            //             value={verificationCode}
            //             onChange={(e) => setVerificationCode(e.target.value)}
            //             fullWidth
            //             margin="normal"
            //         />
            //     );
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
                        <TextField
                            label="Пароль"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                    </>
                );
            default:
                return 'Неизвестный шаг';
        }
    };

    return (
        <Layout>
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
                                                // (activeStep === 1 && !verificationCode) ||
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
                        <Layout>
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
                                                Пользователь
                                            </Typography>
                                        </Box>
                                        <Box sx={{ marginY: 2 }}>
                                            <Typography variant="h6">
                                                Баланс:
                                            </Typography>
                                            <Typography variant="body1">
                                                0 токенов
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
                        </Layout>
                    </Container>
                )}
        </Layout>
    );
};

export default Profile;
