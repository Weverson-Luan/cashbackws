/**
 * IMPORT
 */
import React, { useCallback, useState } from 'react';
import {
    ActivityIndicator,
    View,
    Alert,
    PermissionsAndroid,
} from 'react-native';
import { useTheme } from 'styled-components';

// libs
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { format, max, getMonth, addMonths } from 'date-fns';
import { launchImageLibrary } from 'react-native-image-picker';

// components
import { CardType } from '@components/card-type';
import { Profile } from '@components/profile';
import { SpendingCard } from '@components/spending-card';
import { Text } from '@components/text';

// services / storage
import {
    getDataStore,
    removeDataStore,
    storeData,
} from 'src/services/storage/async-storage';

// assets
import LogoutSvg from '../../assets/icons-svg/power.svg';

// utlis
import { handleReturnMonthOfYear } from 'src/utils/return-month-of-year';

// typings
import { ICardTypeProps, IHomeStackProps } from './index.d';

import { useAuth } from '../../hooks/use-hook';

// styles
import {
    Container,
    Header,
    WrapperIcon,
    ContainerContent,
    WrapperContentType,
    FlatList,
} from './styles';
import { IMAGE_DEFAULT } from 'src/commons/constants';

const HomeStack = ({
    onPressNavigationTesting = () => {},
    testing,
}: IHomeStackProps) => {
    const navigation = useNavigation();
    const theme = useTheme();
    const { user, signOut, handleGetUser } = useAuth();

    const [dataAccounts, setDataAccounts] = useState<any[]>([]);
    const [temp, setTemp] = useState<ICardTypeProps[]>([]);
    const [loading, setLoading] = useState(false);

    const data = [
        {
            id: '1',
            type: 'Entradas',
            value: '',
            created_at: '',
        },
        {
            id: '2',
            type: 'Saídas',
            value: '',
            created_at: '',
        },
        {
            id: '3',
            type: 'Total',
            value: '',
            created_at: '',
        },
    ] as ICardTypeProps[];

    const handleLogout = useCallback(async () => {
        if (testing) {
            onPressNavigationTesting();
            navigation.navigate('Sign');
        } else {
            Alert.alert(
                'Sair do App',
                'Você quer sair do aplicativo ou deseja excluir sua conta ?',
                [
                    {
                        text: 'Sair',
                        onPress: async () => {
                            await signOut(true);
                        },
                        style: 'cancel',
                    },
                    {
                        text: 'Excluir',
                        onPress: async () => {
                            await signOut(false);
                        },
                    },
                ],
            );
        }
    }, []);

    const handleAllData = async () => {
        try {
            setLoading(true);
            const responseStorage = await getDataStore('@accounts');

            if (responseStorage !== undefined) {
                const responseFormatted = JSON.parse(responseStorage);
                setDataAccounts(responseFormatted);
            }
        } catch (error) {
            // tratamento de error e mostrar o toash-messa
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 200);
        }
    };

    const handleTransactions = async () => {
        const newCreatedAt = [] as Date[];
        const newCreatedAtOutings = [] as Date[];
        let somuReceive = 0;
        let somuTotalOutings = 0;

        for (let entradasAndSaidas of dataAccounts) {
            if (entradasAndSaidas.type === 'receive') {
                const buscar: any = dataAccounts.filter(
                    item => item.type === entradasAndSaidas.type,
                );

                const filteredTotal = buscar.reduce(
                    (acumulado: number, expensive: any) => {
                        return acumulado + Number(expensive.amount);
                    },
                    0,
                );

                somuReceive = filteredTotal;
                const { date } = entradasAndSaidas;

                newCreatedAt.push(new Date(date));
            }

            /**
             * TODAS AS SAIDAS DO APP
             */
            if (entradasAndSaidas.type === 'outings') {
                const buscarSaidas: any = dataAccounts.filter(
                    item => item.type === entradasAndSaidas.type,
                );

                const filteredTotalSaidas = buscarSaidas.reduce(
                    (acumulado: number, expensive: any) => {
                        return acumulado + Number(expensive.amount);
                    },
                    0,
                );

                somuTotalOutings = filteredTotalSaidas;
                const { date } = entradasAndSaidas;

                newCreatedAtOutings.push(new Date(date));
            }
        }

        (data[0].value = String(somuReceive)), setTemp(data); // entradas
        (data[1].value = String(somuTotalOutings)), setTemp(data); // saidas

        const resultDateReceive = max(newCreatedAt);

        if (isNaN(getMonth(resultDateReceive))) {
            // quando vier como Nan iremos fazer nd
        } else {
            const monthReceiveNumber = getMonth(
                addMonths(resultDateReceive, 1), // adicionado um dia por causa do horaio americano
            );

            const resultMonthReceive =
                handleReturnMonthOfYear(monthReceiveNumber); /// enviando numero do mes e obetendo o mes em si

            data[0].created_at = `${
                resultDateReceive && format(resultDateReceive, "d' de' ")
            }${resultMonthReceive}`;
        }

        const resultDateOutings = max(newCreatedAtOutings);

        if (isNaN(getMonth(resultDateOutings))) {
            // quando o resultDateOutings vier como Nan iremos fazer nd
        } else {
            const monthOutingsNumber = getMonth(
                addMonths(resultDateOutings, 1),
            ); // adicionado um dia por causa do horaio americano

            const resultMonthOutings =
                handleReturnMonthOfYear(monthOutingsNumber); // enviando numero do mes e obetendo o mes em si

            data[1].created_at = `${
                resultDateOutings && format(resultDateOutings, "d' de' ")
            }${resultMonthOutings}`;
        }

        data[2].value = String(somuReceive - somuTotalOutings);

        /**
         * TOTAL
         */
    };

    const pickImage = async () => {
        await launchImageLibrary(
            { mediaType: 'photo', quality: 1, selectionLimit: 1 },
            async (response: any) => {
                if (!response.didCancel) {
                    const uri = response?.assets[0]?.uri;
                    setLoading(true);
                    const userSaveInStorage = await getDataStore('@user');

                    const user = {
                        ...(userSaveInStorage
                            ? JSON.parse(userSaveInStorage)
                            : null),
                        avatar: uri,
                    } as any;
                    storeData('@user', JSON.stringify(user));
                    await handleGetUser();
                    setLoading(false);
                }
            },
        );
    };
    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Cool Photo App Camera Permission',
                    message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };
    useFocusEffect(
        useCallback(() => {
            requestCameraPermission();
            handleAllData();
            handleTransactions();
        }, [dataAccounts.length]),
    );

    return (
        <Container>
            <Header>
                <Profile
                    onPress={() => {
                        pickImage();
                    }}
                    testID="card-profile"
                    file_url={user.avatar ? user.avatar : IMAGE_DEFAULT}
                    name={user.name!}
                />
                <WrapperIcon
                    testID="button-logout"
                    onPress={() => {
                        handleLogout();
                    }}>
                    <LogoutSvg width={28} height={28} />
                </WrapperIcon>
            </Header>

            {!loading ? (
                <ContainerContent>
                    <SpendingCard testID="cards-type" data={dataAccounts} />
                </ContainerContent>
            ) : (
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text
                        text="Carregando..."
                        fontFamily={'Poppins-Regular'}
                        color={theme.colors.gray_150}
                        size={17}
                        letterHeight={32}
                        marginTop={40}
                        align="left"
                    />
                    <ActivityIndicator
                        size={28}
                        color={theme.colors.gray_150}
                    />
                </View>
            )}
            <WrapperContentType>
                <FlatList
                    testID="expense-list"
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={temp}
                    keyExtractor={(item: any) => String(Math.random())}
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
