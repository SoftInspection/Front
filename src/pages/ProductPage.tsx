import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PRODUCTS from "../external_data/Products";
import { Container, Typography as MuiTypography, Card, CardMedia, Chip, Box, CardContent, CardActions, Button, Grid, CircularProgress } from '@mui/material';
import Product from "./general_components/Product";
import Layout from './general_components/Layout';

const ProductPage: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const product = PRODUCTS.find((p: Product) => p.name === name);
    const isAvailable = product?.stock !== false;

    // To add fake comments from JSONPLACEHOLDER.TYPICOM.COM.
    const [comments, setComments] = useState<any[]>([]);
    const [isCommentsLoaded, setIsCommentsLoaded] = useState<boolean>(false);

    const [isSaved, setIsSaved] = useState<boolean>(false);

    // Load fake comments.
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => {
                setComments(data);
                setIsCommentsLoaded(true);
            })
            .catch(error => {
                console.error('Ошибка при загрузке комментариев:', error);
                setIsCommentsLoaded(false);
            });
    }, []);


    useEffect(() => {
        const savedProducts = JSON.parse(localStorage.getItem('savedProducts') || '[]');
        if (product) {
            const isProductSaved = savedProducts.some((savedProduct: Product) => savedProduct.id === product.id);
            setIsSaved(isProductSaved);
        }
    }, [product]);

    const handleAddToSaved = () => {
        const savedProducts = JSON.parse(localStorage.getItem('savedProducts') || '[]');
        if (product) {
            savedProducts.push(product);
            localStorage.setItem('savedProducts', JSON.stringify(savedProducts));
            setIsSaved(true);
            window.location.reload();
        }
    };

    const handleRemoveFromSaved = () => {
        const savedProducts = JSON.parse(localStorage.getItem('savedProducts') || '[]');
        if (product) {
            const updatedSavedProducts = savedProducts.filter((savedProduct: Product) => savedProduct.id !== product.id);
            localStorage.setItem('savedProducts', JSON.stringify(updatedSavedProducts));
            setIsSaved(false);
            window.location.reload();
        }
    };

    if (!product) {
        return (
            <Layout pagename="Потерянный товар">
                <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <MuiTypography color="error" variant="h5" gutterBottom>
                        ТОВАР НЕ НАЙДЕН ИЛИ ЕГО НЕТ В НАЛИЧИИ.
                    </MuiTypography>
                    <MuiTypography color="primary" variant="h6" gutterBottom>
                        Отправьте <Link to="/feedback">отчёт</Link> и мы обязательно проверим наличие товара.
                    </MuiTypography>
                </Container>
            </Layout>
        );
    }

    return (
        <Layout pagename={product?.name}>
            <Container maxWidth="xl" style={{ marginTop: '2rem' }}>
                <Card>
                    <CardMedia
                        component="img"
                        height="400"
                        image={product.image}
                        alt={product.name}
                    />
                    <CardContent>
                        <MuiTypography variant="h4" gutterBottom>
                            {product.name}
                        </MuiTypography>
                        <MuiTypography variant="body1" gutterBottom>
                            {product.description}
                        </MuiTypography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <MuiTypography variant="body1" color="textSecondary">
                                    Цена: <MuiTypography component="span" color="primary" variant="body1">{product.price}</MuiTypography>
                                </MuiTypography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <MuiTypography variant="body1" color="textSecondary">
                                    Категория: <MuiTypography component="span" color="primary" variant="body1">{product.category}</MuiTypography>
                                </MuiTypography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                {
                                    isAvailable ?
                                        <React.Fragment>
                                            <MuiTypography variant="body1" color="lime">
                                                В НАЛИЧИИ
                                            </MuiTypography>
                                        </React.Fragment> :
                                        <MuiTypography variant="body1" color="error">НЕТ В НАЛИЧИИ</MuiTypography>
                                }
                            </Grid>
                        </Grid>
                        <br />
                        <Grid item xs={12} sm={6}>
                            <Box display="flex" flexWrap="wrap" gap={1.5}>
                                {product.tags?.map(tag => (
                                    <Chip
                                        key={tag}
                                        label={tag}
                                        variant="outlined"
                                        color="primary"
                                        size="medium"
                                    />
                                ))}
                            </Box>
                        </Grid>
                        <hr />
                    </CardContent>
                    <hr />
                    <CardActions>
                        <Button size="large" color={isAvailable ? "primary" : "secondary"} component={Link} to={isAvailable ? "/buy" : "/"}>
                            Арендовать
                        </Button>
                        <Button size="large" color={isAvailable ? "primary" : "secondary"} onClick={isSaved ? handleRemoveFromSaved : handleAddToSaved}>
                            {isSaved ? "Удалить из сохранённых" : (isAvailable ? "Добавить в сохранённое" : "Добавить в список ожидания")}
                        </Button>
                        <Button size="small" color="primary" component={Link} to="/instruction">
                            Как арендовать?
                        </Button>
                        <hr />
                    </CardActions>
                    <CardContent>
                        <MuiTypography variant="h5" gutterBottom>
                            Комментарии
                        </MuiTypography>
                        {isCommentsLoaded ? (
                            // Getting comments from random 10-values range from jsonplaceholder's API
                            comments.slice(0, 5).map(comment => (
                                <Box key={comment.id} mb={2} p={2} border={1} borderColor="grey.300" borderRadius={4}>
                                    <MuiTypography variant="body1" gutterBottom>
                                        <strong>{comment.email}</strong>
                                    </MuiTypography>
                                    <MuiTypography variant="body2" color="textSecondary">
                                        {comment.body}
                                    </MuiTypography>
                                </Box>
                            ))
                        ) : (
                            <React.Fragment>
                                <CircularProgress />
                                <MuiTypography variant="body2" color="textSecondary">
                                    Загрузка комментариев...
                                </MuiTypography>
                            </React.Fragment>
                        )}
                    </CardContent>
                </Card>
            </Container>
        </Layout>
    );
};

export default ProductPage;
