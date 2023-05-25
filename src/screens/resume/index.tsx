/**
 * IMPORT
 */
import React, { useCallback, useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { useTheme } from 'styled-components';
import { useFocusEffect } from '@react-navigation/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { addMonths, subMonths, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { VictoryPie } from 'victory-native';

// components
import { Text } from '@components/text';
import { CardHistory } from '@components/card-history';
import { Header } from '@components/header';

// services
import { getDataStore } from 'src/services/storage/async-storage';

// typings
import { DataApi, IDateSaveProps, DataAccountStorage } from './index.d';

// utils
import { categories } from 'src/utils/categories';

// styles
import {
    Container,
    WrapperLoading,
    MonthSelect,
    MonthSelectButton,
    MonthSelectIconLeft,
    Month,
    MonthSelectIconRight,
} from './styles';

const Resume = () => {
    const theme = useTheme();

    const BottomTabBarHeight = useBottomTabBarHeight();

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [dataApiCategory, setDataApi] = useState<IDateSaveProps[]>([]);

    const [loading, setLoading] = useState(false);

    const handleGetAllAccounts = async () => {
        try {
            setLoading(true);
            const result = await getDataStore('@accounts');
            const data = result ? JSON.parse(result) : result;

            const expensives = data.filter(
                (expensive: DataAccountStorage) =>
                    expensive.type === 'outings' &&
                    new Date(expensive.date).getMonth() ===
                        selectedDate.getMonth() &&
                    new Date(expensive.date).getFullYear() ===
                        selectedDate.getFullYear(),
            );

            // somando total de todas categorias
            const somaTotal = expensives.reduce(
                (acumulado: number, expensive: DataAccountStorage) => {
                    return acumulado + Number(expensive.amount);
                },
                0,
            );

            const totalByCategory: DataApi[] = [];

            // // for each não devolver um objeto
            categories.forEach(category => {
                let categorySum = 0;

                expensives.forEach(expensi => {
                    if (expensi.category === category.name) {
                        categorySum += Number(expensi.amount);
                    }
                });

                if (categorySum > 0) {
                    let total = categorySum.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    });

                    const percent = `${(
                        (categorySum / somaTotal) *
                        100
                    ).toFixed(2)}%`;

                    totalByCategory.push({
                        key: category.key,
                        name: category.name,
                        color: category.color,
                        total: categorySum,
                        totalFormatted: total,
                        percent,
                    });
                }
            });
            //@ts-ignore
            setDataApi(totalByCategory);
        } catch (error) {
            // tratamento de error e mostrar o toash-messa
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 200);
        }
    };

    const handleDateChange = (action: 'next' | 'prev') => {
        if (action === 'next') {
            const newDate = addMonths(selectedDate, 1);
            setSelectedDate(newDate);
        } else {
            const newDate = subMonths(selectedDate, 1);
            setSelectedDate(newDate);
        }
    };

    useFocusEffect(
        useCallback(() => {
            handleGetAllAccounts();
        }, [dataApiCategory.length, selectedDate]),
    );

    return (
        <>
            <Header title="Resumo por categoria" />
            <MonthSelect>
                <MonthSelectButton onPress={() => handleDateChange('prev')}>
                    <MonthSelectIconLeft />
                </MonthSelectButton>

                <Month>
                    {format(selectedDate, 'MMMM, yyyy', {
                        locale: ptBR,
                    })}
                </Month>

                <MonthSelectButton onPress={() => handleDateChange('next')}>
                    <MonthSelectIconRight />
                </MonthSelectButton>
            </MonthSelect>

            <>
                <>
                    {dataApiCategory.length === 0 ? (
                        <WrapperLoading>
                            <Text
                                text={'Você não possui categorias'}
                                fontFamily={'Poppins-Medium'}
                                color={theme.colors.gray_150}
                                size={14}
                                letterHeight={26}
                                weight="400"
                                align="center"
                            />
                        </WrapperLoading>
                    ) : (
                        <Container>
                            {loading ? (
                                <WrapperLoading>
                                    <Text
                                        text="Carregando..."
                                        fontFamily={'Poppins-Regular'}
                                        color={theme.colors.gray_150}
                                        size={17}
                                        letterHeight={32}
                                        marginTop={40}
                                        align="center"
                                    />
                                    <ActivityIndicator
                                        size={28}
                                        color={theme.colors.gray_150}
                                    />
                                </WrapperLoading>
                            ) : (
                                <>
                                    <VictoryPie
                                        data={dataApiCategory}
                                        x={'percent'}
                                        y={'total'}
                                        labelRadius={90}
                                        colorScale={dataApiCategory.map(
                                            category => category.color!,
                                        )}
                                        style={{
                                            labels: {
                                                fontSize: 16,
                                                fontWeight: 'bold',
                                                fill: '#fff',
                                            },
                                        }}
                                    />
                                    {dataApiCategory.length > 0 ? (
                                        <ScrollView
                                            style={{ width: '100%' }}
                                            showsVerticalScrollIndicator={false}
                                            contentContainerStyle={{
                                                paddingHorizontal: 24,
                                                paddingBottom:
                                                    BottomTabBarHeight,
                                            }}>
                                            {dataApiCategory.map(item => (
                                                <CardHistory
                                                    key={String(Math.random())}
                                                    title={item.name}
                                                    amount={
                                                        item.totalFormatted!
                                                    }
                                                    color={item.color!}
                                                />
                                            ))}
                                        </ScrollView>
                                    ) : (
                                        <></>
                                    )}
                                </>
                            )}
                        </Container>
                    )}
                </>
            </>
        </>
    );
};

/**
 * EXPORTS
 */
export { Resume };
