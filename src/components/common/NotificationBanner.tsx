import React, { useEffect } from 'react';
import {
    View,
    Text,
    ViewStyle,
    TextStyle,
    Animated,
    TouchableOpacity,
} from 'react-native';
import { Colors } from '../../styles/theme/color';
import { Ionicons } from '@expo/vector-icons';
import { CommonStyles } from '../../styles';

export type NotificationType = 'success' | 'warning' | 'error' | 'info';

interface NotificationBannerProps {
    type: NotificationType;
    message: string;
    visible: boolean;
    duration?: number;
    onClose?: () => void;
    style?: ViewStyle;
    messageStyle?: TextStyle;
}

export const NotificationBanner: React.FC<NotificationBannerProps> = ({
    type,
    message,
    visible,
    duration = 3000,
    onClose,
    style,
    messageStyle,
}) => {
    const translateY = new Animated.Value(-100);
    const opacity = new Animated.Value(0);

    useEffect(() => {
        if (visible) {
            Animated.parallel([
                Animated.timing(translateY, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();

            if (duration > 0) {
                const timer = setTimeout(() => {
                    onClose?.();
                }, duration);

                return () => clearTimeout(timer);
            }
        } else {
            Animated.parallel([
                Animated.timing(translateY, {
                    toValue: -100,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [visible, duration]);

    const getBackgroundColor = (): string => {
        switch (type) {
            case 'success':
                return Colors.status.success;
            case 'warning':
                return Colors.status.warning;
            case 'error':
                return Colors.status.error;
            case 'info':
                return Colors.status.info;
            default:
                return Colors.status.info;
        }
    };

    const getIcon = (): keyof typeof Ionicons.glyphMap => {
        switch (type) {
            case 'success':
                return 'checkmark-circle';
            case 'warning':
                return 'alert-circle';
            case 'error':
                return 'close-circle';
            case 'info':
                return 'information-circle';
            default:
                return 'information-circle';
        }
    };

    return (
        <Animated.View
            style={[
                CommonStyles.container,
                {
                    backgroundColor: getBackgroundColor(),
                    transform: [{ translateY }],
                    opacity,
                },
                style,
            ]}
        >
            <View style={CommonStyles.content}>
                <Ionicons
                    name={getIcon()}
                    size={24}
                    color={Colors.text.inverse}
                    style={CommonStyles.icon}
                />
                <Text style={[CommonStyles.message, messageStyle]}>{message}</Text>
            </View>
            {onClose && (
                <TouchableOpacity onPress={onClose} style={CommonStyles.closeButton}>
                    <Ionicons
                        name="close"
                        size={20}
                        color={Colors.text.inverse}
                    />
                </TouchableOpacity>
            )}
        </Animated.View>
    );
};