import React from 'react';
import {
    View,
    Text,
    ViewStyle,
    TextStyle,
    TouchableOpacity,
} from 'react-native';
import { CommonStyles } from '../../styles';
import { Colors } from '../../styles/theme/color';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export type HeaderVariant = 'default' | 'transparent' | 'elevated';

interface HeaderProps {
    title: string;
    variant?: HeaderVariant;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onLeftPress?: () => void;
    onRightPress?: () => void;
    style?: ViewStyle;
    titleStyle?: TextStyle;
    showBackButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
    title,
    variant = 'default',
    leftIcon,
    rightIcon,
    onLeftPress,
    onRightPress,
    style,
    titleStyle,
    showBackButton = true,
}) => {
    const navigation = useNavigation();

    const getHeaderStyle = (): ViewStyle => {
        const baseStyle: ViewStyle = {
            ...CommonStyles.header,
        };

        switch (variant) {
            case 'transparent':
                return {
                    ...baseStyle,
                    backgroundColor: Colors.transparent,
                };
            case 'elevated':
                return {
                    ...baseStyle,
                    ...CommonStyles.elevated,
                };
            default:
                return baseStyle;
        }
    };

    return (
        <View style={[getHeaderStyle(), style]}>
            {showBackButton && (
                <TouchableOpacity
                    style={CommonStyles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="chevron-back" size={24} color={Colors.text.inverse} />
                </TouchableOpacity>
            )}
            <View style={CommonStyles.leftContainer}>
                {leftIcon ? (
                    <TouchableOpacity onPress={onLeftPress} style={CommonStyles.iconButton}>
                        {leftIcon}
                    </TouchableOpacity>
                ) : (
                    <View style={CommonStyles.placeholder} />
                )}
            </View>

            <View style={CommonStyles.headerCenter}>
                <Text style={[CommonStyles.title, titleStyle]} numberOfLines={1}>
                    {title}
                </Text>
            </View>

            <View style={CommonStyles.rightContainer}>
                {rightIcon ? (
                    <TouchableOpacity onPress={onRightPress} style={CommonStyles.iconButton}>
                        {rightIcon}
                    </TouchableOpacity>
                ) : (
                    <View style={CommonStyles.placeholder} />
                )}
            </View>
        </View>
    );
};
