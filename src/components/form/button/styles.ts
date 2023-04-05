import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ButtonProps } from './index.d';

const Container = styled(TouchableOpacity) <ButtonProps>`
    width: ${({ width }) => (width ? ` ${RFValue(width)}px` : '100%')};
    height: ${({ height }) => (height ? ` ${RFValue(height)}px` : '100%')};
    background-color: ${({ theme, background_color }) =>
        background_color || background_color};
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    padding: 4px;
    flex-direction: row;
    border: 1px;
    border-width: ${({ border_width = 0 }: any) =>
        `${RFValue(border_width)}px`};
    border-color: ${({ theme, border_color }) => border_color && border_color};
    padding: ${({ padding = 0 }: any) => `${RFValue(padding)}px`};
    margin-bottom: ${({ marginBottom = 0 }: any) =>
        `${RFValue(marginBottom)}px`};
    margin-top: ${({ marginTop = 0 }: any) => `${RFValue(marginTop)}px`};
    margin-left: ${({ marginLeft = 0 }: any) => `${RFValue(marginLeft)}px`};
   
`;

/**
 * EXPORT
 */
export { Container };
