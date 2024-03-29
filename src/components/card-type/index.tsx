/**
 * IMPORT
 */
import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components/native';
import { formatToBRL } from 'brazilian-values';

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
    const [totalEntradas, setTotalEntradas] = useState(0);

    return (
        <Container
            testID="card-type"
            activeOpacity={0.8}
            isTypeCard={cardData.isTypeCard}>
            <Header isTypeCard={cardData.data.type === 'Total'}>
                <Text
                    testID="title-card-type"
                    text={cardData.data.type}
                    fontFamily={'Poppins-Medium'}
                    color={
                        cardData.data.type === 'Total'
                            ? theme.colors.gray_150
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
                    text={formatToBRL(cardData.data.value)}
                    fontFamily={'Poppins-Medium'}
                    color={
                        cardData.data.type === 'Total'
                            ? theme.colors.gray_150
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
                            ? ''
                            : `Última ${
                                  cardData.data.type === 'Saídas'
                                      ? 'saída'
                                      : 'entrada'
                              } dia ${cardData.data.created_at}`
                    }`}
                    fontFamily={'Poppins-Medium'}
                    color={
                        cardData.data.type === 'Total'
                            ? theme.colors.neutral_25
                            : theme.colors.gray_80
                    }
                    size={12}
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
