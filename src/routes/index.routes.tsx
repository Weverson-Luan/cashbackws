import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AppRoutesOpen } from '@routes/routes-stack-navigation-open';
import { AppRoutesAuth } from '@routes/routes-stack-navigation-auth';

import { useAuth } from '../hooks/use-hook';

function AppRoutes() {
    const { user } = useAuth();
    console.log('**', user);

    useEffect(() => {
        console.log('**', user);
    }, []);
    return (
        <NavigationContainer>
            {user.isLoggedIn ? <AppRoutesAuth /> : <AppRoutesOpen />}
        </NavigationContainer>
    );
}

export { AppRoutes };
