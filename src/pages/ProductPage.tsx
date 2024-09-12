import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PRODUCTS from "../external_data/Products";
import { Container, Typography as MuiTypography, Card, CardMedia, Chip, Box, CardActions, Grid, CardContent, Button, CircularProgress, Tabs, Tab } from '@mui/material';
import Product from "./general_components/Product";
import Layout from './general_components/Layout';

const ProductPage: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const product = PRODUCTS.find((p: Product) => p.name === name);
    const isAvailable = product?.stock !== false;

    // To make a list of related products.
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

    // To add fake comments from JSONPLACEHOLDER.TYPICOM.COM.
    const [comments, setComments] = useState<any[]>([]);
    const [isCommentsLoaded, setIsCommentsLoaded] = useState<boolean>(false);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [tabIndex, setTabIndex] = useState(0);

    const navigate = useNavigate();

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

    // Removing from saved list in localstorage.
    const handleRemoveFromSaved = () => {
        const savedProducts = JSON.parse(localStorage.getItem('savedProducts') || '[]');
        if (product) {
            const updatedSavedProducts = savedProducts.filter((savedProduct: Product) => savedProduct.id !== product.id);
            localStorage.setItem('savedProducts', JSON.stringify(updatedSavedProducts));
            setIsSaved(false);
            window.location.reload();
        }
    };

    // Change tab.
    const handleTabChange = (event: React.ChangeEvent<{}>, newIndex: number) => {
        setTabIndex(newIndex);
    };

    // Switching to chosen related product.
    const handleGoToRelatedProduct = (productName: string) => {
        // Scrolling up to top.
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

        // Timeout to demonstrate that product actually changes. 
        setTimeout(() => {
            navigate(`/item/${productName}`);
        }, 500);
    };

    useEffect(() => {
        if (product) {
            const related = PRODUCTS.filter((p: Product) =>
                p.name !== product.name && (
                    p.category === product.category ||
                    p.tags?.some(tag => product.tags?.includes(tag))
                )
            );
            setRelatedProducts(related);
        }
    }, [product]);

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
            <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
                <Card elevation={3} style={{ display: 'flex', borderRadius: '16px', overflow: 'hidden' }}>
                    <Box style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                            component="img"
                            height="500"
                            image={product.image}
                            alt={product.name}
                            style={{ flex: 1, objectFit: 'cover' }}
                        />
                    </Box>
                    <Box style={{ flex: 1.5, padding: '2rem' }}>
                        <MuiTypography variant="h3" gutterBottom style={{ fontWeight: 'bold' }}>
                            {product.name}
                        </MuiTypography>
                        <MuiTypography variant="h5" color={product.price ? "textSecondary" : "lime"} gutterBottom>
                            {product.price === 0 ? 'БЕСПЛАТНО' : product.price}
                        </MuiTypography>
                        <MuiTypography variant="body1" gutterBottom>
                            {product.description}
                        </MuiTypography>
                        <Box mt={2} mb={2}>
                            <MuiTypography variant="body2" color="textSecondary">
                                Категория: <MuiTypography component="span" color="primary" variant="body2">{product.category}</MuiTypography>
                            </MuiTypography>
                            <MuiTypography variant="body2" color={isAvailable ? "success.main" : "error.main"}>
                                {isAvailable ? "В НАЛИЧИИ" : "НЕТ В НАЛИЧИИ"}
                            </MuiTypography>
                        </Box>
                        <Box mb={2} display="flex" flexWrap="wrap" gap={1.5}>
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
                        <Box mt={4} display="flex" gap={2}>
                            <Button variant="contained" size="large" color="primary" component={Link} disabled={!product.stock} to={`/buy/${product?.name}`}>
                                Арендовать
                            </Button>
                            <Button variant="outlined" size="large" color="secondary" onClick={isSaved ? handleRemoveFromSaved : handleAddToSaved}>
                                {isSaved ? "Удалить из сохранённых" : (isAvailable ? "Добавить в сохранённое" : "Добавить в список ожидания")}
                            </Button>
                        </Box>
                    </Box>
                </Card>

                <Box mt={4}>
                    <Tabs value={tabIndex} onChange={handleTabChange} centered>
                        <Tab label="Описание" />
                        <Tab label="Отзывы" />
                        <Tab label="Похожие товары" />
                    </Tabs>
                    <Box mt={2}>
                        {tabIndex === 0 && (
                            <CardContent>
                                <MuiTypography variant="body1" gutterBottom>
                                    {product.description}
                                </MuiTypography>

                                <Box mt={2}>
                                    <MuiTypography variant="h6" gutterBottom>
                                        Теги:
                                    </MuiTypography>
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
                                </Box>
                            </CardContent>
                        )}
                        {tabIndex === 1 && (
                            <CardContent>
                                <MuiTypography variant="h5" gutterBottom>
                                    Комментарии
                                </MuiTypography>
                                {isCommentsLoaded ? (
                                    comments.slice(0, 5).map(comment => (
                                        <Box key={comment.id} mb={2} p={2} border={1} borderRadius={4} borderColor="divider">
                                            <MuiTypography variant="body1" gutterBottom>
                                                <strong style={{ color: "#ff80ab" }}>{comment.email}</strong>
                                            </MuiTypography>
                                            <MuiTypography variant="body2" color="textPrimary">
                                                {comment.body}
                                            </MuiTypography>
                                        </Box>
                                    ))
                                ) : (
                                    <Box display="flex" alignItems="center" flexDirection="column" p={2}>
                                        <CircularProgress />
                                        <MuiTypography variant="body2" color="textSecondary">
                                            Загрузка комментариев...
                                        </MuiTypography>
                                    </Box>
                                )}
                            </CardContent>
                        )}
                        {tabIndex === 2 && (
                            <CardContent>
                                <MuiTypography variant="h5" gutterBottom>
                                    Похожие товары
                                </MuiTypography>
                                <Grid container spacing={2}>
                                    {relatedProducts.length > 0 ? (
                                        relatedProducts.map((relatedProduct) => (
                                            <Grid item xs={12} sm={6} md={4} key={relatedProduct.id}>
                                                <Card elevation={3}>
                                                    <CardMedia
                                                        component="img"
                                                        height="200"
                                                        image={relatedProduct.image}
                                                        alt={relatedProduct.name}
                                                    />
                                                    <CardContent>
                                                        <MuiTypography variant="h6" gutterBottom>
                                                            {relatedProduct.name}
                                                        </MuiTypography>
                                                        <MuiTypography variant="body2" color="textSecondary">
                                                            {relatedProduct.price} ₽
                                                        </MuiTypography>
                                                        <Box mt={1} display="flex" flexWrap="wrap" gap={0.5}>
                                                            {relatedProduct.tags?.map((tag) => (
                                                                <Chip
                                                                    key={tag}
                                                                    label={tag}
                                                                    variant="outlined"
                                                                    color="primary"
                                                                    size="small"
                                                                />
                                                            ))}
                                                        </Box>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Button
                                                            size="small"
                                                            color="primary"
                                                            onClick={() => handleGoToRelatedProduct(relatedProduct.name)}
                                                        >
                                                            Подробнее
                                                        </Button>
                                                    </CardActions>
                                                </Card>
                                            </Grid>
                                        ))
                                    ) : (
                                        <MuiTypography variant="body2" color="textSecondary">
                                            Нет похожих товаров.
                                        </MuiTypography>
                                    )}
                                </Grid>
                            </CardContent>
                        )}
                    </Box>
                </Box>
            </Container>
        </Layout>
    );
};

export default ProductPage;
