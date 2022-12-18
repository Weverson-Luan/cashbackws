import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme/theme';

import { HomeStack } from '@screens/home-stack';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <HomeStack />
        </ThemeProvider>
    );
};

export { App };
