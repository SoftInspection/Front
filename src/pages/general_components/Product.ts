interface ProductStruct {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    tags?: string[];
    stock: number;
    image: string;
}

export default ProductStruct;
