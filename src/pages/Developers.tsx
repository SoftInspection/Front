import * as React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface Developer {
    name: string;
    description: string;
    imageUrl: string;
    socials?: { platform: string, url: string }[];
}

const developers: Developer[] = [
    {
        name: 'Dilemma Fixer',
        description: 'Ведущий разработчик backend.',
        imageUrl: 'https://via.placeholder.com/150',
        socials: [
            { platform: 'github', url: 'https://github.com/DilemaFixer' },
            { platform: 'linkedin', url: 'https://www.linkedin.com/in/illa-shishko-088960251/' }
        ]
    },
    {
        name: 'Suchhzz',
        description: 'Разработчик backend.',
        imageUrl: 'https://via.placeholder.com/150',
        socials: [
            { platform: 'github', url: 'https://github.com/suchhzz' }
        ]
    },
    {
        name: 'Ejtolf S. Dargqvist',
        description: 'Ведущий разработчик frontend.',
        imageUrl: 'https://via.placeholder.com/150',
        socials: [
            { platform: 'github', url: 'https://github.com/Ejtolf' },
            { platform: 'linkedin', url: 'https://linkedin.com/in/Ejtolf' }
        ]
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
                            <div>
                                {developer.socials?.map((social, idx) => (
                                    <IconButton
                                        key={idx}
                                        component="a"
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.platform}
                                    >
                                        {social.platform === 'github' && <GitHubIcon />}
                                        {social.platform === 'linkedin' && <LinkedInIcon />}
                                    </IconButton>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Developers;
