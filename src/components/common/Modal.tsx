import React, { useEffect } from 'react';
import {
    View,
    Modal as RNModal,
    ViewStyle,
    ModalProps as RNModalProps,
    Animated,
    TouchableWithoutFeedback,
    Dimensions,
} from 'react-native';
import { CommonStyles } from '../../styles';

export type ModalVariant = 'center' | 'bottom' | 'fullscreen';

interface ModalProps extends Omit<RNModalProps, 'animationType'> {
    visible: boolean;
    onClose: () => void;
    variant?: ModalVariant;
    style?: ViewStyle;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
    visible,
    onClose,
    variant = 'center',
    style,
    children,
    ...props
}) => {
    const fadeAnim = new Animated.Value(0);
    const slideAnim = new Animated.Value(variant === 'bottom' ? 1 : 0);

    useEffect(() => {
        if (visible) {
            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: true,
                }),
                Animated.timing(slideAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();
        } else {
            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                }),
                Animated.timing(slideAnim, {
                    toValue: variant === 'bottom' ? 1 : 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [visible, variant]);

    const getModalStyle = (): ViewStyle => {
        const baseStyle: ViewStyle = {
            ...CommonStyles.modal,
        };

        switch (variant) {
            case 'center':
                return {
                    ...baseStyle,
                    ...CommonStyles.centerModal,
                };
            case 'bottom':
                return {
                    ...baseStyle,
                    ...CommonStyles.bottomModal,
                };
            case 'fullscreen':
                return {
                    ...baseStyle,
                    ...CommonStyles.fullscreenModal,
                };
            default:
                return baseStyle;
        }
    };

    return (
        <RNModal
            visible={visible}
            transparent
            onRequestClose={onClose}
            {...props}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <Animated.View
                    style={[
                        CommonStyles.overlay,
                        {
                            opacity: fadeAnim,
                        },
                    ]}
                >
                    <TouchableWithoutFeedback>
                        <Animated.View
                            style={[
                                getModalStyle(),
                                {
                                    transform: [
                                        {
                                            translateY: slideAnim.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0, Dimensions.get('window').height],
                                            }),
                                        },
                                    ],
                                },
                                style,
                            ]}
                        >
                            {children}
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </Animated.View>
            </TouchableWithoutFeedback>
        </RNModal>
    );
};

