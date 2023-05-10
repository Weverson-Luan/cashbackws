export interface RootStackParamList {
    Presentation: undefined;
    Login: undefined;
    Sign: undefined;
    HomeStack: undefined;
    HomeBottomTabs: undefined;
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
