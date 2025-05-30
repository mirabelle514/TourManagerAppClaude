import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../styles/theme';

interface ReceiptCameraProps {
    onCapture: (uri: string) => void;
}

export const ReceiptCamera: React.FC<ReceiptCameraProps> = ({ onCapture }) => {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [cameraReady, setCameraReady] = useState(false);
    const [capturedUri, setCapturedUri] = useState<string | null>(null);
    const cameraRef = useRef<Camera | null>(null);

    React.useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if (cameraRef.current && cameraReady) {
            const photo = await cameraRef.current.takePictureAsync();
            setCapturedUri(photo.uri);
            onCapture(photo.uri);
        }
    };

    if (hasPermission === null) {
        return <View><Text>Requesting camera permission...</Text></View>;
    }
    if (hasPermission === false) {
        return <View><Text>No access to camera</Text></View>;
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {capturedUri ? (
                <View>
                    <Image source={{ uri: capturedUri }} style={{ width: 300, height: 400, borderRadius: 12 }} />
                    <TouchableOpacity onPress={() => setCapturedUri(null)} style={{ marginTop: 16 }}>
                        <Text style={{ color: Colors.status.info }}>Retake</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <Camera
                    style={{ width: 300, height: 400, borderRadius: 12 }}
                    type={CameraType.back}
                    ref={ref => (cameraRef.current = ref)}
                    onCameraReady={() => setCameraReady(true)}
                    ratio="4:3"
                >
                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 24 }}>
                        <TouchableOpacity onPress={takePicture} style={{ backgroundColor: Colors.status.info, borderRadius: 32, padding: 16 }}>
                            <Ionicons name="camera" size={32} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </Camera>
            )}
        </View>
    );
};