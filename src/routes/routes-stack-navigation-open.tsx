import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import { HomeStack } from '@screens/home-stack';
import { Sign } from '@screens/sign';

const Stack = createNativeStackNavigator();

function AppRoutesOpen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Sign" component={Sign} />
            <Stack.Screen name="HomeStack" component={HomeStack} />
        </Stack.Navigator>
    );
}

export { AppRoutesOpen };
