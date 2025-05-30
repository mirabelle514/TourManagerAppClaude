import React from 'react';
import {
    View,
    Text,
    ViewStyle,
    TextStyle,
    Image,
    ImageStyle,
} from 'react-native';
import { CommonStyles } from '../../styles';
interface EmptyStateProps {
    title: string;
    message?: string;
    icon?: React.ReactNode;
    image?: any;
    style?: ViewStyle;
    titleStyle?: TextStyle;
    messageStyle?: TextStyle;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
    title,
    message,
    icon,
    image,
    style,
    titleStyle,
    messageStyle,
}) => {
    return (
        <View style={[CommonStyles.container, style]}>
            {image && (
                <Image
                    source={image}
                    style={CommonStyles.image as ImageStyle}
                    resizeMode="contain"
                />
            )}
            {icon && <View style={CommonStyles.iconContainer}>{icon}</View>}
            <Text style={[CommonStyles.title, titleStyle]}>{title}</Text>
            {message && (
                <Text style={[CommonStyles.message, messageStyle]}>{message}</Text>
            )}
        </View>
    );
};
