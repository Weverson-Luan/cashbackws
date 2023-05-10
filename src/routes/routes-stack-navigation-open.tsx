import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import { Sign } from '@screens/sign';

//bottom Tabs
import { BottomTabsAuth } from './index.bottomTabs';
import { Login } from '@screens/login';

const Stack = createNativeStackNavigator();

function AppRoutesOpen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name="Sign"
                // @ts-expect-error:next-line
                component={Sign}
            />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

export { AppRoutesOpen };
