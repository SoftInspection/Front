import * as React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

interface Developer {
    name: string;
    description: string;
    imageUrl: string;
}

const developers: Developer[] = [
    {
        name: 'Dilemma Fixer',
        description: 'Ведущий разработчик backend.',
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        name: 'Suchhzz',
        description: 'Разработчик backend.',
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        name: 'Ejtolf S. Dargqvist',
        description: 'Ведущий разработчик frontend.',
        imageUrl: 'https://via.placeholder.com/150',
    }
];

const Developers: React.FC = () => {
    return (
        <Grid container spacing={3}>
            {developers.map((developer, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="150"
                            image={developer.imageUrl}
                            alt={developer.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {developer.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {developer.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Developers;
