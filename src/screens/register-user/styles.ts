/**
 * IMPORT
 */
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const Main = styled.View`
    /* background-color: ${({ theme }) => theme.colors.neutral_25}; */
`;
const Container = styled.View`
    width: 100%;
    flex: 1;
    align-items: flex-start;
    justify-content: flex-start;
    /* background-color: ${({ theme }) => theme.colors.neutral_25}; */
    padding-left: 42px;
  padding-right: 42px;
`;

const WrapperLogo = styled.View`
    width: 100%;
    height: ${RFValue(80)}px;
    margin-top: ${RFValue(40)}px;
    align-items: center;
    justify-content: center;
`;

const WrapperTitle = styled.View`
    width: 100%;
    padding: ${RFValue(16)}px;
    align-items: center;
    justify-content: center;
`;

const WrapperDescription = styled.View`
    width: 100%;
    padding: ${RFValue(16)}px;
    margin-bottom: ${RFValue(30)}px;
    margin-top: ${RFValue(10)}px;
    align-items: center;
    justify-content: center;
`;

const WrapperFooter = styled.View`
    width: 100%;
    height: ${RFValue(300)}px;
    margin-top: ${RFValue(20)}px;
    align-items: center;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.colors.blue_cyan_300};
    border: 1px;
    border-top-width: 1px;
    border-top-color: ${({ theme }) => theme.colors.blue_cyan_200};
    position: relative;
`;

const WrapperButton = styled.View`
    width: 100%;
    padding: ${RFValue(16)}px;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -60px;
    background-color: transparent;
`;

const WrapperAppVersion = styled.View`
    width: 100%;
    height: 60%;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
`;

/**
 * EXPORT
 */
export {
    Main,
    Container,
    WrapperLogo,
    WrapperTitle,
    WrapperDescription,
    WrapperFooter,
    WrapperButton,
    WrapperAppVersion,
};
