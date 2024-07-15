import * as React from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia, Grid, List, ListItem, ListItemText } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import Layout from './general_components/Layout';
import Developers from './Developers';
import IMG from "./general_components/creativecommonsimg.png";

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
                        Добро пожаловать в <Typography color="secondary" component={Link} to="/">Sub2Soft</Typography>, выполненный командой разработчиков SoftInspection! Мы предлагаем уникальный маркетплейс, посвящённый исключительно программному обеспечению. Наш магазин отличается высоким качеством и безопасностью: каждая программа проверяется на наличие вирусов, что гарантирует вам безопасность и надёжность.
                    </Typography>

                    <Alert severity="success">Sub2Soft позволяет использование в экспериментальных целях, включая ЛОКАЛЬНЫЕ внутренние изменения и работа с исходными материалами (после письменного согласия авторов сайта).</Alert>
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
                    <Typography variant="h4" component="h2" gutterBottom>
                        Наши продукты
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Мы предлагаем широкий ассортимент программного обеспечения, которое удовлетворяет разнообразные потребности наших клиентов. Наши продукты включают инструменты для управления проектами, разработки программного обеспечения и многое другое... <Typography color="secondary" component={Link} to="/">Взгляните сами!</Typography>
                    </Typography>
                </Box>
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
                <hr />
                <Alert severity="warning">Защита Sub2Soft является действительной.</Alert>
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Ознакомительный Характер Информации
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Вся информация, представленная на данном веб-сайте, носит исключительно ознакомительный характер. Наша цель — предоставить пользователям полезные сведения о программном обеспечении и его возможностях. Мы стремимся к тому, чтобы информация была точной и актуальной, однако не гарантируем абсолютную точность и полноту предоставленных данных.
                    </Typography>
                </Box>
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Использование Импортных Модулей, Элементов, API etc.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Импортные модули и элементы, использованные на этом сайте, были взяты на открытой основе. Мы используем компоненты и библиотеки с открытым исходным кодом, что позволяет нам разрабатывать функциональные и современные решения, следуя лучшим практикам индустрии. Мы благодарны сообществу разработчиков за их вклад и поддержку.
                    </Typography>
                </Box>
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Политика Конфиденциальности
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Сайт не обрабатывает и не хранит персональные данные пользователей. Мы уважаем вашу конфиденциальность и не собираем информацию, которая могла бы идентифицировать вас лично. Все взаимодействия с сайтом происходят в анонимном режиме, что обеспечивает безопасность и приватность наших пользователей.
                    </Typography>
                </Box>
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Авторские Права и Лицензия
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Все материалы и компоненты, использованные на сайте, защищены авторским правом и распространяются в соответствии с условиями лицензии <Typography color="secondary" component="span">Creative Commons CC BY-NC-ND</Typography>. Это означает, что вы можете свободно скачивать и делиться нашим контентом при соблюдении следующих условий:
                    </Typography>


                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity="warning">Атрибуция: Вы должны указать авторство нашего контента.</Alert>
                        <Alert severity="error">Некомерческое использование: Вы не можете использовать наш контент в коммерческих целях.</Alert>
                        <Alert severity="error">Без производных произведений: Вы не можете изменять, преобразовывать или создавать новые произведения на основе нашего контента.</Alert>
                        <Alert severity="success">Локальное использование полностью рарешено.</Alert>
                        <Alert severity="info">Отказ от Гарантий: Программное обеспечение предоставляется "как есть", без каких-либо гарантий. Авторы проекта (SoftInspection) не несут ответственности за любые возможные проблемы или убытки, возникающие в результате использования программного обеспечения.</Alert>
                        <hr />
                        <img src={IMG} alt="CREATIVE COMMONS CC BY-NC-ND" />
                        <hr />
                    </Stack>

                </Box>
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Creative Commons Attribution-NonCommercial-NoDerivs (CC BY-NC-ND)
                    </Typography>
                    <Typography variant="body1" paragraph>
                        SoftInspection&trade; Sub2Soft&trade; Все права защищены лиценией, 2024 - {new Date().getFullYear()}
                    </Typography>
                </Box>
                <hr />
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Контакты
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Если у вас есть вопросы или предложения, пожалуйста, <Typography color="secondary" component={Link} to="/feedback">свяжитесь с нами</Typography>! Мы всегда рады помочь!
                    </Typography>
                </Box>
            </Container>
        </Layout>
    );
};

export default About;
