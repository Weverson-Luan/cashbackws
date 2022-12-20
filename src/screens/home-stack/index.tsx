/**
 * IMPORT
 */
import React from 'react';
// libs

// components
import { CardType } from '@components/card-type';
import { Profile } from '@components/profile';
import { SpendingCard } from '@components/spending-card';

// assets

// typings
import { ICardTypeProps } from './index.d';

// styles
import {
    Container,
    Header,
    ContainerContent,
    WrapperContentType,
    FlatList,
} from './styles';

const HomeStack = () => {
    const data = [
        { id: '1', type: 'Entradas', value: 'R$ 2.998,00' },
        { id: '2', type: 'Saídas', value: 'R$ 998,00' },
        { id: '3', type: 'Total', value: 'R$ 3.998,00' },
    ] as ICardTypeProps[];
    return (
        <Container>
            <Header>
                <Profile
                    file_url="https://lh3.googleusercontent.com/a/AEdFTp4wEuBiuNUcieS-oL_C80vIwXMi6sUUrywskRG-=s288-p-rw-no"
                    name="Weverson"
                />
            </Header>

            <ContainerContent>
                <SpendingCard />
            </ContainerContent>

            <WrapperContentType>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }: any) => <CardType data={item} />}
                />
            </WrapperContentType>
        </Container>
    );
};

/**
 * EXPORTS
 */
export { HomeStack };
