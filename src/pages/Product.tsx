import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from './Lobby';
import { Container, Typography as MuiTypography, Card, CardMedia, CardContent, CardActions, Button, Grid } from '@mui/material';
// import Card from '@mui/joy/Card';
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

    if (!product) {
        return (
            <Layout>
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
        <Layout>
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
                                <Grid item xs={12} sm={6}>
                                    <MuiTypography variant="body1" color="textSecondary">
                                        Цена: <MuiTypography component="span" color="primary" variant="body1">{product.price}</MuiTypography>
                                    </MuiTypography>
                                </Grid>

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Grid item xs={12} sm={6}>
                                    <MuiTypography variant="body1" color="textSecondary">
                                        Категория: <MuiTypography component="span" color="primary" variant="body1">{product.category}</MuiTypography>
                                    </MuiTypography>
                                </Grid>

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
                        <Button size="large" color={isAvailable ? "primary" : "secondary"} component={Link} to={isAvailable ? "/buy" : "/feedback"}>
                            {isAvailable ? "Добавить в сохранённое" : "Добавить в список ожидания"}
                        </Button>
                        <Button size="small" color="primary" component={Link} to="/buy">
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
