import React from 'react';
import { Container, Typography as MuiTypography, Card, CardMedia, CardContent, CardActions, Button, Grid } from '@mui/material';
import Layout from './general_components/Layout';
import { Product } from './Lobby';

const Saved: React.FC = () => {
    const savedProducts: Product[] = JSON.parse(localStorage.getItem('savedProducts') || '[]');

    const handleRemoveFromSaved = (id: number) => {
        const updatedProducts = savedProducts.filter(product => product.id !== id);
        localStorage.setItem('savedProducts', JSON.stringify(updatedProducts));
        window.location.reload();
    };

    return (
        <Layout>
            <Container maxWidth="xl" style={{ marginTop: '2rem' }}>
                <MuiTypography variant="h4" gutterBottom>
                    Сохранённые товары
                </MuiTypography>
                <Grid container spacing={4}>
                    {savedProducts.length > 0 ? savedProducts.map(product => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={product.image}
                                    alt={product.name}
                                />
                                <CardContent>
                                    <MuiTypography variant="h5" gutterBottom>
                                        {product.name}
                                    </MuiTypography>
                                    <MuiTypography variant="body2" color="textSecondary" gutterBottom>
                                        {product.description}
                                    </MuiTypography>
                                    <MuiTypography variant="body2" color="textSecondary">
                                        Цена: {product.price}
                                    </MuiTypography>
                                    <MuiTypography variant="body2" color="textSecondary">
                                        Категория: {product.category}
                                    </MuiTypography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" onClick={() => handleRemoveFromSaved(product.id)}>
                                        Удалить из сохранённого
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )) : (
                        <MuiTypography variant="body1" color="textSecondary" style={{ margin: '2rem 0' }}>
                            Сохранённых товаров нет.
                        </MuiTypography>
                    )}
                </Grid>
            </Container>
        </Layout>
    );
};

export default Saved;
