import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, CardMedia, Typography as MuiTypography, CardActionArea } from '@mui/material';
import PRODUCTS from "../external_data/Products";
import Product from "./general_components/Product";

const truncateDescription = (description: string, maxLength: number) => {
    return description.length > maxLength ? description.slice(0, maxLength) + '...' : description;
};

interface ProductGridProps {
    categories: Set<string>;
    tags: Set<string>;
    priceRange: [number | null, number | null];
    availability: boolean | null;
}

const ProductGrid: React.FC<ProductGridProps> = ({ categories, tags, priceRange, availability }) => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const searchFor = location.state?.searchFor ?? "";

    const handleCardClick = (productName: string) => {
        navigate(`/item/${productName}`);
    };

    const filteredProducts = PRODUCTS.filter(product => {
        const inCategory = categories.size === 0 || categories.has(product.category);
        const inTags = (tags.size === 0 || product.tags?.some(tag => tags.has(tag))) ?? false;
        const inPriceRange = (priceRange[0] === null || product.price >= priceRange[0]) &&
            (priceRange[1] === null || product.price <= priceRange[1]);
        const inAvailability = availability === null || availability === product.stock;

        const matchesSearch = searchFor === "" || 
            product.name.toLowerCase().includes(searchFor.toLowerCase()) ||
            product.description.toLowerCase().includes(searchFor.toLowerCase()) ||
            product.category.toLowerCase().includes(searchFor.toLowerCase());

        return inCategory && inTags && inPriceRange && inAvailability && matchesSearch;
    });

    return (
        <Grid container spacing={4}>
            {filteredProducts.map((product: Product) => (
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
                                    {product.stock ? "В наличии" : "Не в наличии"}
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
