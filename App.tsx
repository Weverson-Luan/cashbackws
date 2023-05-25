import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme/theme';

import { AppRoutes } from '@routes/index.routes';
import { StatusBar } from 'react-native';

import { UserProvider } from './src/context/user/user';

const App: React.FC = () => {
    return (
        <UserProvider>
            <ThemeProvider theme={theme}>
                <StatusBar
                    barStyle={'light-content'}
                    backgroundColor={'#2D9BB2'}
                />
                <AppRoutes />
            </ThemeProvider>
        </UserProvider>
    );
};

export { App };
