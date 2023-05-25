/**
 * IMPORT
 */
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const Main = styled.View`
    /* background-color: ${({ theme }) => theme.colors.neutral_25}; */
`;
const Container = styled.ScrollView`
    width: 100%;
    flex: 1;
    /* background-color: ${({ theme }) => theme.colors.neutral_25}; */
    padding-left: 28px;
`;



/**
 * EXPORT
 */
export {
    Main,
    Container,
};
