/**
 * IMPORT
 */
import React from 'react';

// libs
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

// components
import { Text } from '@components/text';
import { Button } from '@components/form/button';

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

const Sign = () => {
    const theme = useTheme();
    const { navigate } = useNavigation();

    return (
        <Container>
            <WrapperLogo>
                <LogoAppSvg width={150} height={100} />
            </WrapperLogo>

            <WrapperTitle>
                <Text
                    text="Controle seus
                    Gastos de forma
                    muito simples."
                    fontFamily="Raleway-Bold"
                    color={theme.colors.neutral_100}
                    size={35}
                    letterHeight={35}
                    weight="500"
                    marginTop={60}
                />
            </WrapperTitle>

            <WrapperDescription>
                <Text
                    text="Faça seu login com
                    uma conta google ou github abaixo"
                    fontFamily="Raleway-Bold"
                    color={theme.colors.neutral_100}
                    size={16}
                    letterHeight={24}
                    width={80}
                    weight="500"
                    align="center"
                />
            </WrapperDescription>

            <WrapperFooter>
                <WrapperButton>
                    <Button
                        testID="button-github"
                        activeOpacity={0.8}
                        onPress={() => navigate('HomeStack')}
                        width={300}
                        height={55}
                        background_color={theme.colors.neutral_100}
                        border
                        border_color={theme.colors.neutral_100}
                        border_width={1}
                        marginBottom={16}>
                        <GoogleSvg width={24} height={24} />
                        <Text
                            text="Entrar com Google"
                            color={theme.colors.black_800}
                            size={16}
                            letterHeight={24}
                            align="center"
                            width={80}
                        />
                    </Button>

                    <Button
                        testID="button-github"
                        activeOpacity={0.8}
                        onPress={() => navigate('HomeStack')}
                        width={300}
                        height={55}
                        background_color={theme.colors.neutral_100}
                        border
                        border_color={theme.colors.neutral_100}
                        border_width={1}>
                        <GithubSvg width={24} height={24} />

                        <Text
                            text="Entrar com Github"
                            color={theme.colors.black_800}
                            size={16}
                            letterHeight={24}
                            align="center"
                            width={80}
                        />
                    </Button>
                </WrapperButton>

                <WrapperAppVersion>
                    <Text
                        text="versão 1.0.0"
                        color={theme.colors.neutral_100}
                        size={12}
                        letterHeight={24}
                        align="center"
                    />
                </WrapperAppVersion>
            </WrapperFooter>
        </Container>
    );
};

/**
 * EXPORTS
 */
export { Sign };
