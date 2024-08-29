import React from 'react';
import { Container, Typography as MuiTypography, Card, Box, CardMedia, CardActionArea, CardContent, CardActions, Button, Grid } from '@mui/material';
import Layout from './general_components/Layout';
import { useNavigate } from "react-router-dom";
import Product from './general_components/Product';
import { useSavedProducts } from './context/SavedProductsContext';

const truncateDescription = (description: string, maxLength: number) => {
    return description.length > maxLength ? description.slice(0, maxLength) + '...' : description;
};

const Saved: React.FC = () => {
    const savedProducts: Product[] = JSON.parse(localStorage.getItem('savedProducts') || '[]'); // List of products user saved.
    const boughtProducts: Product[] = JSON.parse(localStorage.getItem('boughtProducts') || '[]'); // List of products user bought in stock.

    const { updateSavedCount } = useSavedProducts(); // To show number of saved products above the shopping cart icon. :)

    const navigate = useNavigate();

    const handleCardClick = (productName: string) => {
        navigate(`/item/${productName}`);
    }

    const handleRemoveFromSaved = (id: number) => {
        const updatedProducts = savedProducts.filter(product => product.id !== id);
        localStorage.setItem('savedProducts', JSON.stringify(updatedProducts));
        updateSavedCount();
    };

    return (
        <Layout pagename="Сохранённое">
            <Container maxWidth="xl" sx={{ mt: 4 }}>
                <MuiTypography variant="h4" gutterBottom>
                    Сохранённые товары ({savedProducts.length})
                </MuiTypography>
                <Grid container spacing={4}>
                    {savedProducts.length > 0 ? (
                        savedProducts.map(product => (
                            <Grid item xs={12} sm={6} md={4} key={product.id}>
                                <Card sx={{ display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
                                    <CardActionArea onClick={() => handleCardClick(product.name)}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={product.image}
                                            alt={product.name}
                                            sx={{ objectFit: 'cover' }}
                                        />
                                        <CardContent>
                                            <MuiTypography gutterBottom variant="h5">
                                                {product.name}
                                            </MuiTypography>
                                            <MuiTypography variant="body2" color="text.secondary">
                                                {truncateDescription(product.description, 60)}
                                            </MuiTypography>
                                            <MuiTypography variant="body2" color="text.primary">
                                                Цена: ${product.price}
                                            </MuiTypography>
                                            <MuiTypography variant="body2" color="text.secondary">
                                                Категория: {product.category}
                                            </MuiTypography>
                                            <MuiTypography variant="body2" color="text.secondary">
                                                {product.stock ? "В наличии" : "Не в наличии"}
                                            </MuiTypography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary" onClick={() => handleRemoveFromSaved(product.id)}>
                                                Удалить из сохранённого
                                            </Button>
                                        </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))
                    ) : (
                        <MuiTypography variant="body1" color="text.secondary" sx={{ mt: 4 }}>
                            Сохранённых товаров нет.
                        </MuiTypography>
                    )}
                </Grid>
            </Container>

            <hr />

            <Container maxWidth="xl" sx={{ mt: 4 }}>
                <MuiTypography variant="h4" gutterBottom>
                    Приобретённые товары ({boughtProducts.length})
                </MuiTypography>
                <Grid container spacing={2}>
                    {boughtProducts.length ? (
                        boughtProducts.map(({ id, image, name, price }) => (
                            <Grid item xs={12} sm={6} md={4} key={id}>
                                <Card sx={{ display: 'flex', alignItems: 'center', padding: 1, boxShadow: 3 }}>
                                    <CardMedia
                                        component="img"
                                        image={image}
                                        alt={name}
                                        sx={{ width: 100, height: 100, objectFit: 'cover', mr: 2 }}
                                    />
                                    <Box sx={{ flexGrow: 1 }}>
                                        <MuiTypography variant="subtitle1">{name}</MuiTypography>
                                    </Box>
                                    <MuiTypography variant="h6" sx={{ ml: 2 }}>
                                        ${price}
                                    </MuiTypography>
                                </Card>
                            </Grid>
                        ))
                    ) : (
                        <MuiTypography variant="body1" color="text.secondary" sx={{ mt: 4 }}>
                            Приобретённых товаров нет.
                        </MuiTypography>
                    )}
                </Grid>
            </Container>
        </Layout>
    );
};

export default Saved;
