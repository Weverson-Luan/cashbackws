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
import { StatusBar } from 'react-native';

const Header = () => {
  const theme = useTheme();
  const { goBack } = useNavigation();

  return (
    <Container>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#2D9BB2'} />
      <ButtonArrowLeft activeOpacity={0.7} onPress={() => goBack()}>
        <ArrowLeft size={26} color={"#fff"} />
      </ButtonArrowLeft>

      <Box width={'80%'} backgroundColor={'transparent'}>
        <Text
          text="Registro"
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
