/**
 * IMPORT
 */
import React from 'react';
import { useTheme } from 'styled-components/native';

// components
import { Text } from '@components/text';

// assets
import CashSvg from '../../assets/icons-svg/cash.svg';

// typings
import { ICardTypeProps } from './index.d';

// styles
import { Container, Header, WrapperText } from './styles';

const CardType = (cardData: ICardTypeProps) => {
    const theme = useTheme();

    return (
        <Container activeOpacity={0.8}>
            <Header>
                <Text
                    text={cardData.data.type}
                    fontFamily="Raleway-Bold"
                    color={theme.colors.blue_dark_800}
                    size={18}
                    letterHeight={26}
                    weight="400"
                    align="left"
                />

                <CashSvg width={28} height={28} />
            </Header>

            <WrapperText>
                <Text
                    text={cardData.data.value}
                    fontFamily="Raleway-Bold"
                    color={
                        cardData.data.type === 'Saídas'
                            ? theme.colors.red_50
                            : theme.colors.blue_dark_800
                    }
                    size={18}
                    letterHeight={26}
                    weight="700"
                    align="left"
                />

                <Text
                    text="Última entradas dia 03 de novenbro"
                    fontFamily="Raleway-Bold"
                    color={theme.colors.gray_80}
                    size={14}
                    letterHeight={26}
                    weight="300"
                    align="left"
                />
            </WrapperText>
        </Container>
    );
};

/**
 * EXPORTS
 */
export { CardType };
