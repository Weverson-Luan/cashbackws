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
import { Container, Title, TextValue } from './styles';

interface ICardProps {
    title: string;
    value: string | number;
    color: string;
}
const CardHistory = ({ title, value, color }: ICardProps) => {
    return (
        <Container color={color}>
            <Title>{title}</Title>

            <TextValue>{value}</TextValue>
        </Container>
    );
};

/**
 * EXPORTS
 */
export { CardHistory };
