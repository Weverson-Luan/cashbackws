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
        <Container
            testID="card-type"
            activeOpacity={0.8}
            isTypeCard={cardData.isTypeCard}>
            <Header isTypeCard={cardData.data.type === 'Total'}>
                <Text
                    testID="title-card-type"
                    text={cardData.data.type}
                    fontFamily={theme.fonts.primary_poppins_regular_400}
                    color={
                        cardData.data.type === 'Total'
                            ? theme.colors.neutral_25
                            : theme.colors.gray_150
                    }
                    size={18}
                    letterHeight={26}
                    weight="400"
                    align="left"
                />

                {cardData.data.type === 'Saídas' ? (
                    <CashExitSvg
                        width={28}
                        height={28}
                        testID="card-type-icon-svg"
                    />
                ) : (
                    <CashSvg
                        width={28}
                        height={28}
                        testID="card-type-icon-svg"
                    />
                )}
            </Header>

            <WrapperText>
                <Text
                    testID="text-value-card-type"
                    text={cardData.data.value}
                    fontFamily={theme.fonts.primary_poppins_medium_500}
                    color={
                        cardData.data.type === 'Total'
                            ? theme.colors.neutral_25
                            : theme.colors.gray_150
                    }
                    size={18}
                    letterHeight={26}
                    align="left"
                />

                <Text
                    testID="text-date-card-type"
                    text={`${
                        cardData.data.type === 'Total'
                            ? '01 a 17 de dezembro'
                            : `Última ${
                                  cardData.data.type === 'Saídas'
                                      ? 'saída'
                                      : 'entrada'
                              } dia ${cardData.data.created_at}`
                    }`}
                    fontFamily={theme.fonts.primary_poppins_regular_400}
                    color={
                        cardData.data.type === 'Total'
                            ? theme.colors.neutral_25
                            : theme.colors.gray_80
                    }
                    size={13}
                    letterHeight={26}
                    weight="300"
                    align="left"
                    marginTop={4}
                />
            </WrapperText>
        </Container>
    );
};

/**
 * EXPORTS
 */
export { CardType };
