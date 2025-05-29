import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { DaySheetStyles } from '../../styles/DaySheetStyles';

interface CountdownTimerProps {
    targetTime: string; // Format: "YYYY-MM-DD HH:mm"
    label: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetTime, label }) => {
    const [timeLeft, setTimeLeft] = useState('');
    const [isOverdue, setIsOverdue] = useState(false);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const target = new Date(targetTime);
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            if (difference > 0) {
                const hours = Math.floor(difference / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                if (hours > 0) {
                    setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
                } else if (minutes > 0) {
                    setTimeLeft(`${minutes}m ${seconds}s`);
                } else {
                    setTimeLeft(`${seconds}s`);
                }
                setIsOverdue(false);
            } else {
                const pastHours = Math.floor(Math.abs(difference) / (1000 * 60 * 60));
                const pastMinutes = Math.floor((Math.abs(difference) % (1000 * 60 * 60)) / (1000 * 60));

                if (pastHours > 0) {
                    setTimeLeft(`+${pastHours}h ${pastMinutes}m`);
                } else {
                    setTimeLeft(`+${pastMinutes}m`);
                }
                setIsOverdue(true);
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetTime]);

    const formatTargetTime = (timeString: string) => {
        const date = new Date(timeString);
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
    };

    return (
        <View style={[
            DaySheetStyles.countdownCard,
            isOverdue && { backgroundColor: '#FF6B6B' }
        ]}>
            <Text style={DaySheetStyles.countdownLabel}>
                {isOverdue ? `${label} Started` : `Until ${label}`}
            </Text>
            <Text style={DaySheetStyles.countdownTime}>
                {timeLeft}
            </Text>
            <Text style={DaySheetStyles.countdownSubtext}>
                {isOverdue ? 'Overdue' : `Scheduled for ${formatTargetTime(targetTime)}`}
            </Text>
        </View>
    );
};