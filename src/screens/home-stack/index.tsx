/**
 * IMPORT
 */
import React, { useCallback } from 'react';

// libs
import { useNavigation } from '@react-navigation/native';

// components
import { CardType } from '@components/card-type';
import { Profile } from '@components/profile';
import { SpendingCard } from '@components/spending-card';

// assets
import LogoutSvg from '../../assets/icons-svg/power.svg';

// typings
import { ICardTypeProps } from './index.d';

// styles
import {
    Container,
    Header,
    WrapperIcon,
    ContainerContent,
    WrapperContentType,
    FlatList,
} from './styles';

interface IHomeStackProps {
    onPressNavigationTesting: () => void; // function for testing
    testing?: boolean;
}

const HomeStack = ({ onPressNavigationTesting, testing }: IHomeStackProps) => {
    const navigation = useNavigation();

    const data = [
        {
            id: '1',
            type: 'Entradas',
            value: 'R$ 2.998,00',
            created_at: '25 de outubro',
        },
        {
            id: '2',
            type: 'Saídas',
            value: 'R$ 998,00',
            created_at: '13 de abril',
        },
        {
            id: '3',
            type: 'Total',
            value: 'R$ 3.998,00',
            created_at: '21 de dezembro',
        },
    ] as ICardTypeProps[];

    const handleLogout = useCallback(() => {
        if (testing) {
            onPressNavigationTesting();
            navigation.navigate('Sign');
        } else {
            navigation.navigate('Sign');
        }
    }, []);
    return (
        <Container>
            <Header>
                <Profile
                    testID="card-profile"
                    file_url="https://lh3.googleusercontent.com/a/AEdFTp4wEuBiuNUcieS-oL_C80vIwXMi6sUUrywskRG-=s288-p-rw-no"
                    name="Weverson"
                />
                <WrapperIcon
                    testID="button-logout"
                    onPress={() => {
                        handleLogout();
                    }}>
                    <LogoutSvg width={28} height={28} />
                </WrapperIcon>
            </Header>

            <ContainerContent>
                <SpendingCard testID="cards-type" />
            </ContainerContent>

            <WrapperContentType>
                <FlatList
                    testID="expense-list"
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    keyExtractor={(item: any) => String(item.id)}
                    renderItem={({ item }: any) => (
                        <CardType
                            isTypeCard={item.type === 'Total'}
                            data={item}
                        />
                    )}
                />
            </WrapperContentType>
        </Container>
    );
};

/**
 * EXPORTS
 */
export { HomeStack };
