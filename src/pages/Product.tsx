import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from './Lobby';
import { Container, Typography as MuiTypography } from '@mui/material';
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

    if (!product) {
        return (
            <React.Fragment>
                <Layout>
                    <MuiTypography color="error" variant="h5">ТОВАР НЕ НАЙДЕН ИЛИ ЕГО НЕТ В НАЛИЧИИ.</MuiTypography>
                    <MuiTypography color="primary" variant="h6">Отправьте <Link to="/feedback">отчёт</Link> и мы обязательно проверим наличие товара.</MuiTypography>
                </Layout >
            </React.Fragment>
        );
    }

    return (
        <Container>
            <MuiTypography variant="h4" gutterBottom>
                {product.name}
            </MuiTypography>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
            <MuiTypography variant="body1" gutterBottom>
                {product.description}
            </MuiTypography>
            <MuiTypography variant="body1" color="text.primary">
                Цена: ${product.price}
            </MuiTypography>
            <MuiTypography variant="body1" color="text.secondary">
                Категория: {product.category}
            </MuiTypography>
            <MuiTypography variant="body1" color="text.secondary">
                В наличии: {product.stock}
            </MuiTypography>
        </Container>
    );
};

export default Product;
