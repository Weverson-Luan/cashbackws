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
} from "styled-system";

import { BoxProps } from "./interface";


const BoxStyles = styled(View) <BoxProps>`
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
`;

export {
  BoxStyles
}
