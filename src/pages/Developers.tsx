import * as React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface Developer {
    name: string;
    description: string;
    imageUrl?: string;
    githubUsername?: string;
    socials?: { platform: string, url: string }[];
}

const developers: Developer[] = [
    {
        name: 'Dilemma Fixer',
        description: 'Ведущий разработчик backend.',
        githubUsername: 'DilemaFixer',
        socials: [
            { platform: 'github', url: 'https://github.com/DilemaFixer' },
            { platform: 'linkedin', url: 'https://www.linkedin.com/in/illa-shishko-088960251/' }
        ]
    },
    {
        name: 'Suchhzz',
        description: 'Разработчик backend.',
        githubUsername: 'suchhzz',
        socials: [
            { platform: 'github', url: 'https://github.com/suchhzz' }
        ]
    },
    {
        name: 'Ejtolf S. Dargqvist',
        description: 'Ведущий разработчик frontend.',
        githubUsername: 'Ejtolf',
        socials: [
            { platform: 'github', url: 'https://github.com/Ejtolf' },
            { platform: 'linkedin', url: 'https://linkedin.com/in/Ejtolf' }
        ]
    }
];

const Developers: React.FC = () => {
    const [avatars, setAvatars] = React.useState<{ [key: string]: string }>({});
    const [areAvatarsLoaded, setAreAvatarsLoaded] = React.useState<boolean>(false);
    // Gif while avatars are loading.
    const loadingSpinnerUrl = 'https://i.gifer.com/ZZ5H.gif';

    React.useEffect(() => {
        const fetchAvatar = async (username: string) => {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (response.ok) {
                const data = await response.json();
                setAvatars(prevAvatars => ({ ...prevAvatars, [username]: data.avatar_url }));
            }
        };

        developers.forEach(developer => {
            if (developer.githubUsername) {
                fetchAvatar(developer.githubUsername);
                setAreAvatarsLoaded(true);
            }
        });
    }, []);

    return (
        <Grid container spacing={3}>
            {developers.map((developer, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="150"
                            image={avatars[developer.githubUsername || ''] || loadingSpinnerUrl}
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
