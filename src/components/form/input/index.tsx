/**
 * IMPORT
 */
import React from 'react';
import { useTheme } from 'styled-components';
import { TextInputProps, TouchableOpacity } from 'react-native';
import {
    NotePencil,
    CurrencyDollar,
    Envelope,
    Clock,
    LockKey,
    User,
    Cardholder,
} from 'phosphor-react-native';
// components
import { Text } from '@components/text';

// assets

// typings

// styles
import { BoxStyles, ButtonIcon } from './styles';
import { InputProps } from './interface';
import { Box } from '@components/box';

interface IInputProps extends InputProps {
    nameIcon?: 'name' | 'money' | 'email' | 'password' | 'user' | 'card';
    label?: string;
    borderHeight?: boolean;
}

const Input = ({ nameIcon, label, borderHeight, ...props }: IInputProps) => {
    const styleProps: InputProps = props;
    const theme = useTheme();
    return (
        <>
            {label && (
                <Text
                    text={`${label}:`}
                    fontFamily="Poppins-Regular"
                    color={theme.colors.blue_dark_800}
                    size={16}
                    letterHeight={24}
                    align={'left'}
                    weight="500"
                    marginLeft={4}
                    marginBottom={2}
                />
            )}
            <Box>
                <>
                    <BoxStyles {...styleProps} />
                    {nameIcon === 'name' && (
                        <ButtonIcon borderHeight={borderHeight}>
                            <NotePencil
                                size={26}
                                color={theme.colors.gray_80}
                            />
                        </ButtonIcon>
                    )}

                    {nameIcon === 'money' && (
                        <ButtonIcon borderHeight={borderHeight}>
                            <CurrencyDollar
                                size={26}
                                color={theme.colors.gray_80}
                            />
                        </ButtonIcon>
                    )}

                    {nameIcon === 'email' && (
                        <ButtonIcon borderHeight={borderHeight}>
                            <Envelope size={26} color={theme.colors.gray_80} />
                        </ButtonIcon>
                    )}

                    {nameIcon === 'password' && (
                        <ButtonIcon borderHeight={borderHeight}>
                            <LockKey size={26} color={theme.colors.gray_80} />
                        </ButtonIcon>
                    )}

                    {nameIcon === 'user' && (
                        <ButtonIcon borderHeight={borderHeight}>
                            <User size={26} color={theme.colors.gray_80} />
                        </ButtonIcon>
                    )}

                    {nameIcon === 'card' && (
                        <ButtonIcon borderHeight={borderHeight}>
                            <Cardholder
                                size={26}
                                color={theme.colors.gray_80}
                            />
                        </ButtonIcon>
                    )}
                </>
            </Box>
        </>
    );
};

/**
 * EXPORTS
 */
export { Input };
