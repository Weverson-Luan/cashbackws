import React from 'react';
import { Text } from 'react-native';

import { BoxProps } from "./interface";
import { BoxStyles } from './styles';

export interface ButtonProps extends BoxProps {
  children?: React.ReactElement | React.ReactElement;
}

const BoxComponent = ({
  children,
  ...props
}: ButtonProps) => {
  const styleProps: ButtonProps = props;

  return (
      <BoxStyles {...styleProps}>
        {children}
      </BoxStyles>

  );
};

export const Box = (BoxComponent);

