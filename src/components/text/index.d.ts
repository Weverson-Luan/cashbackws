/**
 * IMPORTS
 */

import { TextProps } from 'react-native';

interface IFontsNames {
    OpenSans;
    'OpenSans-Italic';
}
interface ITextProps extends TextProps {
    text?: string;
    width?: number;
    size?: number;
    color?: string;
    align?: 'center' | 'left' | 'right';
    padding?: number;
    marginBottom?: number;
    marginTop?: number;
    marginLeft?: number;
    marginRight?: number;
    margin?: number;
    textDecoration?: 'line-through' | 'underline' | 'none';
    weight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
    ellipsis?: boolean;
    fontFamily?:
    'Poppins-Thin'
    | 'Poppins-thinItalic'
    | 'Poppins-Light'
    | 'Poppins-LightItalic'
    | 'Poppins-Regular'
    | 'Poppins-Medium'
    | 'Poppins-MediumItalic'
    | 'Poppins-SemiBold'
    | 'Poppins-SemiboldItalic'
    | 'Poppins-Bold'
    | 'Poppins-SemiBold'
    | 'Poppins-Black'
    | 'Poppins-BlackItalic'
    letterSpacing?: number;
    letterHeight?: number;
    zIndex?: number;
}

/**
 * EXPORTS
 */
export { ITextProps };
