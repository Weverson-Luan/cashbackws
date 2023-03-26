export interface RootStackParamList {
    Presentation: undefined;
    Sign: undefined;
    HomeStack: undefined;
    HomeBottomTab: undefined;
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
