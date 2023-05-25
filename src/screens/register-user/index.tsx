/**
 * IMPORT
 */
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
// libs
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

// components
import { Text } from '@components/text';
import { Button } from '@components/form/button';
import { Header } from '@components/header';

// typings

// styles
import { Container } from './styles';
import { Box } from '@components/box';
import { Input } from '@components/form/input';

const RegisterUser = () => {
    const theme = useTheme();
    const { navigate } = useNavigation();

    const [inputValueIsFocused, setInputValueIsFocused] =
        useState<boolean>(false);

    const [inputValueIsFocusedPassword, setInputValueIsFocusedPassword] =
        useState<boolean>(false);

    return (
        <>
            <Header title="Cadastro" />
            <ScrollView>
                <Container>
                    <Box
                        width={'100%'}
                        alignItems={'flex-start'}
                        justifyContent={'flex-start'}>
                        <Text
                            testID="text-login"
                            text="Crie sua conta"
                            align="left"
                            fontFamily="Poppins-SemiBold"
                            size={36}
                            width={75}
                            letterHeight={54}
                            marginTop={24}
                        />
                    </Box>

                    <Box width={'100%'} height={80} mt={4}>
                        <Text
                            testID="text-login"
                            text="Faça seu cadastro de forma rápida e fácil."
                            align="left"
                            fontFamily="Poppins-Regular"
                            size={15}
                            width={100}
                            letterHeight={24}
                            color={'#7A7A80'}
                        />
                    </Box>

                    <Box width={'100%'}>
                        <Input
                            nameIcon={'user'}
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
                            placeholder={`Nome`}
                            placeholderTextColor={theme.colors.gray_80}
                            onBlur={() => setInputValueIsFocused(false)}
                            onChangeText={() => {}}
                            onFocus={() => setInputValueIsFocused(true)}
                            keyboardType={'default'}
                            backgroundColor={'neutral_25'}
                            pl={72}
                            color={'gray_90'}
                        />
                    </Box>

                    <Box width={'100%'} mt={3}>
                        <Input
                            nameIcon={'email'}
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
                            placeholder={`E-mail`}
                            placeholderTextColor={theme.colors.gray_80}
                            onBlur={() => setInputValueIsFocusedPassword(false)}
                            onChangeText={() => {}}
                            onFocus={() => setInputValueIsFocusedPassword(true)}
                            keyboardType={'default'}
                            backgroundColor={'neutral_25'}
                            pl={72}
                            color={'gray_90'}
                        />
                    </Box>

                    <Box width={'100%'} mt={3}>
                        <Input
                            nameIcon={'card'}
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
                            placeholder={`CPF`}
                            placeholderTextColor={theme.colors.gray_80}
                            onBlur={() => setInputValueIsFocusedPassword(false)}
                            onChangeText={() => {}}
                            onFocus={() => setInputValueIsFocusedPassword(true)}
                            keyboardType={'default'}
                            backgroundColor={'neutral_25'}
                            pl={72}
                            color={'gray_90'}
                        />
                    </Box>

                    <Box width={'100%'} mt={3}>
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
                            onChangeText={() => {}}
                            onFocus={() => setInputValueIsFocusedPassword(true)}
                            keyboardType={'default'}
                            backgroundColor={'neutral_25'}
                            pl={72}
                            color={'gray_90'}
                        />
                    </Box>

                    <Box width={'100%'} height={100} mt={3}>
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
                            placeholder={`Confirmar Senha`}
                            placeholderTextColor={theme.colors.gray_80}
                            onBlur={() => setInputValueIsFocusedPassword(false)}
                            onChangeText={() => {}}
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
                                testID="app-button-google"
                                activeOpacity={0.8}
                                onPress={() => navigate('Login')}
                                width={276}
                                height={55}
                                background_color={theme.colors.blue_cyan_200}
                                border
                                border_color={theme.colors.neutral_100}
                                border_width={1}
                                marginBottom={16}>
                                <Text
                                    text="Registre-se"
                                    fontFamily="Poppins-Medium"
                                    color={theme.colors.neutral_100}
                                    size={16}
                                    letterHeight={24}
                                    align="center"
                                    width={80}
                                />
                            </Button>
                        </>
                    </Box>
                </Container>
            </ScrollView>
        </>
    );
};

/**
 * EXPORTS
 */
export { RegisterUser };
