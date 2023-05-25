import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import { BottomTabsAuth } from './index.bottomTabs';
import { Login } from '@screens/login';
import { Sign } from '@screens/sign';

const stackAuth = createNativeStackNavigator();

const AppRoutesAuth = () => {
    return (
        <stackAuth.Navigator
            initialRouteName="HomeBottomTab"
            screenOptions={{
                headerShown: false,
            }}>
            <stackAuth.Screen name="HomeBottomTab" component={BottomTabsAuth} />
        </stackAuth.Navigator>
    );
};

export { AppRoutesAuth };
