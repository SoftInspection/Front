import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import Layout from "./general_components/Layout";
import ProductGrid from './ProductGrid';
import FilterSidebar from './FilterSidebar';
import PRODUCTS from "../external_data/Products";

const allCategories = PRODUCTS.flatMap(product => product.category || []);
const uniqueCategories = Array.from(new Set(allCategories));

const allTags = PRODUCTS.flatMap(product => product.tags || []);
const uniqueTags = Array.from(new Set(allTags));

const Lobby: React.FC = () => {
    const [categories, setCategories] = useState<Set<string>>(new Set());
    const [tags, setTags] = useState<Set<string>>(new Set());
    const [priceRange, setPriceRange] = useState<[number | null, number | null]>([null, null]);
    const [availability, setAvailability] = useState<boolean | null>(null);
    const [showAllFilters, setShowAllFilters] = useState(false);

    const handleCategoryChange = (category: string, checked: boolean) => {
        setCategories(prev => {
            const newCategories = new Set(prev);
            if (checked) {
                newCategories.add(category);
            } else {
                newCategories.delete(category);
            }
            return newCategories;
        });
    };

    const handleTagChange = (tag: string, checked: boolean) => {
        setTags(prev => {
            const newTags = new Set(prev);
            if (checked) {
                newTags.add(tag);
            } else {
                newTags.delete(tag);
            }
            return newTags;
        });
    };

    const handlePriceChange = (min: number | null, max: number | null) => {
        setPriceRange([min, max]);
    };

    const handleAvailabilityChange = (available: boolean) => {
        setAvailability(available);
    };

    const handleClearFilters = () => {
        setCategories(new Set());
        setTags(new Set());
        setPriceRange([null, null]);
        setAvailability(null);
        setShowAllFilters(false);
    };

    return (
        <Layout pagename="Главная страница">
            <Container>
                <Box>
                    <FilterSidebar
                        categories={uniqueCategories}
                        tags={uniqueTags}
                        onCategoryChange={handleCategoryChange}
                        onTagChange={handleTagChange}
                        onPriceChange={handlePriceChange}
                        onAvailabilityChange={handleAvailabilityChange}
                        showAllFilters={showAllFilters}
                        setShowAllFilters={setShowAllFilters}
                        onClearFilters={handleClearFilters}
                    />
                    <Box sx={{ mt: 2 }}>
                        <ProductGrid
                            categories={categories}
                            tags={tags}
                            priceRange={priceRange}
                            availability={availability}
                        />
                    </Box>
                </Box>
            </Container>
        </Layout>
    );
};

export default Lobby;
