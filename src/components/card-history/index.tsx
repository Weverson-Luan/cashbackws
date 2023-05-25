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
    amount: string | number;
    color: string;
}
const CardHistory = ({ title, amount, color }: ICardProps) => {
    console.log(amount);
    return (
        <Container color={color}>
            <Title>{title}</Title>

            <TextValue>{amount}</TextValue>
        </Container>
    );
};

/**
 * EXPORTS
 */
export { CardHistory };
