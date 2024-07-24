import axios from 'axios';
import Product from '../pages/general_components/Product';

const API_URL = 'http://localhost:7023/Software/';

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};
