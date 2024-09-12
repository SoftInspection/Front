import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, CardMedia, Typography as MuiTypography, CardActionArea, Snackbar, Button, Tooltip } from '@mui/material';
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

    const [products, setProducts] = useState<Product[]>(PRODUCTS);
    const [compareProducts, setCompareProducts] = useState<Product[]>([]);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleCardClick = (productName: string) => {
        navigate(`/item/${productName}`);
    };

    const handleRightClick = (event: React.MouseEvent, product: Product) => {
        event.preventDefault();
        if (compareProducts.length < 2 && !compareProducts.some(p => p.id === product.id)) {
            setCompareProducts(prev => [...prev, product]);
            setSnackbarOpen(true);
        }
    };

    const handleResetComparison = () => {
        setCompareProducts([]);
        setSnackbarOpen(false);
    };

    const handleCompare = () => {
        if (compareProducts.length === 2) {
            navigate('/compare', { state: { products: compareProducts } });
        }
    };

    const filteredProducts = products.filter(product => {
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
        <>
            <Grid container spacing={4}>
                {filteredProducts.map((product: Product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Tooltip
                            title={`Нажмите ЛКМ, чтобы перейти к данным о ${product.name}. \n Нажмите ПКМ, чтобы добавить товар в сравнение. Нажмите на КМ (колёсико мыши), чтобы непосредственно перейти к покупке.`}
                            placement="top-start"
                            arrow
                        >
                            <span>
                                <CardActionArea
                                    onClick={() => handleCardClick(product.name)}
                                    onContextMenu={(event) => handleRightClick(event, product)}
                                    onMouseDown={(event) => {
                                        if (event.button === 1) {
                                            navigate(`/buy/${product.name}`)
                                        }
                                    }}
                                >
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
                                            <MuiTypography variant="body2" color={(product.price === 0) ? "success.main" : "text.primary"}>
                                                {product.price ? `Цена: ${product.price}` : `Бесплатно`}
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
                            </span>
                        </Tooltip>
                    </Grid>
                ))}
            </Grid>

            <Snackbar
                open={snackbarOpen && compareProducts.length > 0}
                onClose={() => setSnackbarOpen(false)}
                message={`Товар${compareProducts.length > 1 ? 'а' : ''} добавлен${compareProducts.length > 1 ? 'ы' : ''} к сравнению`}
                action={
                    <>
                        <Button color="secondary" size="small" onClick={handleResetComparison}>
                            Сбросить
                        </Button>
                        <Button
                            color="primary"
                            size="small"
                            onClick={handleCompare}
                            disabled={compareProducts.length < 2}
                        >
                            Перейти к сравнению
                        </Button>
                    </>
                }
            />
        </>
    );
};

export default ProductGrid;
