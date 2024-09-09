import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box, Button, Container, TextField, InputAdornment, IconButton,
    Typography, Checkbox, FormControlLabel, MenuItem, Select, InputLabel,
    FormControl, Card, CardContent, Grid, CircularProgress
} from '@mui/material';
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import Layout from './general_components/Layout';
import PRODUCTS from '../external_data/Products';
import Product from './general_components/Product';

const AddProduct: React.FC = () => {
    const [product, setProduct] = useState<Product>({
        id: 0,
        name: '',
        price: 0,
        description: '',
        category: '',
        tags: [],
        stock: false,
        image: ''
    });

    const [imageURL, setImageURL] = useState<string>('');
    const [imagePreview, setImagePreview] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const [finalPrice, setFinalPrice] = useState<number>(0); // Result price.

    const categories = ['Софт', 'Вебсайт', 'Бот', 'Спец-токен', 'Ключ', 'Мод', 'Другое'];

    // Загружаем сохраненные товары из localStorage при загрузке компонента
    useEffect(() => {
        const storedProducts = localStorage.getItem('myProducts');
        if (storedProducts) {
            const parsedProducts = JSON.parse(storedProducts);
            PRODUCTS.push(...parsedProducts);
        }
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleCategoryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setProduct({ ...product, category: event.target.value as string });
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({ ...product, stock: event.target.checked });
    };

    const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({ ...product, tags: e.target.value.split(',').map(tag => tag.trim()) });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setImageURL(e.target.value);
        setProduct({ ...product, image: value });
        setImagePreview(value);
    };

    // Pasting of copied text.
    const handlePaste = () => {
        navigator.clipboard.readText().then((text) => {
            setImageURL(text);
            setImagePreview(text);
        });
    };

    // To make an uploading effect when image url has been pasted.
    useEffect(() => {
        if (imagePreview) {
            setIsLoading(true);
            const img = new Image();
            img.src = imagePreview;
            img.onload = () => setIsLoading(false);
            img.onerror = () => setIsLoading(false);
        }
    }, [imagePreview]);

    // Computing the price.
    useEffect(() => {
        const calculateFinalPrice = () => {
            const commission = product.price * 0.02 + 0.01; // 2% & 0.01 token of comission
            setFinalPrice(product.price - commission);
        };
        calculateFinalPrice();
    }, [product.price]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Обновляем цену продукта на финальную цену перед отправкой
        const productWithFinalPrice = {
            ...product,
            price: finalPrice
        };

        try {
            PRODUCTS.push(productWithFinalPrice);

            // Сохраняем товар в localStorage
            const existingProducts = localStorage.getItem('myProducts');
            const updatedProducts = existingProducts ? JSON.parse(existingProducts) : [];
            updatedProducts.push(productWithFinalPrice);
            localStorage.setItem('myProducts', JSON.stringify(updatedProducts));

            navigate('/');
        } catch (e) {
            alert("Ошибка при добавлении товара.");
        }
    };

    return (
        <Layout pagename="Добавить новый товар">
            <Container maxWidth="md" sx={{ mt: 6 }}>
                <Card elevation={6} sx={{ borderRadius: 3 }}>
                    <CardContent>
                        <Typography variant="h4" align="center" gutterBottom>
                            Создать новый товар
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Название товара"
                                        name="name"
                                        value={product.name}
                                        onChange={handleInputChange}
                                        fullWidth
                                        margin="normal"
                                        required
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Цена"
                                        name="price"
                                        type="number"
                                        value={product.price}
                                        onChange={handleInputChange}
                                        fullWidth
                                        margin="normal"
                                        required
                                        variant="outlined"
                                        InputProps={{
                                            inputProps: { min: 0 }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    {finalPrice <= 0 ? undefined :
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Итоговая цена с комиссией: {finalPrice.toFixed(2)} токенов
                                        </Typography>}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Описание"
                                        name="description"
                                        value={product.description}
                                        onChange={handleInputChange}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        margin="normal"
                                        required
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth margin="normal" variant="outlined">
                                        <InputLabel id="category-label">Категория</InputLabel>
                                        <Select
                                            labelId="category-label"
                                            value={product.category}
                                            // @ts-ignore
                                            onChange={handleCategoryChange}
                                            label="Категория"
                                            required
                                        >
                                            {categories.map((category) => (
                                                <MenuItem key={category} value={category}>
                                                    {category}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Теги (через запятую)"
                                        name="tags"
                                        value={product.tags?.join(', ')}
                                        onChange={handleTagsChange}
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={product.stock}
                                                onChange={handleCheckboxChange}
                                                name="stock"
                                                color="primary"
                                            />
                                        }
                                        label="Есть в наличии"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="URL изображения"
                                        name="image"
                                        value={imageURL}
                                        onChange={handleImageChange}
                                        fullWidth
                                        margin="normal"
                                        required
                                        variant="outlined"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handlePaste} edge="end">
                                                        <ContentPasteIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                            </Grid>

                            {imagePreview && (
                                <Box sx={{ mt: 2, textAlign: 'center' }}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Предварительный просмотр изображения:
                                    </Typography>
                                    {isLoading ? (
                                        <CircularProgress />
                                    ) : (
                                        <img
                                            src={imagePreview}
                                            alt="Предварительный просмотр"
                                            style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'contain' }}
                                        />
                                    )}
                                </Box>
                            )}
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{
                                    mt: 3,
                                    py: 1.5,
                                    fontWeight: 'bold',
                                    backgroundColor: 'primary.main',
                                    '&:hover': {
                                        backgroundColor: 'primary.dark',
                                    },
                                }}
                            >
                                Добавить товар
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </Layout>
    );
};

export default AddProduct;
