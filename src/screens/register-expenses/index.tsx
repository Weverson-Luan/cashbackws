/**
 * IMPORT
 */
import React, { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import {
    StatusBar,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
} from 'react-native';

import uuid from 'react-native-uuid';
import { Formik } from 'formik';

import {
    ArrowCircleUp,
    ArrowCircleDown,
    FilePlus,
} from 'phosphor-react-native';

// components
import { Box } from '@components/box';
import { Button } from '@components/form/button';
import { DropdownSelect } from '@components/form/select-dropdown';
import { Header } from '@components/header';
import { Input } from '@components/form/input';
import { Text } from '@components/text';

// services / storage
import { storeData, getDataStore } from 'src/services/storage/async-storage';

// schema
import { initialValue, schemaRegister } from './schema';

// typings
import { Props, DataOptions, IDateSaveProps } from './index.d';

// utils
import { categories } from 'src/utils/categories';

// styles
import { Container } from './styles';

const RegisterExpenses = () => {
    const theme = useTheme();
    const navigation = useNavigation();

    const [categoriesOptions, setCategories] = useState(categories as []);
    const [selectType, setSelectType] = useState<Props>();
    const [selectedItemCategory, setSelectedItemCategory] = useState<string>();
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const [inputIsFocused, setInputIsFocused] = useState<boolean>(false);
    const [inputValueIsFocused, setInputValueIsFocused] =
        useState<boolean>(false);

    const [dataAccounts, setDataAccounts] = useState<any[]>([]);

    const handleSelectItem = (nameTypeSelected: string) => {
        if (
            nameTypeSelected === 'Empréstimo 15% - Saia do sufoco' ||
            nameTypeSelected === 'Empréstimo 10% - Saia do aperto'
        ) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const handleRegisterNewItem = async (name, value) => {
        setLoading(true);

        const categoryFound = categories.find(
            item => item.name === selectedItemCategory,
        );
        const validateType =
            (categoryFound?.key === 'outing' && 'outings') ||
            (categoryFound?.key === 'salary' && 'receive') ||
            (categoryFound?.key === 'loan' && 'outings') ||
            (categoryFound?.key === 'leisure' && 'outings') ||
            (categoryFound?.key === 'moto' && 'outings') ||
            (categoryFound?.key === 'food' && 'outings') ||
            (categoryFound?.key === 'purchases' && 'outings');

        const data = {
            id: uuid.v4(),
            amount: value,
            category: categoryFound?.name,
            date: new Date(),
            name,
            type: validateType,
            color: categoryFound?.color,
            description: 'descrição default...',
            accountNumber: dataAccounts.length + 1,
        } as IDateSaveProps;

        const tranformData = [data, ...dataAccounts];

        if (selectType?.type === validateType) {
            storeData('@accounts', JSON.stringify(tranformData));

            setSelectType({ type: 'undefined' });
            setSelectedItemCategory('');
            setCategories(categories => categories);

            setTimeout(() => {
                setLoading(false);
                navigation.navigate('HomeBottomTabs');
            }, 2000);
        } else {
            console.log('kk', selectType?.type, validateType);

            if (validateType === false) {
                Alert.alert(
                    'Aviso',
                    'Você não selecionou uma categoria, por favor para continuar selecione pelo menos uma!',
                );
            } else {
                Alert.alert(
                    'Aviso',
                    'Você selecionou o tipo inválido por favor corriga ENTRADA OU SAIDA',
                );
            }
            setLoading(false);
        }
    };

    const handleAllData = async () => {
        const responseStorage = await getDataStore('@accounts');

        if (responseStorage !== undefined) {
            const responseFormatted = JSON.parse(responseStorage);
            setDataAccounts(responseFormatted);
        }
    };

    useFocusEffect(
        useCallback(() => {
            handleAllData();
        }, [dataAccounts.length]),
    );

    return (
        <>
            <StatusBar barStyle={'light-content'} backgroundColor={'#2D9BB2'} />
            <Formik
                initialValues={initialValue}
                onSubmit={(values, { resetForm }) => {
                    handleRegisterNewItem(values.name, values.value);
                    resetForm();
                }}
                validationSchema={schemaRegister}>
                {({
                    handleChange,
                    handleSubmit,
                    values,
                    errors,
                    handleBlur,
                }) => (
                    <>
                        <Container>
                            <Header title="Cadastro" />

                            <Box width={'100%'} pl={4} pr={4} mt={3}>
                                <>
                                    <Input
                                        label="Nome"
                                        nameIcon={'name'}
                                        width={'100%'}
                                        height={64}
                                        borderHeight={true}
                                        border={1}
                                        borderColor={
                                            inputIsFocused
                                                ? 'blue_cyan_200'
                                                : 'neutral_100'
                                        }
                                        borderRadius={'six'}
                                        fontSize={18}
                                        placeholder="Nome"
                                        placeholderTextColor={
                                            theme.colors.gray_80
                                        }
                                        onChangeText={handleChange('name')}
                                        onFocus={() => setInputIsFocused(true)}
                                        onBlur={() => {
                                            handleBlur('name');
                                            setInputIsFocused(false);
                                        }}
                                        value={values.name}
                                        backgroundColor={'neutral_25'}
                                        pl={72}
                                        color={'gray_90'}
                                    />
                                    {errors.name && (
                                        <Text
                                            text={errors.name}
                                            fontFamily="Poppins-Regular"
                                            color={theme.colors.red_100}
                                            size={12}
                                            letterHeight={24}
                                            align="left"
                                            width={100}
                                            marginLeft={2}
                                            marginTop={2}
                                        />
                                    )}
                                </>
                            </Box>

                            <Box width={'100%'} pl={4} pr={4} mt={3}>
                                <>
                                    <Input
                                        label="Valor"
                                        nameIcon={'money'}
                                        borderHeight={true}
                                        width={'100%'}
                                        height={64}
                                        border={1}
                                        borderColor={
                                            inputValueIsFocused
                                                ? 'blue_cyan_200'
                                                : 'neutral_100'
                                        }
                                        borderRadius={'six'}
                                        fontSize={18}
                                        placeholder={`R$ 00,00`}
                                        placeholderTextColor={
                                            theme.colors.gray_80
                                        }
                                        onBlur={() => {
                                            handleBlur('value');
                                            setInputValueIsFocused(false);
                                        }}
                                        onChangeText={handleChange('value')}
                                        onFocus={() =>
                                            setInputValueIsFocused(true)
                                        }
                                        value={values.value}
                                        keyboardType={'number-pad'}
                                        backgroundColor={'neutral_25'}
                                        pl={72}
                                        color={'gray_90'}
                                    />
                                    {errors.value && (
                                        <Text
                                            text={errors.value}
                                            fontFamily="Poppins-Regular"
                                            color={theme.colors.red_100}
                                            size={12}
                                            letterHeight={24}
                                            align="left"
                                            width={100}
                                            marginLeft={2}
                                            marginTop={2}
                                        />
                                    )}
                                </>
                            </Box>

                            <Box
                                width={'100%'}
                                alignItems={'center'}
                                justifyContent={'space-between'}
                                flexDirection={'row'}
                                mb={2}
                                mt={4}
                                pl={4}
                                pr={4}>
                                <>
                                    <Button
                                        testID="app-button-google"
                                        activeOpacity={0.8}
                                        onPress={() => {
                                            setSelectType({ type: 'receive' });
                                        }}
                                        width={130}
                                        height={55}
                                        background_color={
                                            (selectType?.type === 'receive' &&
                                                theme.colors.green_rgba) ||
                                            theme.colors.neutral_25
                                        }
                                        border
                                        border_color={
                                            (selectType?.type === 'receive' &&
                                                theme.colors.green) ||
                                            theme.colors.gray_80
                                        }
                                        border_width={1}
                                        marginBottom={16}>
                                        <ArrowCircleUp
                                            size={26}
                                            color={theme.colors.green}
                                        />
                                        <Text
                                            text="Entrada"
                                            fontFamily="Poppins-Regular"
                                            color={theme.colors.blue_dark_800}
                                            size={16}
                                            letterHeight={24}
                                            align="center"
                                            width={60}
                                        />
                                    </Button>

                                    <Button
                                        testID="app-button-google"
                                        activeOpacity={0.8}
                                        onPress={() => {
                                            setSelectType({ type: 'outings' });
                                        }}
                                        width={130}
                                        height={55}
                                        background_color={
                                            (selectType?.type === 'outings' &&
                                                theme.colors.red_rgba) ||
                                            theme.colors.neutral_25
                                        }
                                        border
                                        border_color={
                                            (selectType?.type === 'outings' &&
                                                theme.colors.red_50) ||
                                            theme.colors.gray_80
                                        }
                                        border_width={1}
                                        marginBottom={16}>
                                        <ArrowCircleDown
                                            size={26}
                                            color={theme.colors.red_100}
                                        />
                                        <Text
                                            text="Saídas"
                                            fontFamily="Poppins-Regular"
                                            color={theme.colors.blue_dark_800}
                                            size={16}
                                            letterHeight={24}
                                            align="center"
                                            width={60}
                                        />
                                    </Button>
                                </>
                            </Box>

                            {errors.name || errors.value ? null : (
                                <DropdownSelect
                                    dataSelected={categoriesOptions as []}
                                    borderBottomStyle={false}
                                    textPlaceholder="Escolha uma categoria"
                                    dropdownIconPosition="right"
                                    handleOnSelect={(selectedItem, _index) => {
                                        handleSelectItem(selectedItem.name);
                                        setSelectedItemCategory(
                                            selectedItem.name,
                                        );
                                    }}
                                />
                            )}
                        </Container>

                        {/* {isVisible && (
                            <>
                                {inputIsFocused ||
                                inputValueIsFocused === true ? null : (
                                    <Box pl={4} pr={4} mt={63}>
                                        <Box
                                            pl={2}
                                            width={'100%'}
                                            backgroundColor={'neutral_25'}
                                            alignItems={'flex-start'}
                                            height={180}
                                            mb={4}
                                            borderBottomLeftRadius={'eight'}
                                            borderBottomRightRadius={'eight'}>
                                            <>
                                                <Box
                                                    flexDirection={'row'}
                                                    width={240}
                                                    alignItems={'center'}
                                                    mt={2}>
                                                    <>
                                                        <Text
                                                            testID="app-description"
                                                            text="Valor a pagar será:"
                                                            fontFamily="Poppins-Medium"
                                                            color={
                                                                theme.colors
                                                                    .blue_dark_800
                                                            }
                                                            size={16}
                                                            letterHeight={24}
                                                            align="left"
                                                        />
                                                        <Text
                                                            testID="app-description"
                                                            text="R$ 200,87"
                                                            fontFamily="Poppins-Regular"
                                                            color={
                                                                theme.colors
                                                                    .blue_dark_800
                                                            }
                                                            size={14}
                                                            align="left"
                                                            width={100}
                                                            marginLeft={-22}
                                                        />
                                                    </>
                                                </Box>

                                                <Box
                                                    flexDirection={'row'}
                                                    width={240}
                                                    alignItems={'center'}
                                                    mt={2}>
                                                    <>
                                                        <Text
                                                            testID="app-description"
                                                            text="Pagamento dia:"
                                                            fontFamily="Poppins-Medium"
                                                            color={
                                                                theme.colors
                                                                    .blue_dark_800
                                                            }
                                                            size={14}
                                                            letterHeight={24}
                                                            align="left"
                                                        />
                                                        <Text
                                                            testID="app-description"
                                                            text="01/06/2023 ás 15hrs"
                                                            fontFamily="Poppins-Regular"
                                                            color={
                                                                theme.colors
                                                                    .blue_dark_800
                                                            }
                                                            size={12}
                                                            align="left"
                                                            width={100}
                                                            marginLeft={-70}
                                                        />
                                                    </>
                                                </Box>

                                                <TouchableOpacity>
                                                    <Box
                                                        flexDirection={'row'}
                                                        width={240}
                                                        alignItems={'center'}
                                                        mt={2}>
                                                        <>
                                                            <Text
                                                                testID="app-description"
                                                                text="Observação:"
                                                                fontFamily="Poppins-Medium"
                                                                color={
                                                                    theme.colors
                                                                        .red_50
                                                                }
                                                                size={14}
                                                                letterHeight={
                                                                    24
                                                                }
                                                                align="left"
                                                                width={60}
                                                            />
                                                            <Text
                                                                testID="app-description"
                                                                text="Olá, Luan após o vencimento, é cobrado um valor de multa ao dia que custa R$ 5,00 Ok"
                                                                fontFamily="Poppins-Regular"
                                                                color={
                                                                    theme.colors
                                                                        .blue_dark_800
                                                                }
                                                                size={12}
                                                                align="left"
                                                                width={90}
                                                                marginLeft={-10}
                                                            />
                                                        </>
                                                    </Box>
                                                </TouchableOpacity>
                                            </>
                                        </Box>
                                    </Box>
                                )}
                            </>
                        )} */}

                        <Box pl={4} pr={4}>
                            <Button
                                testID="app-button-register"
                                activeOpacity={0.8}
                                onPress={() => {
                                    handleSubmit();
                                }}
                                width={290}
                                height={55}
                                background_color={theme.colors.purple_300}
                                border
                                border_color={theme.colors.gray_80}
                                border_width={1}
                                marginBottom={16}>
                                {loading ? (
                                    <ActivityIndicator
                                        color={'#fff'}
                                        size={28}
                                    />
                                ) : (
                                    <>
                                        <FilePlus
                                            size={26}
                                            color={theme.colors.neutral_25}
                                        />
                                        <Text
                                            text="REGISTRAR"
                                            fontFamily="Poppins-SemiBold"
                                            color={theme.colors.neutral_25}
                                            size={16}
                                            letterHeight={24}
                                            align="center"
                                            width={60}
                                        />
                                    </>
                                )}
                            </Button>
                        </Box>
                    </>
                )}
            </Formik>
        </>
    );
};

/**
 * EXPORTS
 */
export { RegisterExpenses };
