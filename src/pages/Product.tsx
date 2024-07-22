import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from './Lobby';
import { Container, Typography as MuiTypography, Card, CardMedia, CardContent, CardActions, Button, Grid } from '@mui/material';
import Layout from './general_components/Layout';

interface ProductStruct {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    stock: number;
    image: string;
}

const Product: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const product = PRODUCTS.find((p: ProductStruct) => p.name === name);
    const isAvailable = product?.stock !== 0;

    const [isSaved, setIsSaved] = useState<boolean>(false);

    useEffect(() => {
        const savedProducts = JSON.parse(localStorage.getItem('savedProducts') || '[]');
        if (product) {
            const isProductSaved = savedProducts.some((savedProduct: ProductStruct) => savedProduct.id === product.id);
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
            const updatedSavedProducts = savedProducts.filter((savedProduct: ProductStruct) => savedProduct.id !== product.id);
            localStorage.setItem('savedProducts', JSON.stringify(updatedSavedProducts));
            setIsSaved(false);
            alert('Товар удалён из сохранённых!');
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
                                            <MuiTypography variant="body1" color="textSecondary">
                                                В наличии: <MuiTypography component="span" color="primary" variant="body1">{product.stock}</MuiTypography>
                                            </MuiTypography>
                                        </React.Fragment> :
                                        <MuiTypography variant="body1" color="error">НЕТ В НАЛИЧИИ</MuiTypography>
                                }
                            </Grid>
                        </Grid>
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
                </Card>
            </Container>
        </Layout>
    );
};

export default Product;
