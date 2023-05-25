/**
 * IMPORT
 */
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

const Container = styled.TouchableOpacity`
    width: ${RFValue(170)}px;
    height: ${RFValue(60)}px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(16)}px;
`;

const WrapperImage = styled.View`
    width: ${RFValue(68)}px;
    height: ${RFValue(60)}px;
`;

const Image = styled.Image`
    width: ${RFValue(68)}px;
    height: ${RFValue(60)}px;
    border-radius: ${RFValue(6)}px;
`;

const WrapperNameUser = styled.View`
    margin-left: ${RFValue(8)}px;
`;
/**
 * EXPORT
 */
export { Container, WrapperImage, Image, WrapperNameUser };
