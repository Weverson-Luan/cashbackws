import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import { BottomTabsAuth } from './index.bottomTabs';
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
            <stackAuth.Screen
                name="Sign"
                // @ts-expect-error:next-line
                component={Sign}
            />
        </stackAuth.Navigator>
    );
};

export { AppRoutesAuth };
