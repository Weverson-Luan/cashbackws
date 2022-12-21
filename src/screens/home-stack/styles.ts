/**
 * IMPORT
 */
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

const Container = styled.View`
    width: 100%;
    flex: 1;
    background-color: ${({ theme }) => theme.colors.neutral_background};
    position: relative;
    align-items: center;
`;

const Header = styled.View`
    width: 100%;
    height: ${RFValue(200)}px;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.blue_cyan_200};
    padding: ${RFValue(16)}px;
`;
const WrapperIcon = styled.TouchableOpacity`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(18)}px;
`;

const ContainerContent = styled.View`
    width: 100%;
    flex: 2;
    background-color: ${({ theme }) => theme.colors.neutral_background};
    position: relative;
    margin-top: ${RFValue(70)}px;
`;

const WrapperContentType = styled.View`
    border-radius: 6px;
    position: absolute;
    top: 160px;
    left: 10px;
`;

const FlatList = styled.FlatList``;
/**
 * EXPORT
 */
export {
    Container,
    Header,
    WrapperIcon,
    ContainerContent,
    WrapperContentType,
    FlatList,
};
