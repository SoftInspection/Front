import React from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Card, CardContent, CardMedia, Typography as MuiTypography, Box, Divider, Chip } from '@mui/material';
import Layout from './general_components/Layout';
import Product from './general_components/Product';

const CompareProducts: React.FC = () => {
    const location = useLocation();
    const state = location.state as { products: Product[] };

    const [product1, product2] = state?.products || [];

    if (!product1 || !product2) {
        return (
            <Layout pagename="Сравнение">
                <MuiTypography variant="h6" align="center" color="error">
                    Не удалось найти товары для сравнения.
                </MuiTypography>
            </Layout>
        );
    }

    const isCheaper = product1.price < product2.price ? product1.name : product2.name;

    const getCommonTags = (tags1: string[] = [], tags2: string[] = []) => {
        return tags1.filter(tag => tags2.includes(tag));
    };

    const renderProductDetails = (product: Product) => (
        <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
            <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'cover', borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
            />
            <CardContent>
                <MuiTypography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    {product.name}
                </MuiTypography>
                <MuiTypography variant="h6" color="primary" sx={{ mb: 1 }}>
                    ${product.price}
                </MuiTypography>
                <Divider sx={{ my: 1 }} />
                <MuiTypography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {product.description}
                </MuiTypography>
                <MuiTypography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Категория: <MuiTypography component="span" fontWeight="bold">{product.category}</MuiTypography>
                </MuiTypography>
                <MuiTypography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Теги:
                </MuiTypography>
                <Box sx={{ mb: 1 }}>
                    {product.tags?.length ? (
                        product.tags.map((tag, index) => (
                            <Chip key={index} label={tag} sx={{ mr: 1, mb: 1 }} />
                        ))
                    ) : (
                        <MuiTypography component="span" color="text.secondary">Нет</MuiTypography>
                    )}
                </Box>
                <MuiTypography variant="body2" color={product.stock ? 'success.main' : 'error.main'}>
                    {product.stock ? "В наличии" : "Не в наличии"}
                </MuiTypography>
            </CardContent>
        </Card>
    );

    const renderComparison = () => {
        const commonTags = getCommonTags(product1.tags, product2.tags);

        return (
            <Box sx={{ mt: 4 }}>
                <MuiTypography variant="h5" gutterBottom align="center">
                    Характеристики сравнения
                </MuiTypography>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Chip
                            label={`Товар дешевле: ${isCheaper}`}
                            color="primary"
                            variant="outlined"
                            sx={{ width: '100%', mb: 1 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Chip
                            label={`Категория совпадает: ${product1.category === product2.category ? 'Да' : 'Нет'}`}
                            color={product1.category === product2.category ? 'success' : 'error'}
                            variant="outlined"
                            sx={{ width: '100%', mb: 1 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Chip
                            label={`Наличие товара 1: ${product1.stock ? 'В наличии' : 'Не в наличии'}`}
                            color={product1.stock ? 'success' : 'error'}
                            variant="outlined"
                            sx={{ width: '100%', mb: 1 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Chip
                            label={`Наличие товара 2: ${product2.stock ? 'В наличии' : 'Не в наличии'}`}
                            color={product2.stock ? 'success' : 'error'}
                            variant="outlined"
                            sx={{ width: '100%', mb: 1 }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MuiTypography variant="h6" align="center" sx={{ mt: 2 }}>
                            Общие теги:
                        </MuiTypography>
                        {commonTags.length > 0 ? (
                            <Box sx={{ textAlign: 'center', mt: 1 }}>
                                {commonTags.map((tag, index) => (
                                    <Chip key={index} label={tag} sx={{ mr: 1, mb: 1 }} />
                                ))}
                            </Box>
                        ) : (
                            <MuiTypography align="center" color="textSecondary">
                                Нет общих тегов
                            </MuiTypography>
                        )}
                    </Grid>
                </Grid>
            </Box>
        );
    };

    return (
        <Layout pagename="Сравнение">
            <MuiTypography variant="h4" gutterBottom align="center" color="textPrimary" sx={{ mb: 4 }}>
                Сравнение товаров
            </MuiTypography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={5}>
                    {renderProductDetails(product1)}
                </Grid>
                <Grid item xs={12} md={5}>
                    {renderProductDetails(product2)}
                </Grid>
            </Grid>
            {renderComparison()}
        </Layout>
    );
};

export default CompareProducts;
