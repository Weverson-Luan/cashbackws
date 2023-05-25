import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import { Sign } from '@screens/sign';

//bottom Tabs
import { Login } from '@screens/login';
import { RecoverPassword } from '@screens/recover-password';
import { RegisterUser } from '@screens/register-user';

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
            <Stack.Screen name="RegisterUser" component={RegisterUser} />
            <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
        </Stack.Navigator>
    );
}

export { AppRoutesOpen };
