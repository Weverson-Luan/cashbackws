import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import { HomeStack } from '@screens/home-stack';

const Stack = createNativeStackNavigator();

function AppRoutesOpen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeStack" component={HomeStack} />
        </Stack.Navigator>
    );
}

export { AppRoutesOpen };
