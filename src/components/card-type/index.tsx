/**
 * IMPORT
 */
import React from 'react';
import { useTheme } from 'styled-components/native';

// components
import { Text } from '@components/text';

// assets
import CashSvg from '../../assets/icons-svg/entry.svg';
import CashExitSvg from '../../assets/icons-svg/entry-danger.svg';

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
                    color={theme.colors.gray_150}
                    size={18}
                    letterHeight={26}
                    weight="400"
                    align="left"
                />

                {cardData.data.type === 'Saídas' ? (
                    <CashExitSvg width={28} height={28} />
                ) : (
                    <CashSvg width={28} height={28} />
                )}
            </Header>

            <WrapperText>
                <Text
                    text={cardData.data.value}
                    fontFamily="Raleway-Bold"
                    color={
                        cardData.data.type === 'Saídas'
                            ? theme.colors.red_50
                            : theme.colors.gray_150
                    }
                    size={18}
                    letterHeight={26}
                    weight="700"
                    align="left"
                />

                <Text
                    text="Última entrada dia 03 de novenbro"
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
