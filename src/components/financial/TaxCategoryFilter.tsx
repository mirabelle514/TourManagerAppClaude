import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../styles/theme/color';

export type TaxCategory = 'business' | 'meals' | 'travel' | 'equipment';

interface TaxCategoryFilterProps {
    categories: TaxCategory[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

export const TaxCategoryFilter: React.FC<TaxCategoryFilterProps> = ({
    categories,
    selectedCategory,
    onSelectCategory,
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[
                    styles.categoryButton,
                    selectedCategory === 'all' && styles.selectedCategory,
                ]}
                onPress={() => onSelectCategory('all')}
            >
                <Text style={[
                    styles.categoryText,
                    selectedCategory === 'all' && styles.selectedCategoryText,
                ]}>
                    All
                </Text>
            </TouchableOpacity>
            {categories.map((category) => (
                <TouchableOpacity
                    key={category}
                    style={[
                        styles.categoryButton,
                        selectedCategory === category && styles.selectedCategory,
                    ]}
                    onPress={() => onSelectCategory(category)}
                >
                    <Text style={[
                        styles.categoryText,
                        selectedCategory === category && styles.selectedCategoryText,
                    ]}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        gap: 8,
    },
    categoryButton: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        backgroundColor: Colors.background.secondary,
    },
    selectedCategory: {
        backgroundColor: Colors.accent.primary.main,
    },
    categoryText: {
        color: Colors.text.primary,
        fontSize: 14,
        fontWeight: '500',
    },
    selectedCategoryText: {
        color: Colors.text.primary,
        fontWeight: '600',
    },
});