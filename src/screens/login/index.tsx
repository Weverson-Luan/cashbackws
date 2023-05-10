/**
 * IMPORT
 */
import React from 'react';

// libs
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

// components
import { Text } from '@components/text';
import { Button } from '@components/form/button';
import { Header } from '@components/header';

// assets
import LogoAppSvg from 'src/assets/icons-svg/logo-app.svg';
import GoogleSvg from 'src/assets/icons-svg/google.svg';
import GithubSvg from 'src/assets/icons-svg/github.svg';

// typings

// styles
import {
    Container,
    WrapperLogo,
    WrapperTitle,
    WrapperDescription,
    WrapperFooter,
    WrapperButton,
    WrapperAppVersion,
} from './styles';
import { Box } from '@components/box';
import { Input } from '@components/form/input';

const Login = () => {
    const theme = useTheme();
    const { navigate } = useNavigation();

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

                <Box width={'100%'} pr={28}>
                    <Input
                        nameIcon={'email'}
                        width={'100%'}
                        height={64}
                        border={1}
                        borderColor={'neutral_100'}
                        borderRadius={'six'}
                        fontSize={18}
                        placeholder={`E-mail`}
                        placeholderTextColor={theme.colors.gray_80}
                        onBlur={() => {}}
                        onChangeText={() => {}}
                        onFocus={() => {}}
                        keyboardType={'default'}
                        backgroundColor={'neutral_25'}
                        pl={48}
                        color={'gray_90'}
                    />
                </Box>

                <Box width={'100%'} height={170} mt={3}>
                    <Input
                        nameIcon={'password'}
                        width={'100%'}
                        height={64}
                        border={1}
                        borderColor={'neutral_100'}
                        borderRadius={'six'}
                        fontSize={18}
                        placeholder={`Senha`}
                        placeholderTextColor={theme.colors.gray_80}
                        onBlur={() => {}}
                        onChangeText={() => {}}
                        onFocus={() => {}}
                        keyboardType={'default'}
                        backgroundColor={'neutral_25'}
                        pl={48}
                        color={'gray_90'}
                    />
                </Box>

                <Box width={'100%'}>
                    <>
                        <Button
                            testID="app-button-google"
                            activeOpacity={0.8}
                            onPress={() => {}}
                            width={300}
                            height={55}
                            background_color={theme.colors.blue_cyan_200}
                            border
                            border_color={theme.colors.neutral_100}
                            border_width={1}
                            marginBottom={16}>
                            <Text
                                text="Login"
                                fontFamily="Poppins-Medium"
                                color={theme.colors.neutral_100}
                                size={16}
                                letterHeight={24}
                                align="center"
                                width={80}
                            />
                        </Button>

                        <Button
                            testID="app-button-google"
                            activeOpacity={0.8}
                            onPress={() => {}}
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
