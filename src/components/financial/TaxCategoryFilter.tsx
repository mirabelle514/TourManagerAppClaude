import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Colors } from '../../styles/theme';

export interface TaxCategory {
    id: string;
    label: string;
    color: string;
}

interface TaxCategoryFilterProps {
    categories: TaxCategory[];
    selectedCategory: string;
    onSelectCategory: (id: string) => void;
}

export const TaxCategoryFilter: React.FC<TaxCategoryFilterProps> = ({
    categories,
    selectedCategory,
    onSelectCategory
}) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 8 }}>
            <View style={{ flexDirection: 'row', gap: 8 }}>
                {categories.map((cat) => (
                    <TouchableOpacity
                        key={cat.id}
                        onPress={() => onSelectCategory(cat.id)}
                        style={{
                            backgroundColor: selectedCategory === cat.id ? cat.color : cat.color + '20',
                            paddingHorizontal: 14,
                            paddingVertical: 6,
                            borderRadius: 16,
                            marginRight: 8,
                        }}
                    >
                        <Text style={{
                            color: selectedCategory === cat.id ? '#fff' : cat.color,
                            fontWeight: '600',
                            fontSize: 13,
                        }}>{cat.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};