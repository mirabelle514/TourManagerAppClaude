import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
    Login: undefined;
    BiometricSetup: undefined;
    TourSetup: undefined;
    MainApp: undefined;
    DaySheet: undefined;
    Financial: undefined;
    Merchandise: undefined;
    Team: undefined;
    Schedule: undefined;
    Settings: undefined;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}
