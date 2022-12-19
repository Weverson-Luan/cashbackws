import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { Sign } from '@screens/sign';

import theme from 'src/global/styles/theme/theme';

const Providers: React.FC = ({ children }: any) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
describe('Screen Sign', () => {
    it('it should be able to render the sign screen', () => {
        render(<Sign />, {
            wrapper: Providers,
        });
    });

    it('it should be possible to render the app logo on screen', () => {
        const { getByTestId } = render(<Sign />, {
            wrapper: Providers,
        });

        const elementLogoSvg = getByTestId('app-logo');

        expect(elementLogoSvg).toBeTruthy();
    });

    it('it should be possible to render the app title on screen', () => {
        const { getByTestId } = render(<Sign />, {
            wrapper: Providers,
        });

        const elementTitle = getByTestId('app-title');

        expect(elementTitle).toBeTruthy();

        expect(elementTitle.props.children).toEqual([
            ' ',
            'Controle seus Gastos de forma muito simples.',
        ]);
    });

    it('it should be possible to render the app description on screen', () => {
        const { getByTestId } = render(<Sign />, {
            wrapper: Providers,
        });

        const elementDescription = getByTestId('app-description');

        expect(elementDescription).toBeTruthy();

        expect(elementDescription.props.children).toEqual([
            ' ',
            'Faça seu login com uma conta google ou github abaixo',
        ]);
    });

    it('it should be possible to render the app button-google on screen', () => {
        const { getByTestId } = render(<Sign />, {
            wrapper: Providers,
        });

        const elementButtonGoogle = getByTestId('app-button-google');

        expect(elementButtonGoogle).toBeTruthy();
    });

    it('it should be possible to render the app button-github on screen', () => {
        const { getByTestId } = render(<Sign />, {
            wrapper: Providers,
        });

        const elementButtonGithub = getByTestId('app-button-github');

        expect(elementButtonGithub).toBeTruthy();
    });
});
