import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AppRoutesOpen } from '@routes/routes-stack-navigation-open';
import { AppRoutesAuth } from '@routes/routes-stack-navigation-auth';

function AppRoutes() {
    const user = false;
    return (
        <NavigationContainer>
            {user ? <AppRoutesAuth /> : <AppRoutesOpen />}
        </NavigationContainer>
    );
}

export { AppRoutes };
