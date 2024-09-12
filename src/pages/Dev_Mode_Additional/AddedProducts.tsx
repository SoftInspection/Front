import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Chip, CardActionArea } from '@mui/material';
import Product from '../general_components/Product';

const AddedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const storedProducts = localStorage.getItem('myProducts');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Проектов создано: {products.length}
      </Typography>

      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardActionArea onClick={ () => navigate(`/item/${product.name}`) }>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body1" color="text.primary">
                    Цена: {product.price} руб.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Категория: {product.category}
                  </Typography>
                  {product.tags && (
                    <div>
                      {product.tags.map((tag, index) => (
                        <Chip key={index} label={tag} style={{ marginRight: 4 }} />
                      ))}
                    </div>
                  )}

                  <Typography variant="body2" color={product.stock ? 'green' : 'red'}>
                    {product.stock ? 'В наличии' : 'Нет в наличии'}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AddedProducts;
