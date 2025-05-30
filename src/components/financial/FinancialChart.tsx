import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Colors, Typography, Spacing } from '../../styles/theme/index';

interface FinancialChartProps {
    data: {
        labels: string[];
        datasets: {
            data: number[];
            color?: (opacity: number) => string;
            strokeWidth?: number;
        }[];
    };
    height?: number;
    width?: number;
}

export const FinancialChart: React.FC<FinancialChartProps> = ({
    data,
    height = 220,
    width = Dimensions.get('window').width - 32
}) => {
    return (
        <View>
            <LineChart
                data={data}
                width={width}
                height={height}
                chartConfig={{
                    backgroundColor: Colors.background.primary,
                    backgroundGradientFrom: Colors.background.primary,
                    backgroundGradientTo: Colors.background.primary,
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>
    );
};
