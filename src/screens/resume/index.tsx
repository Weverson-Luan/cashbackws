/**
 * IMPORT
 */
import React, { useEffect, useState } from 'react';

// components
import { Text } from '@components/text';

// assets

// typings

// styles
import { Container } from './styles';
import { useTheme } from 'styled-components';
import { Header } from '@components/header';

import { VictoryPie } from 'victory-native';
import { categories } from 'src/utils/categories';
import { ScrollView } from 'react-native';
import { CardHistory } from '@components/card-history';
import { IDateSaveProps } from './index.d';
interface TransactionDate {
    type: 'positive' | 'negative';
    name: string;
    amount: string;
    category: string;
    date: string;
}

interface DataApi {
    key?: string;
    name: string;
    total: number;
    totalFormatted?: string;
    percent: string;
    color?: string;
}

const Resume = () => {
    const theme = useTheme();

    const [dataApiCategory, setDataApi] = useState<IDateSaveProps[]>([]);
    const handle = () => {
        const data = [
            {
                id: '1',
                type: 'positive',
                name: 'Frella',
                date: '2023-04-12T17:31:55.471',
                amount: 4053,
                category: 'purchases',
            },
            {
                id: '2',
                type: 'negative',
                name: 'Lanche',
                date: '2023-04-12T17:31:55.471',
                amount: 45,
                category: 'purchases',
            },
            {
                id: '3',
                type: 'positive',
                name: 'Salário',
                date: '2023-05-12T17:31:55.471',
                amount: 633,
                category: 'salary',
            },
        ];

        const expensives = data.filter(
            expensive => expensive.type === 'positive',
        );

        // somando total de todas categorias
        const somaTotal = expensives.reduce((acumulado, expensive) => {
            return acumulado + expensive.amount;
        }, 0);

        const totalByCategory: DataApi[] = [];

        // for each não devolver um objeto
        categories.forEach(category => {
            let categorySum = 0;

            expensives.forEach(expensi => {
                if (expensi.category === category.key) {
                    categorySum += Number(expensi.amount);
                }
            });

            if (categorySum > 0) {
                let total = categorySum.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                });

                const percent = `${((categorySum / somaTotal) * 100).toFixed(
                    2,
                )}%`;

                totalByCategory.push({
                    key: category.key,
                    name: category.name,
                    color: category.color,
                    total: categorySum,
                    totalFormatted: total,
                    percent,
                });
            }

            // setDataApi(totalByCategory);
        });
    };

    useEffect(() => {
        handle();
    }, []);
    return (
        <Container>
            <Header title="Todos Resumo" />
            <VictoryPie
                data={dataApiCategory}
                x={'percent'}
                y={'total'}
                labelRadius={90}
                colorScale={dataApiCategory.map(category => category.color!)}
                style={{
                    labels: {
                        fontSize: 16,
                        fontWeight: 'bold',
                        fill: '#fff',
                    },
                }}
            />

            <ScrollView
                style={{ width: '100%' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    paddingBottom: 16,
                }}>
                {dataApiCategory.map(item => (
                    <CardHistory
                        key={item.id}
                        title={item.name}
                        value={item.amount!}
                        color={item.color!}
                    />
                ))}
            </ScrollView>
        </Container>
    );
};

/**
 * EXPORTS
 */
export { Resume };
