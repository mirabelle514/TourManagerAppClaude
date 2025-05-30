declare module 'react-native-chart-kit' {
    import { ViewStyle } from 'react-native';

    interface ChartConfig {
        backgroundGradientFrom?: string;
        backgroundGradientTo?: string;
        decimalPlaces?: number;
        color?: (opacity?: number) => string;
        labelColor?: (opacity?: number) => string;
        style?: {
            borderRadius?: number;
        };
        propsForDots?: {
            r?: string;
            strokeWidth?: string;
            stroke?: string;
        };
    }

    interface ChartData {
        labels: string[];
        datasets: {
            data: number[];
            color?: (opacity?: number) => string;
            strokeWidth?: number;
        }[];
    }

    interface LineChartProps {
        data: ChartData;
        width: number;
        height: number;
        chartConfig: ChartConfig;
        bezier?: boolean;
        style?: ViewStyle;
    }

    interface BarChartProps {
        data: {
            labels: string[];
            datasets: {
                data: number[];
            }[];
        };
        width: number;
        height: number;
        chartConfig: ChartConfig;
        style?: ViewStyle;
        showValuesOnTopOfBars?: boolean;
    }

    export const LineChart: React.FC<LineChartProps>;
    export const BarChart: React.FC<BarChartProps>;
} 