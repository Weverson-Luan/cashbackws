import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import { BottomTabsAuth } from './index.bottomTabs';

const stackAuth = createNativeStackNavigator();

const AppRoutesAuth = () => {
    return (
        <stackAuth.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <stackAuth.Screen name="HomeBottomTab" component={BottomTabsAuth} />
        </stackAuth.Navigator>
    );
};

export { AppRoutesAuth };
