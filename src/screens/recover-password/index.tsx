/**
 * IMPORT
 */
import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

// components
import { Text } from '@components/text';

// assets

// typings

// styles
import { Container } from './styles';
import { Box } from '@components/box';
import { Header } from '@components/header';
import { Input } from '@components/form/input';
import { Button } from '@components/form/button';

const RecoverPassword = () => {
    const theme = useTheme();

    const [inputIsFocused, setInputIsFocused] = useState<boolean>(false);
    const [inputValueIsFocused, setInputValueIsFocused] =
        useState<boolean>(false);
    const [loading, setLoading] = useState();
    const [email, setEmail] = useState('');

    const handleRecoverPassword = async (email: string) => {
        console.log('email:', email);
    };
    return (
        <>
            <Header title="Recuperar Senha" />
            <Container>
                <Box width={'100%'} mt={60}>
                    <Text
                        text="Estar faltando pouco."
                        fontFamily="Poppins-Bold"
                        color={theme.colors.gray_250}
                        align="left"
                        size={35}
                        letterHeight={35}
                        weight="700"
                    />
                </Box>

                <Box width={'100%'} mt={42}>
                    <Text
                        text="Digite seu email para solicitação de uma nova senha."
                        align="left"
                        fontFamily="Poppins-Regular"
                        color={theme.colors.gray_400}
                        size={15}
                        letterHeight={25}
                        weight="400"
                        marginTop={42}
                    />
                </Box>

                <Box width={'100%'} mt={4}>
                    <Input
                        nameIcon={'email'}
                        width={327}
                        height={64}
                        border={1}
                        borderColor={
                            inputValueIsFocused ? 'blue_cyan_200' : 'gray_80'
                        }
                        borderRadius={'six'}
                        fontSize={18}
                        placeholder={`Digite seu e-mail`}
                        placeholderTextColor={theme.colors.gray_80}
                        onBlur={() => {
                            // handleBlur('value');
                            setInputValueIsFocused(false);
                        }}
                        onChangeText={(text: string) => {
                            setEmail(text.trim());
                        }}
                        onFocus={() => setInputValueIsFocused(true)}
                        value={email}
                        keyboardType={'default'}
                        backgroundColor={'neutral_25'}
                        pl={42}
                        color={'gray_90'}
                    />
                </Box>

                <Box width={'100%'} mt={64}>
                    <Button
                        testID="app-button-google"
                        activeOpacity={0.8}
                        onPress={() => {
                            handleRecoverPassword(email);
                        }}
                        width={290}
                        height={55}
                        background_color={theme.colors.blue_cyan_200}
                        border
                        border_color={theme.colors.gray_80}
                        border_width={1}
                        marginBottom={16}>
                        {loading ? (
                            <ActivityIndicator color={'#fff'} size={28} />
                        ) : (
                            <>
                                <Text
                                    text="Recuperar"
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
            </Container>
        </>
    );
};

/**
 * EXPORTS
 */
export { RecoverPassword };
