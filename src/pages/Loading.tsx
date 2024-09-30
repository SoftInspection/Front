import React from 'react';
import { CircularProgressProps } from '@mui/joy';
import Layout from './general_components/Layout';
import { CircularProgress } from '@mui/material';

const Loading: React.FC = () => {
    return (
        <Layout pagename="Загрузка...">
            <CircularProgress />
        </Layout>
    )
};

export default Loading;
