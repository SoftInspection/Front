import React, { useState } from "react";
import { Container, Typography, TextField, MenuItem, Button, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import Layout from "./general_components/Layout";
import { CSSTransition } from 'react-transition-group';
import './general_components/Styles/Feedback.css';

const FeedbackPage: React.FC = () => {
    const [reason, setReason] = useState<string>('');
    const [comments, setComments] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [isSent, setIsSent] = useState<boolean>(false);

    const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReason(event.target.value);
    };

    const handleCommentsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setComments(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setIsSent(!isSent);
    };

    return (
        <Layout pagename="Обратная связь">
            <Container maxWidth="md" style={{ marginTop: '2rem' }}>
                <CSSTransition
                    in={isSent}
                    timeout={300}
                    classNames="fade"
                    unmountOnExit
                >
                    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 8 }}>
                        <Typography variant="h1" color="primary" component="div" gutterBottom>
                            ОТЧЁТ ОТПРАВЛЕН!
                        </Typography>
                        <Typography variant="h5" color="secondary" gutterBottom>
                            Спасибо, что помогаете нам в развитии.
                        </Typography>

                        <hr />

                        <Button variant="contained" color="primary" component={Link} to="/">
                            Вернуться на главную
                        </Button>
                    </Container>
                </CSSTransition>

                <CSSTransition
                    in={!isSent}
                    timeout={300}
                    classNames="fade"
                    unmountOnExit
                >
                    <Paper style={{ padding: '2rem' }}>
                        <Typography variant="h4" gutterBottom>
                            Форма обратной связи
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Пожалуйста, заполните форму ниже, чтобы отправить нам ваш запрос.
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        select
                                        fullWidth
                                        label="Причина обращения"
                                        value={reason}
                                        onChange={handleReasonChange}
                                        variant="outlined"
                                        required
                                    >
                                        <MenuItem value="Отсутствие товара">Отсутствие товара</MenuItem>
                                        <MenuItem value="Жалоба">Жалоба</MenuItem>
                                        <MenuItem value="Отзыв">Отзыв</MenuItem>
                                        <MenuItem value="Пожелания">Пожелания</MenuItem>
                                        <MenuItem value="Другое">Другое</MenuItem>
                                    </TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Комментарии"
                                        multiline
                                        rows={4}
                                        value={comments}
                                        onChange={handleCommentsChange}
                                        variant="outlined"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                        fullWidth
                                        label="Электронная почта"
                                        multiline
                                        rows={1}
                                        value={email}
                                        onChange={handleEmailChange}
                                        variant="outlined"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary" fullWidth>
                                        Отправить
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </CSSTransition>
            </Container>
        </Layout>
    );
};

export default FeedbackPage;
