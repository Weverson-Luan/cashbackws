import React from 'react';

// typings
import { ButtonProps } from './index.d';

// styles
import { Container } from './styles';

function Button({
    width = 200,
    height = 55,
    background_color,
    border_color,
    border_width,
    border,
    padding,
    marginBottom,
    marginTop,
    marginLeft,
    marginRight,
    margin,
    children,
    testID,
    activeOpacity,
    ...rest
}: ButtonProps) {
    return (
        <Container
            {...rest}
            testID={testID}
            activeOpacity={activeOpacity}
            width={width}
            height={height}
            background_color={background_color}
            border_color={border_color}
            border_width={border_width}
            border={border}
            marginBottom={marginBottom}
            marginTop={marginTop}
            marginLeft={marginLeft}
            marginRight={marginRight}
            margin={margin}>
            {children}
        </Container>
    );
}

/**
 * EXPORT
 */
export { Button };
