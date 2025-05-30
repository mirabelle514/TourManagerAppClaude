import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { Colors } from '../../styles/theme/color';
import { Ionicons } from '@expo/vector-icons';
import { CommonStyles } from '../../styles';

export interface NavigationItem {
    key: string;
    label: string;
    icon: keyof typeof Ionicons.glyphMap;
    activeIcon?: keyof typeof Ionicons.glyphMap;
}

interface NavigationBarProps {
    items: NavigationItem[];
    activeKey: string;
    onItemPress: (key: string) => void;
    style?: ViewStyle;
    itemStyle?: ViewStyle;
    labelStyle?: TextStyle;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
    items,
    activeKey,
    onItemPress,
    style,
    itemStyle,
    labelStyle,
}) => {
    return (
        <View style={[CommonStyles.container, style]}>
            {items.map((item) => {
                const isActive = item.key === activeKey;
                const iconName = isActive && item.activeIcon ? item.activeIcon : item.icon;

                return (
                    <TouchableOpacity
                        key={item.key}
                        style={[CommonStyles.item, itemStyle]}
                        onPress={() => onItemPress(item.key)}
                        activeOpacity={0.7}
                    >
                        <Ionicons
                            name={iconName}
                            size={24}
                            color={isActive ? Colors.primary : Colors.text.secondary}
                            style={CommonStyles.icon}
                        />
                        <Text
                            style={[
                                CommonStyles.label,
                                {
                                    color: isActive ? Colors.primary : Colors.text.secondary,
                                },
                                labelStyle,
                            ]}
                        >
                            {item.label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};
