/**
 * IMPORT
 */
import styled from 'styled-components/native';
import { CaretLeft, CaretRight } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex: 1;
`;


const WrapperLoading = styled.View.attrs({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

})`
`;

const MonthSelect = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
    padding-left: 24px;
    padding-right: 24px;
`;
const MonthSelectButton = styled(TouchableOpacity)`
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
`;
const MonthSelectIconLeft = styled(CaretLeft)`
    font-size: 24px;
`;
const MonthSelectIconRight = styled(CaretRight)`
    font-size: 24px;
`;
const Month = styled.Text`
    font-size: 24px;
    color: #7A7A80;
`;


/**
 * EXPORT
 */
export {Container, WrapperLoading, MonthSelect, MonthSelectButton,MonthSelectIconLeft, MonthSelectIconRight, Month };
