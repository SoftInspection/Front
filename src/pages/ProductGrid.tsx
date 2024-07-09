import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, CardMedia, Typography as MuiTypography, CardActionArea } from '@mui/material';
import { PRODUCTS } from './Lobby';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    stock: number;
    image: string;
}

const truncateDescription = (description: string, maxLength: number) => {
    return description.length > maxLength ? description.slice(0, maxLength) + '...' : description;
};

const ProductGrid: React.FC = () => {
    const navigate = useNavigate();

    const handleCardClick = (productName: string) => {
        navigate(`/item/${productName}`);
    };

    return (
        <Grid container spacing={4}>
            {PRODUCTS.map((product: Product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <CardActionArea onClick={() => handleCardClick(product.name)}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={product.image}
                                alt={product.name}
                            />
                            <CardContent>
                                <MuiTypography gutterBottom variant="h5" component="div">
                                    {product.name}
                                </MuiTypography>
                                <MuiTypography variant="body2" color="text.secondary">
                                    {truncateDescription(product.description, 20)}
                                </MuiTypography>
                                <MuiTypography variant="body2" color="text.primary">
                                    Цена: ${product.price}
                                </MuiTypography>
                                <MuiTypography variant="body2" color="text.secondary">
                                    Категория: {product.category}
                                </MuiTypography>
                                <MuiTypography variant="body2" color="text.secondary">
                                    В наличии: {product.stock}
                                </MuiTypography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductGrid;
