import { View } from "react-native";
import styled from "styled-components/native";
import {
  width,
  height,
  minHeight,
  minWidth,
  backgroundColor,
  border,
  borderColor,
  borderRadius,
  borderWidth,
  color,
  flexbox,
  margin,
  padding,
  position,
  shadow,
  space,
  fontSize
} from "styled-system";
import { TextInput } from "react-native";

import { InputProps } from "./interface";


const BoxStyles = styled(TextInput) <InputProps>`
  ${color}
  ${space}
  ${margin}
  ${padding}
  ${width}
  ${height}
  ${minHeight}
  ${minWidth}
  ${flexbox}
  ${position}
  ${borderColor}
  ${borderRadius}
  ${borderWidth}
  ${border}
  ${shadow}
  ${backgroundColor}
  ${fontSize}

`;


interface ButtonProps{
    borderHeight?: boolean;
}
const ButtonIcon = styled.TouchableOpacity<ButtonProps>`
  width: 55px;

  position: absolute;
  top: 18px;
  left: 6px;
  align-items: center;
  justify-content: center;
  border-right-width: ${({ borderHeight })=> borderHeight ? `${1}px` : 0};
  border-color: #cdcd;
  padding-right: 6px;



`;

export {
  BoxStyles,
  ButtonIcon
}
