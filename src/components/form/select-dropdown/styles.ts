/**
 * IMPORTS
 */
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

const SelectContainer = styled.View.attrs({
  width: '100%',
  backgroundColor: 'transparent',
  paddingLeft: 12,
  paddingRight: 12,
  marginBottom: 16
})``;

const SelectDropDown = styled.View.attrs({
  width: '100%',
  flexDirection: 'row',
  paddingHorizontal: '5%'
})``;


interface SelectDropDownProps {
  borderBottomStyle: boolean;
}
// styles native
const styles = StyleSheet.create({

  dropdownBtnStyle: {
    flex: 1,
    height: 64,
    backgroundColor: '#FFF',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#B5B5B5',
  },
  dropdownBotomStyle: {
    flex: 1,
    height: 64,
    backgroundColor: 'transparent',
    borderRadius: 6,
    borderBottomWidth: 1,
    borderColor: '#B5B5B5',
  },
  dropdownBtnTxtStyle: {
    color: '#969CB2',
    textAlign: 'left'
  },
  dropdownDropdownStyle: {
    backgroundColor: '#B5B5B5'
  },
  dropdownRowStyle: {
    marginBottom: 1,
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  dropdownRowTxtStyle: {
    color: '#444',
    textAlign: 'left'
  },
  selectedRowStyle: {
    width: '100%',
    backgroundColor: '#D7DCDC',
  }
});



/**
 * EXPORTS
 */
export {
  SelectContainer,
  SelectDropDown,

  // styles native
  styles
};