interface Shadow {
    color: string;
    opacity: number;
    offset: { width: number; height: number };
    radius: number;
}

interface Colors {
    background: {
        primary: string;
        secondary: string;
        tertiary: string;
        quaternary: string;
        quinary: string;
    };
    text: {
        primary: string;
        secondary: string;
        tertiary: string;
        inverse: string;
        link: string;
        success: string;
        warning: string;
        error: string;
        muted: string;
    };
    status: {
        success: string;
        warning: string;
        error: string;
        info: string;
    };
    border: {
        light: string;
        medium: string;
        dark: string;
        focus: string;
        error: string;
    };
    shadow: Shadow;
    transparent: string;
}

export const Colors: Colors = {
    background: {
        primary: '#FFFFFF',
        secondary: '#F5F5F5',
        tertiary: '#E0E0E0',
        quaternary: '#D0D0D0',
        quinary: '#C0C0C0',
    },
    text: {
        primary: '#000000',
        secondary: '#666666',
        tertiary: '#999999',
        inverse: '#FFFFFF',
        link: '#007AFF',
        success: '#34C759',
        warning: '#FF9500',
        error: '#FF3B30',
        muted: '#8E8E93',
    },
    status: {
        success: '#34C759',
        warning: '#FF9500',
        error: '#FF3B30',
        info: '#007AFF',
    },
    border: {
        light: '#E0E0E0',
        medium: '#CCCCCC',
        dark: '#999999',
        focus: '#007AFF',
        error: '#FF3B30',
    },
    shadow: {
        color: '#000000',
        opacity: 0.1,
        offset: { width: 0, height: 2 },
        radius: 4,
    },
    transparent: 'transparent',
} as const; 