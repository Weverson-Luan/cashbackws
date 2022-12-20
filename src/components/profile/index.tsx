/**
 * IMPORT
 */
import React from 'react';

import { useTheme } from 'styled-components/native';

// components
import { Text } from '@components/text';

// assets

// typings
import { IProfileProps } from './index.d';

// styles
import { Container, WrapperImage, Image, WrapperNameUser } from './styles';

const Profile = ({ file_url, name }: IProfileProps) => {
    const theme = useTheme();

    return (
        <Container activeOpacity={0.8}>
            <WrapperImage>
                <Image
                    source={{
                        uri: `${file_url}`,
                    }}
                />
            </WrapperImage>
            <WrapperNameUser>
                <Text
                    text="Óla, "
                    fontFamily="Poppins"
                    color={theme.colors.neutral_100}
                    size={18}
                    letterHeight={26}
                    weight="300"
                    align="left"
                    marginBottom={4}
                />

                <Text
                    text={`${name}`}
                    fontFamily="Poppins"
                    color={theme.colors.neutral_100}
                    size={18}
                    letterHeight={16}
                    weight="600"
                    align="left"
                    width={160}
                />
            </WrapperNameUser>
        </Container>
    );
};

/**
 * EXPORTS
 */
export { Profile };
