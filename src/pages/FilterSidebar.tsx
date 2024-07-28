import React from 'react';
import { Box, Collapse, Button, Typography, Checkbox, FormControlLabel, Divider, TextField } from '@mui/material';

interface FilterSidebarProps {
    categories: string[];
    tags: string[];
    onCategoryChange: (category: string, checked: boolean) => void;
    onTagChange: (tag: string, checked: boolean) => void;
    onPriceChange: (min: number | null, max: number | null) => void;
    onAvailabilityChange: (available: boolean) => void;
    showAllFilters: boolean;
    setShowAllFilters: (show: boolean) => void;
    onClearFilters: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
    categories,
    tags,
    onCategoryChange,
    onTagChange,
    onPriceChange,
    onAvailabilityChange,
    showAllFilters,
    setShowAllFilters,
    onClearFilters,
}) => {
    const [openFilters, setOpenFilters] = React.useState(false);
    const [openTags, setOpenTags] = React.useState(false);
    const [openPrice, setOpenPrice] = React.useState(false);
    const [openAvailability, setOpenAvailability] = React.useState(false);

    const [categorySearch, setCategorySearch] = React.useState('');
    const [tagSearch, setTagSearch] = React.useState('');

    const filteredCategories = categories.filter(category =>
        category.toLowerCase().includes(categorySearch.toLowerCase())
    );

    const filteredTags = tags.filter(tag =>
        tag.toLowerCase().includes(tagSearch.toLowerCase())
    );

    return (
        <Box
            sx={{
                p: 2,
                bgcolor: 'background.paper',
                borderBottom: '1px solid',
                borderColor: 'divider',
                mb: 2
            }}
        >
            <Button
                onClick={() => setShowAllFilters(!showAllFilters)}
                variant="text"
            >
                {showAllFilters ? 'Скрыть фильтры' : 'Показать фильтры'}
            </Button>

            {showAllFilters && (
                <>
                    <Button
                        onClick={() => setOpenFilters(!openFilters)}
                        fullWidth
                        variant="outlined"
                        sx={{ mb: 1 }}
                    >
                        Категория
                    </Button>
                    <Collapse in={openFilters}>
                        <Box sx={{ p: 1 }}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                size="small"
                                placeholder="найти категорию"
                                value={categorySearch}
                                onChange={(e) => setCategorySearch(e.target.value)}
                                sx={{ mb: 1 }}
                            />
                            {filteredCategories.map(category => (
                                <FormControlLabel
                                    key={category}
                                    control={<Checkbox onChange={(e) => onCategoryChange(category, e.target.checked)} />}
                                    label={category}
                                />
                            ))}
                        </Box>
                    </Collapse>

                    <Button
                        onClick={() => setOpenTags(!openTags)}
                        fullWidth
                        variant="outlined"
                        sx={{ mb: 1 }}
                    >
                        Теги
                    </Button>
                    <Collapse in={openTags}>
                        <Box sx={{ p: 1 }}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                size="small"
                                placeholder="найти тэг"
                                value={tagSearch}
                                onChange={(e) => setTagSearch(e.target.value)}
                                sx={{ mb: 1 }}
                            />
                            {filteredTags.map(tag => (
                                <FormControlLabel
                                    key={tag}
                                    control={<Checkbox onChange={(e) => onTagChange(tag, e.target.checked)} />}
                                    label={tag}
                                />
                            ))}
                        </Box>
                    </Collapse>

                    <Button
                        onClick={() => setOpenPrice(!openPrice)}
                        fullWidth
                        variant="outlined"
                        sx={{ mb: 1 }}
                    >
                        Цена
                    </Button>
                    <Collapse in={openPrice}>
                        <Box sx={{ p: 1 }}>
                            <Typography variant="body2">Цена от:</Typography>
                            <input type="number" placeholder="Минимум" onChange={(e) => onPriceChange(Number(e.target.value), null)} />
                            <Typography variant="body2">До:</Typography>
                            <input type="number" placeholder="Максимум" onChange={(e) => onPriceChange(null, Number(e.target.value))} />
                        </Box>
                    </Collapse>

                    <Button
                        onClick={() => setOpenAvailability(!openAvailability)}
                        fullWidth
                        variant="outlined"
                        sx={{ mb: 1 }}
                    >
                        В наличии
                    </Button>
                    <Collapse in={openAvailability}>
                        <Box sx={{ p: 1 }}>
                            <FormControlLabel
                                control={<Checkbox onChange={(e) => onAvailabilityChange(e.target.checked)} />}
                                label="В наличии"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={(e) => onAvailabilityChange(!e.target.checked)} />}
                                label="Нет в наличии"
                            />
                        </Box>
                    </Collapse>

                    <Divider sx={{ my: 2 }} />

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mb: 1 }}
                        onClick={() => setShowAllFilters(!showAllFilters)}
                    >
                        Применить
                    </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        fullWidth
                        onClick={onClearFilters}
                    >
                        Очистить фильтры
                    </Button>
                </>
            )}
        </Box>
    );
};

export default FilterSidebar;
