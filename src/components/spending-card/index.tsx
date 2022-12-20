/**
 * IMPORT
 */
import React from 'react';
import { useTheme } from 'styled-components';

// components
import { Text } from '@components/text';

// assets
import CashSvg from '../../assets/icons-svg/cash.svg';
import CashExitSvg from '../../assets/icons-svg/cash-exit.svg';

// typings

// styles
import {
    Container,
    Header,
    ContainerSpending,
    HeaderSpending,
    WrapperText,
    WrapperTextFooterDate,
    FlatList,
} from './styles';

const SpendingCard = () => {
    const theme = useTheme();

    const data = [
        {
            id: '1',
            name: 'Desenvolvimento de sistema',
            category: 'Vendas',
            type: 'entrada',
            value: 'R$ 5.500,00',
            date: '10/12/2022',
        },
        {
            id: '2',
            name: 'Teclado Hiper',
            category: 'Saídas',
            type: 'saída',
            value: 'R$ 998,00',
            date: '16/12/2022',
        },
        {
            id: '3',
            name: 'Notebook Acer aspire',
            category: 'computador',
            type: 'saída',
            value: 'R$ 3.998,00',
            date: '10/12/2022',
        },
    ];
    return (
        <Container>
            <Header>
                <Text
                    text="Meus Gastos"
                    fontFamily="Raleway-Bold"
                    color={theme.colors.blue_dark_800}
                    size={22}
                    letterHeight={32}
                    weight="700"
                    marginTop={50}
                    align="left"
                />
                {/* <Text
                    text="😢"
                    fontFamily="Raleway-Bold"
                    color={theme.colors.blue_dark_800}
                    size={22}
                    letterHeight={32}
                    weight="700"
                    marginTop={50}
                    align="left"
                /> */}
            </Header>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ContainerSpending activeOpacity={0.8}>
                        <HeaderSpending>
                            <Text
                                text={item.name}
                                fontFamily="Raleway-Bold"
                                color={'#363F5F'}
                                size={16}
                                letterHeight={26}
                                weight="400"
                                align="left"
                            />
                            {item.type === 'saída' ? (
                                <CashExitSvg width={28} height={28} />
                            ) : (
                                <CashSvg width={28} height={28} />
                            )}
                        </HeaderSpending>

                        <WrapperText>
                            <Text
                                text={
                                    item.type === 'saída'
                                        ? `- ${item.value}`
                                        : item.value
                                }
                                fontFamily="Raleway-Bold"
                                color={
                                    item.type === 'saída'
                                        ? theme.colors.red_100
                                        : theme.colors.green
                                }
                                size={18}
                                letterHeight={26}
                                weight="400"
                                align="left"
                            />

                            <WrapperTextFooterDate>
                                <Text
                                    text={
                                        item.category === 'Saídas'
                                            ? `- ${item.category}`
                                            : `$ ${item.value}`
                                    }
                                    fontFamily="Raleway-Bold"
                                    color={theme.colors.gray_80}
                                    size={14}
                                    letterHeight={26}
                                    weight="300"
                                    align="left"
                                />

                                <Text
                                    text="22/12/2022"
                                    fontFamily="Raleway-Bold"
                                    color={theme.colors.gray_80}
                                    size={14}
                                    letterHeight={26}
                                    weight="300"
                                    align="left"
                                />
                            </WrapperTextFooterDate>
                        </WrapperText>
                    </ContainerSpending>
                )}
            />
        </Container>
    );
};

/**
 * EXPORTS
 */
export { SpendingCard };
