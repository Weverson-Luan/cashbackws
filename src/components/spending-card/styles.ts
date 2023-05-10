/**
 * IMPORT
 */
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const Container = styled.View`
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: ${RFValue(6)}px;
    margin-bottom: ${RFValue(36)}px;
`;

const WrapperLoading = styled.View.attrs({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
})``;

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
    height: ${RFValue(162)}px;
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
    padding-left: ${RFValue(24)}px;
    padding-right: ${RFValue(24)}px;
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

const WrapperImageProfile = styled.View`
    width: 90%;
    height: 58px;
    flex-direction: row;
    margin-left: ${RFValue(6)}px;
    background-color: transparent;
`;

const ImageProfile = styled.Image`
    width: 58px;
    height:58px;
`;

const WrapperTextFooterDate = styled.View`
    width: 60%;
    flex-direction: row;
    margin-top: ${RFValue(12)}px;
    padding-right: ${RFValue(24)}px;
`;

interface IpropsColor{
    color: string;
}
const TextNative = styled.Text<IpropsColor>`
    font-size: ${RFValue(14)}px;
    color: ${({color})=> color};
    margin-right: 52px;
    margin-top: 2px;
    line-height: 26px;
    font-family:  ${({theme})=> theme.fonts.primary_poppins_semiBold_600};
`;

const TextTitleDescription = styled.Text<IpropsColor>`
    font-size: ${RFValue(14)}px;
    color: ${({color})=> color};
    margin-right: 2px;
    margin-top: 2px;
    line-height: 26px;
    font-family:  ${({theme})=> theme.fonts.primary_poppins_medium_500};
`;

const TextDescription = styled.Text<IpropsColor>`
    font-size: ${RFValue(14)}px;
    color: ${({color})=> color};
    margin-left: 6px;
    margin-top: 2px;
    line-height: 26px;
    font-family:  ${({theme})=> theme.fonts.primary_poppins_regular_400};

`;

const TextNativeValueAndDate = styled.Text<IpropsColor>`
    font-size: ${RFValue(14)}px;
    color: ${({color})=> color};
    margin-top: 2px;
    line-height: 26px;
    font-family:  ${({theme})=> theme.fonts.primary_poppins_regular_400};
`;


const WrapperValueAndDate = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding-left: ${RFValue(12)}px;
    padding-right: ${RFValue(12)}px;
`;


/**
 * EXPORT
 */
export {
    Container,
    WrapperLoading,
    Header,
    FlatList,
    ContainerSpending,
    HeaderSpending,
    WrapperText,
    WrapperTextFooterDate,
    TextNative,
    WrapperImageProfile,
    ImageProfile,
    WrapperValueAndDate,
    TextTitleDescription,
    TextDescription,
    TextNativeValueAndDate
};
