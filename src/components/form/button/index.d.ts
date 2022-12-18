/**
 * IMPORTS
 */

import { ReactNode } from 'react';

import { TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    width: number;
    height: number;
    background_color: string;
    border?: boolean;
    border_color?: string;
    border_width?: number;
    border_radius?: number;
    padding?: number;
    marginBottom?: number;
    marginTop?: number;
    marginLeft?: number;
    marginRight?: number;
    justifyContent?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around';
    margin?: number;
    children: ReactNode;
}

/**
 * EXPORTS
 */
export { ButtonProps };
