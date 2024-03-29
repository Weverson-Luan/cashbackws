/**
 * IMPORT
 */
import React from 'react';
import { useTheme } from 'styled-components';

// components
import { Text } from '@components/text';

// assets

// typings

// styles
import { Container } from './styles';

const Default = () => {
    const theme = useTheme();
    return (
        <Container>
            <Text
                text="Screen default de example"
                fontFamily="Raleway-Bold"
                color={theme.colors.neutral_100}
                size={35}
                letterHeight={35}
                weight="700"
                marginTop={60}
            />
        </Container>
    );
};

/**
 * EXPORTS
 */
export { Default };
