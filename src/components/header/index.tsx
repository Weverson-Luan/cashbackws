/**
 * IMPORT
 */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { ArrowLeft } from 'phosphor-react-native';

// components
import { Text } from '@components/text';

// assets

// typings

// styles
import { ButtonArrowLeft, Container } from './styles';
import { Box } from '@components/box';
import { IHeaderProps } from './index.d';

const Header = ({ title, onClick }: IHeaderProps) => {
    const theme = useTheme();
    const { goBack } = useNavigation();

    return (
        <Container>
            <ButtonArrowLeft activeOpacity={0.7} onPress={() => goBack()}>
                <ArrowLeft size={26} color={'#fff'} />
            </ButtonArrowLeft>

            <Box width={'80%'} backgroundColor={'transparent'}>
                <Text
                    text={title ? title : 'Sem titulo'}
                    fontFamily="Poppins-SemiBold"
                    color={theme.colors.neutral_25}
                    size={24}
                    letterHeight={36}
                    weight="500"
                />
            </Box>
        </Container>
    );
};

/**
 * EXPORTS
 */
export { Header };
