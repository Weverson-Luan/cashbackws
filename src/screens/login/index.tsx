/**
 * IMPORT
 */
import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';

// libs
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

// components
import { Text } from '@components/text';
import { Button } from '@components/form/button';
import { Header } from '@components/header';

import { Box } from '@components/box';
import { Input } from '@components/form/input';
import { useAuth } from '../../hooks/use-hook';

// typings

// styles
import { Container } from './styles';
import { Alert } from 'react-native';

const Login = () => {
    const theme = useTheme();
    const { navigate } = useNavigation();
    const { user, signIn } = useAuth();

    const nameSalvo = user?.name;

    const [inputValueIsFocusedName, setInputValueIsFocusedName] =
        useState<boolean>(false);

    const [inputValueIsFocused, setInputValueIsFocused] =
        useState<boolean>(false);

    const [inputValueIsFocusedPassword, setInputValueIsFocusedPassword] =
        useState<boolean>(false);

    const [emailText, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLoginUserEmailAndPassword = async () => {
        if (password && name) {
            setLoading(true);
            const passwordSaved = user.password;
            const nameUserSaved = user.name;

            if (passwordSaved || nameUserSaved?.trim()) {
                if (passwordSaved === password && nameUserSaved === name) {
                    await signIn(emailText, password, name);
                    setLoading(false);
                } else {
                    Alert.alert(
                        'Alerta',
                        'Você informou seu usuário ou senha incorreta, por favor confira e tente novamente.',
                    );
                    setLoading(false);
                }
            } else {
                await signIn(emailText, password, name);
            }
        } else {
            Alert.alert(
                'Alerta',
                'Você não informou um dos campos abaixo por favor confira e tente novamente.',
            );

            if (!emailText) {
                setInputValueIsFocused(true);
            }

            if (!password) {
                setInputValueIsFocusedPassword(true);
            }

            if (!name) {
                setInputValueIsFocusedName(true);
            }
        }
    };

    const handleReturnString = (emailVerify: string) => {
        if (emailVerify) {
            return 'Digite seu usuário';
        } else {
            return 'Como deseja ser chamado?';
        }
    };

    return (
        <>
            <Header title="Login" />
            <Container>
                <Box
                    width={'100%'}
                    alignItems={'flex-start'}
                    justifyContent={'flex-start'}>
                    <Text
                        testID="text-login"
                        text="Estamos quase lá"
                        align="center"
                        fontFamily="Poppins-SemiBold"
                        size={36}
                        width={75}
                        letterHeight={54}
                        marginLeft={-36}
                        marginTop={24}
                    />
                </Box>

                <Box width={'100%'} height={120} mt={4}>
                    <Text
                        testID="text-login"
                        text="Faça seu login para começar uma experiência incrível."
                        align="left"
                        fontFamily="Poppins-Regular"
                        size={15}
                        width={100}
                        letterHeight={24}
                        color={'#7A7A80'}
                    />
                </Box>

                <Box width={'100%'} pr={28} mb={3}>
                    <Input
                        nameIcon={'user'}
                        borderHeight={true}
                        width={'100%'}
                        height={64}
                        border={1}
                        borderColor={
                            inputValueIsFocusedName
                                ? 'blue_cyan_200'
                                : 'neutral_100'
                        }
                        borderRadius={'six'}
                        fontSize={18}
                        placeholder={handleReturnString(nameSalvo!)}
                        placeholderTextColor={theme.colors.gray_80}
                        onBlur={() => setInputValueIsFocusedName(false)}
                        onChangeText={nameText => setName(nameText.trim())}
                        onFocus={() => setInputValueIsFocusedName(true)}
                        keyboardType={'default'}
                        backgroundColor={'neutral_25'}
                        pl={72}
                        color={'gray_90'}
                    />
                </Box>

                {nameSalvo ? (
                    <></>
                ) : (
                    <Box width={'100%'} pr={28}>
                        <Input
                            nameIcon={'email'}
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
                            placeholder={`E-mail`}
                            placeholderTextColor={theme.colors.gray_80}
                            onBlur={() => setInputValueIsFocused(false)}
                            onChangeText={emailText => setEmail(emailText)}
                            onFocus={() => setInputValueIsFocused(true)}
                            keyboardType={'default'}
                            backgroundColor={'neutral_25'}
                            pl={72}
                            color={'gray_90'}
                        />
                    </Box>
                )}

                <Box width={'100%'} height={140} mt={3} pr={28}>
                    <Input
                        nameIcon={'password'}
                        borderHeight={true}
                        width={'100%'}
                        height={64}
                        border={1}
                        borderColor={
                            inputValueIsFocusedPassword
                                ? 'blue_cyan_200'
                                : 'neutral_100'
                        }
                        borderRadius={'six'}
                        fontSize={18}
                        placeholder={`Senha`}
                        placeholderTextColor={theme.colors.gray_80}
                        onBlur={() => setInputValueIsFocusedPassword(false)}
                        onChangeText={passwordText => setPassword(passwordText)}
                        onFocus={() => setInputValueIsFocusedPassword(true)}
                        keyboardType={'default'}
                        backgroundColor={'neutral_25'}
                        pl={72}
                        color={'gray_90'}
                    />
                </Box>

                <Box width={'100%'}>
                    <>
                        <Button
                            testID="app-button-login"
                            activeOpacity={0.8}
                            onPress={() => handleLoginUserEmailAndPassword()}
                            width={300}
                            height={55}
                            background_color={theme.colors.blue_cyan_200}
                            border
                            border_color={theme.colors.neutral_100}
                            border_width={1}
                            marginBottom={16}
                            marginTop={nameSalvo ? 40 : 0}>
                            {loading ? (
                                <ActivityIndicator
                                    size={24}
                                    color={theme.colors.neutral_100}
                                />
                            ) : (
                                <Text
                                    text="Login"
                                    fontFamily="Poppins-Medium"
                                    color={theme.colors.neutral_100}
                                    size={16}
                                    letterHeight={24}
                                    align="center"
                                    width={80}
                                />
                            )}
                        </Button>

                        {!user && (
                            <Button
                                testID="app-button-new-account"
                                activeOpacity={0.8}
                                onPress={() => navigate('RegisterUser')}
                                width={300}
                                height={55}
                                background_color={theme.colors.neutral_25}
                                border
                                border_color={theme.colors.neutral_100}
                                border_width={1}
                                marginBottom={16}>
                                <Text
                                    text="Crie sua conta gratuita"
                                    color={theme.colors.gray_100}
                                    align="center"
                                    fontFamily="Poppins-Regular"
                                    size={16}
                                    letterHeight={24}
                                    width={80}
                                />
                            </Button>
                        )}
                    </>
                </Box>
            </Container>
        </>
    );
};

/**
 * EXPORTS
 */
export { Login };
