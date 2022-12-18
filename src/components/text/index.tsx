/**
 * IMPORT
 */
import React from 'react';
import {ITextProps} from './index.d';
import {TextNative} from './styles';

const Text = ({
  testID,
  text,
  color,
  size,
  align,
  padding,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  margin,
  weight,
  textDecoration,
  fontFamily,
  ...rest
}: ITextProps) => (
  <TextNative
    testID={testID}
    color={color}
    size={size}
    align={align}
    marginBottom={marginBottom}
    marginTop={marginTop}
    marginLeft={marginLeft}
    marginRight={marginRight}
    margin={margin}
    weight={weight}
    textDecoration={textDecoration}
    fontFamily={fontFamily}
    padding={padding}
    {...rest}>
    {' '}
    {text}
  </TextNative>
);

/**
 * EXPORTS
 */
export {Text};
