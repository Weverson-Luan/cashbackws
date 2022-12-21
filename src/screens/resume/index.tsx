/**
 * IMPORT
 */
import React from 'react';

// components
import { Text } from '@components/text';

// assets

// typings

// styles
import { Container } from './styles';
import { useTheme } from 'styled-components';

const Resume = () => {
    const theme = useTheme();
    return (
        <Container>
            <Text
                text="Screen Resume"
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
export { Resume };
