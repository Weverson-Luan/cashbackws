/**
 * IMPORT
 */
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const Container = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: ${RFValue(6)}px;
    margin-bottom: ${RFValue(36)}px;
`;

const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const FlatList = styled.FlatList``;
const ContainerSpending = styled.TouchableOpacity.attrs({
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
})`
    width: ${RFValue(300)}px;
    height: ${RFValue(120)}px;
    background-color: ${({ theme }) => theme.colors.neutral_25};
    border-radius: 8px;
    margin-left: ${RFValue(2)}px;
    margin-right: ${RFValue(18)}px;
    margin-top: ${RFValue(12)}px;
`;

const HeaderSpending = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.colors.blue_cyan_200};
    padding-left: ${RFValue(12)}px;
    padding-right: ${RFValue(12)}px;
    padding-top: ${RFValue(4)}px;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

const WrapperText = styled.View`
    width: 100%;
    flex-direction: column;
    padding-top: ${RFValue(12)}px;
    padding-left: ${RFValue(6)}px;
    padding-right: ${RFValue(16)}px;

    background: transparent;
`;

const WrapperTextFooterDate = styled.View`
    width: 70%;
    flex-direction: row;
    margin-top: ${RFValue(12)}px;
`;
/**
 * EXPORT
 */
export {
    Container,
    Header,
    FlatList,
    ContainerSpending,
    HeaderSpending,
    WrapperText,
    WrapperTextFooterDate,
};
