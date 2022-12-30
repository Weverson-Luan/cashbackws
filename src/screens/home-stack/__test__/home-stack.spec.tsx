import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { HomeStack } from '../';
import theme from 'src/global/styles/theme/theme';

const Providers: React.FC = ({ children }: any) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe('Screen Home', () => {
    it('should render the screen', () => {
        render(<HomeStack onPressNavigationTesting={() => {}} />, {
            wrapper: Providers,
        });
    });

    it('it should be possible to see the users picture on the screen', () => {
        const { getByTestId } = render(
            <HomeStack onPressNavigationTesting={() => {}} />,
            {
                wrapper: Providers,
            },
        );

        const elementProfile = getByTestId('card-profile');

        expect(elementProfile).toBeTruthy();
    });

    it('it should be possible to logout the user by clicking on the power button', () => {
        const onPressLogoutTestingMock = jest.fn();

        const { getByTestId } = render(
            <HomeStack
                onPressNavigationTesting={onPressLogoutTestingMock}
                testing={true}
            />,
            {
                wrapper: Providers,
            },
        );

        const elementButtonLogout = getByTestId('button-logout');

        fireEvent.press(elementButtonLogout);

        expect(onPressLogoutTestingMock).toBeCalled();
    });

    it('it must be possible to view the entries, exits and total cards if it is on screen', () => {
        const { getByTestId } = render(
            <HomeStack onPressNavigationTesting={() => {}} />,
            {
                wrapper: Providers,
            },
        );

        const elementCardsTypes = getByTestId('cards-type');

        expect(elementCardsTypes).toBeTruthy();
    });

    it('it should be possible to view the list of all expenses', () => {
        const { getByTestId } = render(
            <HomeStack onPressNavigationTesting={() => {}} />,
            {
                wrapper: Providers,
            },
        );

        const elementCardsExpenseList = getByTestId('expense-list');

        expect(elementCardsExpenseList).toBeTruthy();
    });
});
