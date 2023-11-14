import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from 'src/global/styles/theme/theme';
import { CardType } from '..';

const Providers = ({ children }: any) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

interface ICardTypeProps {
    id: string;
    type: string;
    value: string;
    created_at: string;
}

const dataCardTypeMocked = {
    id: '1',
    type: 'Entradas',
    value: 'R$ 2.998,00',
    created_at: '25 de outubro',
} as ICardTypeProps;

describe('Component card type', () => {
    it('should render', () => {
        render(<CardType isTypeCard={false} data={dataCardTypeMocked} />, {
            wrapper: Providers,
        });
    });

    it('it should be possible to have the title of the card type rendered on screen', () => {
        const { getByTestId } = render(
            <CardType isTypeCard={false} data={dataCardTypeMocked} />,
            {
                wrapper: Providers,
            },
        );

        const elementTitleCardType = getByTestId('title-card-type');

        expect(elementTitleCardType).toBeTruthy();
    });

    it('it should be possible to have the type value of each card rendered on screen', () => {
        const { getByTestId } = render(
            <CardType isTypeCard={false} data={dataCardTypeMocked} />,
            {
                wrapper: Providers,
            },
        );

        const elementTextValueCardType = getByTestId('text-value-card-type');

        expect(elementTextValueCardType).toBeTruthy();
    });

    it('it should be possible to have the type date of each card rendered on screen', () => {
        const { getByTestId } = render(
            <CardType isTypeCard={false} data={dataCardTypeMocked} />,
            {
                wrapper: Providers,
            },
        );

        const elementTextDateCardType = getByTestId('text-date-card-type');

        expect(elementTextDateCardType).toBeTruthy();
    });

    it('it should be possible the cards are rendering an svg type icon', () => {
        const { getByTestId } = render(
            <CardType isTypeCard={false} data={dataCardTypeMocked} />,
            {
                wrapper: Providers,
            },
        );

        const elementCardTypeIconSvg = getByTestId('card-type-icon-svg');

        expect(elementCardTypeIconSvg).toBeTruthy();
    });

    it('it should be possible the total card has a background color with the hex decimal #3416AD', () => {
        const { getByTestId } = render(
            <CardType isTypeCard={true} data={dataCardTypeMocked} />,
            {
                wrapper: Providers,
            },
        );

        const elementCardTypeBackgroundColor = getByTestId('card-type');

        expect(elementCardTypeBackgroundColor).toBeTruthy();
        expect(
            elementCardTypeBackgroundColor.props.style.backgroundColor,
        ).toEqual(theme.colors.neutral_25);
    });

    it('it must be possible for the input and output cards to have a background color with hex decimal #FFFFFF', () => {
        const { getByTestId } = render(
            <CardType isTypeCard={false} data={dataCardTypeMocked} />,
            {
                wrapper: Providers,
            },
        );

        const elementCardTypeBackgroundColor = getByTestId('card-type');

        expect(elementCardTypeBackgroundColor).toBeTruthy();
        expect(
            elementCardTypeBackgroundColor.props.style.backgroundColor,
        ).toEqual(theme.colors.neutral_25);
    });
});
