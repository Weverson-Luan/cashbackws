import React from 'react';
import {
  BorderColorProps,
  BorderProps,
  BorderRadiusProps,
  BorderWidthProps,
  ColorProps,
  DisplayProps,
  FlexboxProps,
  HeightProps,
  MinHeightProps,
  MinWidthProps,
  PositionProps,
  ShadowProps,
  SizeProps,
  WidthProps,
} from 'styled-system';
import theme from 'src/global/styles/theme/theme';

export interface BoxProps
  extends FlexboxProps<typeof theme>,
  PositionProps<typeof theme>,
  ColorProps<typeof theme>,
  BorderProps<typeof theme>,
  BorderColorProps<typeof theme>,
  BorderWidthProps<typeof theme>,
  SizeProps<typeof theme>,
  WidthProps<typeof theme>,
  HeightProps<typeof theme>,
  MinHeightProps<typeof theme>,
  MinWidthProps<typeof theme>,
  ShadowProps<typeof theme>,
  BorderRadiusProps<typeof theme>,
  DisplayProps<typeof theme> {
  boxShadow?: keyof typeof theme | null;
  children?: React.ReactNode;
  mt?: number | string;
  ml?: number | string;
  mb?: number | string;
  mr?: number | string;
  pt?: number | string;
  pl?: number | string;
  pb?: number | string;
  pr?: number | string;

}
