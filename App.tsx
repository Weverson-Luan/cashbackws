import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme/theme';

import { AppRoutes } from '@routes/index.routes';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppRoutes />
        </ThemeProvider>
    );
};

export { App };
