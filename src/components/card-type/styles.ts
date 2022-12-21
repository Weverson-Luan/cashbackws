/**
 * IMPORT
 */
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity.attrs({
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
    height: ${RFValue(160)}px;
    background-color: ${({ theme }) => theme.colors.neutral_25};
    border-radius: 6px;
    margin-left: ${RFValue(2)}px;
    margin-right: ${RFValue(18)}px;
`;

const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.colors.neutral_25};
    border-radius: 6px;
    padding: ${RFValue(22)}px;
`;

const WrapperText = styled.View`
    width: 100%;
    flex-direction: column;
    padding: ${RFValue(12)}px;
`;

/**
 * EXPORT
 */
export { Container, Header, WrapperText };
