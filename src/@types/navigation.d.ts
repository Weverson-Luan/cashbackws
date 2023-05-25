export interface RootStackParamList {
    Presentation: undefined;
    Login: undefined;
    Sign: undefined;
    HomeStack: undefined;
    HomeBottomTabs: undefined;

    AppRoutesAuth: undefined;
    RegisterUser: undefined;
    RecoverPassword: undefined;
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
