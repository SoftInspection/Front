import * as React from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia, Grid, List, ListItem, ListItemText } from '@mui/material';
import { Link } from "react-router-dom";
import Layout from './general_components/Layout';
import Developers from './Developers';

const About: React.FC = () => {
    return (
        <Layout>
            <Container maxWidth="md">
                <Box sx={{ my: 4 }}>
                    <Typography variant="h1" component="h1" gutterBottom>
                        Sub2Soft
                    </Typography>
                    <hr />
                    <Typography variant="h2" component="h1" gutterBottom>
                        О нас
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Добро пожаловать в <Typography color="secondary" component={Link} to="/">Sub2Soft!</Typography> Мы предлагаем уникальный маркетплейс, посвящённый исключительно программному обеспечению. Наш магазин отличается высоким качеством и безопасностью: каждая программа проверяется на наличие вирусов, что гарантирует вам безопасность и надёжность.
                    </Typography>
                </Box>
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Наша миссия, наши преимущества
                    </Typography>
                    <List component="nav">
                        <ListItem>
                            <ListItemText primary="Гарантия Качества: Мы тщательно проверяем каждую программу, чтобы вы получали только проверенный софт, а авторы обещают высокое качество продаваемых продуктов." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Безопасность: Все программы проходят проверку антивирусами, искусственным интеллектом и модераторами, чтобы вы могли быть уверены в их безопасности." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Удобная Подписка: Пополните баланс токенов в личном кабинете, выберите нужный софт и используйте его, просто следуя простой инструкции для верификации покупок. Ваша подписка актуальна ровно до тех пор, пока не истечёт её срок, и вы можете быть уверены, что получаете доступ ко всем возможностям, предоставленным авторами продуктов." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Платформа для Продаж: Размещайте свои программы в Sub2Soft, получайте поток клиентов и зарабатывайте на сдаче уже существующего ПО в аренду или своих разработках." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Удобное Управление: Вы можете добавлять, редактировать и удалять свои продукты. Каждая программа должна содержать инструкции по установке, описание и цену." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Модерация: Мы - команда разработчиков и модераторов, следим за качеством представленных программ, проверяем и одобряем каждый продукт, а также можем удалять их при необходимости." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Категоризация: Создаём, редактируем и удаляем категории программ, обеспечивая их удобную сортировку и доступность. При том, авторам полагается выбирать категорию товара при его публикации." />
                        </ListItem>
                    </List>
                </Box>
                <Typography variant="h4" component="h2" gutterBottom>
                    Наш приоритет - ...
                </Typography>
                <Typography variant="body1" paragraph>
                    ... - это минимализм и удобство пользователя. Мы стремимся к тому, чтобы интерфейс был максимально понятным и расширяемым. Если возникают какие-либо вопросы или недоработки, мы временно решаем их простыми способами и возвращаемся к ним позже для окончательной доработки.
                </Typography>
                <hr />
                <Box sx={{ my: 4 }}>
                    <Box sx={{ my: 4 }}>
                        <Typography variant="h4" component="h2" gutterBottom>
                            Наша команда
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Мы с гордостью представляем нашу команду начинающих разработчиков, которые с энтузиазмом работают над этим проектом. Каждый из нас вносит свой уникальный вклад в создание и совершенствование наших продуктов. Встречайте наших разработчиков...
                        </Typography>
                        <Developers />
                    </Box>
                </Box>
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Наши продукты
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Мы предлагаем широкий ассортимент программного обеспечения, которое удовлетворяет разнообразные потребности наших клиентов. Наши продукты включают инструменты для управления проектами, разработки программного обеспечения и многое другое... <Typography color="secondary" component={Link} to="/">Взгляните сами!</Typography>
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image="https://via.placeholder.com/300x150"
                                    alt="Product 1"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Продукт 1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Описание продукта 1. Этот продукт помогает вам в управлении проектами и повышении эффективности работы.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image="https://via.placeholder.com/300x150"
                                    alt="Product 2"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Продукт 2
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Описание продукта 2. Этот продукт предоставляет мощные инструменты для разработки программного обеспечения.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Контакты
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Если у вас есть вопросы или предложения, пожалуйста, свяжитесь с нами. Мы всегда рады помочь!
                    </Typography>
                </Box>
            </Container>
        </Layout>
    );
};

export default About;
