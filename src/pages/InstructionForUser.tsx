import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Container from "@mui/material/Container";
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Layout from './general_components/Layout';
import { Card, CardContent, CardMedia, Grid } from '@mui/material';

const stepsForInstall = ['Выберите софт', 'Пополните токены', 'Купите подписку', 'Получите ключ', 'Воспользуйтесь ботом', 'Используйте ключ', 'Пользуйтесь'];

const instructionsForInstall = [
    (
        <React.Fragment>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardMedia
                        component="img"
                        height="150"
                        alt={"ВЫБОР СОФТА"}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Выберите софт
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            В первую очередь, выберите интересующий Вас продукт, проверьте его наличие, цену и описание.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    ),
    (
        <React.Fragment>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardMedia
                        component="img"
                        height="150"
                        alt={"ПОПОЛНИТЕ ТОКЕНЫ"}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            ПОПОЛНИТЕ ТОКЕНЫ
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Токены - это валюта Sub2Soft. Чтобы получить токены, Вы обязаны быть авторизованными на Sub2Soft. Войдите в свой профиль и пополните БАЛАНС ТОКЕНОВ на личном кабинете.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    ),
    (
        <React.Fragment>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardMedia
                        component="img"
                        height="150"
                        alt={"КУПИТЕ ПОДПИСКУ"}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Купите подписку
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Оформите подписку на выбранный софт.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    ),
    (
        <React.Fragment>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardMedia
                        component="img"
                        height="150"
                        alt={"ПОЛУЧИТЕ КЛЮЧ"}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Получите ключ
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            После покупки подписки, получите ключ для активации софта.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    ),
    (
        <React.Fragment>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardMedia
                        component="img"
                        height="150"
                        alt={"ВОСПОЛЬЗУЙТЕСЬ БОТОМ"}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            <Typography variant="body1" color="textSecondary">
                                <Typography variant="body1" color="textSecondary">
                                    {/* //TODO: Ссылка на БОТ. */}
                                    Воспользуйтесь нашим{' '}
                                    <Link component="a" color="primary" variant="body1" href="https://google.com" target="_blank" rel="noopener">
                                        БОТОМ
                                    </Link>
                                    , чтобы активировать купленный ключ.
                                </Typography>
                            </Typography>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    ),
    (
        <React.Fragment>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardMedia
                        component="img"
                        height="150"
                        alt={"ИСПОЛЬЗУЙТЕ КЛЮЧ"}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Используйте ключ
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Активируйте софт с помощью полученного ключа.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    ),
    (
        <React.Fragment>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardMedia
                        component="img"
                        height="150"
                        alt={"ПОЛЬЗУЙТЕСЬ"}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Пользуйтесь
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Наслаждайтесь использованием приобретенного софта.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    )
];

interface Developer {
    name: string;
    description: string;
    imageUrl: string;
}

const developers: Developer[] = [
    {
        name: 'Dilemma Fixer',
        description: 'Ведущий разработчик backend.',
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        name: 'Suchhzz',
        description: 'Разработчик backend.',
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        name: 'Ejtolf S. Dargqvist',
        description: 'Ведущий разработчик frontend.',
        imageUrl: 'https://via.placeholder.com/150',
    }
];

const InstructionForUser: React.FC = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());

    const isStepOptional = (step: number) => {
        return step === 1;
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Layout>
            <Box sx={{ width: '100%' }}>
                <Typography variant="h4" gutterBottom>
                    Как купить подписку?
                </Typography>
                <hr />
                <Stepper activeStep={activeStep}>
                    {stepsForInstall.map((label, index) => {
                        const stepProps: { completed?: boolean } = {};
                        const labelProps: {
                            optional?: React.ReactNode;
                        } = {};
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === stepsForInstall.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            Поздравляем с покупкой софта! Спасибо, что используете Sub2Soft.
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Сбросить</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Container maxWidth="md" style={{ marginTop: '2rem' }}>
                            {instructionsForInstall[activeStep]}
                        </Container>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Назад
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleNext}>
                                {activeStep === stepsForInstall.length - 1 ? 'Закончить' : 'Далее'}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </Box>

            <Typography variant="h4" gutterBottom>
                Как опубликовать свой продукт?
            </Typography>
            <hr />
            {/* //! ------------------------------------------------------- */}
            <Box sx={{ flexGrow: 1, padding: 3 }}>
                <Typography variant="h4" gutterBottom>
                    Разработчики Sub2Soft
                </Typography>
                <Grid container spacing={3}>
                    {developers.map((developer, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={developer.imageUrl}
                                    alt={developer.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {developer.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {developer.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Layout>
    );
}

export default InstructionForUser;
