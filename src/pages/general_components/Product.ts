interface ProductStruct {
    id: number; // ID
    name: string; // Name of product
    price: number; // Price of product
    description: string; // Description of product
    category: string; // Category of product
    tags?: string[]; // Tags. User who adds the product into the market makes tags by itself.
    stock: boolean; // Is available or not.
    image: string; // URL to image.
}

export default ProductStruct;
