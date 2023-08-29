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

const Profile = ({ file_url, name, testID, ...res }: IProfileProps) => {
    const theme = useTheme();

    return (
        //@ts-ignore
        <Container
            {...res}
            testID={testID ? testID : 'component-profile'}
            activeOpacity={0.8}>
            <WrapperImage>
                <Image
                    testID="image-profile"
                    source={{
                        uri: `${file_url}`,
                    }}
                />
            </WrapperImage>
            <WrapperNameUser>
                <Text
                    text="Óla, "
                    fontFamily={'Poppins-Regular'}
                    color={theme.colors.neutral_100}
                    size={18}
                    letterHeight={26}
                    weight="400"
                    align="left"
                    marginBottom={4}
                />

                <Text
                    testID="text-name-user"
                    text={`${name}`}
                    fontFamily={'Poppins-SemiBold'}
                    color={theme.colors.neutral_100}
                    size={18}
                    letterHeight={22}
                    weight="600"
                    align="left"
                    width={200}
                />
            </WrapperNameUser>
        </Container>
    );
};

/**
 * EXPORTS
 */
export { Profile };
