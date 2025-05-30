declare module 'expo-camera' {
    import { Component, ReactNode, RefObject } from 'react';
    import { ViewStyle } from 'react-native';

    export enum CameraType {
        front = 'front',
        back = 'back'
    }

    export interface CameraProps {
        style?: ViewStyle;
        type?: CameraType;
        ratio?: string;
        ref?: RefObject<Camera> | ((ref: Camera | null) => void);
        onCameraReady?: () => void;
        children?: ReactNode;
    }

    export class Camera extends Component<CameraProps> {
        static requestCameraPermissionsAsync(): Promise<{ status: string }>;
        takePictureAsync(): Promise<{ uri: string }>;
    }
} 