import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutesOpen } from '@routes/routes-stack-navigation-open';

function AppRoutes() {
    return (
        <NavigationContainer>
            <AppRoutesOpen />
        </NavigationContainer>
    );
}

export { AppRoutes };
