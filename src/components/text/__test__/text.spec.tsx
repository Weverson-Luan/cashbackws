import React from 'react';
import { Text } from '@components/text';
import { render } from '@testing-library/react-native';
import theme from 'src/global/styles/theme/theme';
import { ThemeProvider } from 'styled-components';

const Providers: React.FC = ({ children }: any) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe('it should be possible to test the text component', () => {
    it('it should be possible for the text to be rendered on screen', () => {
        render(<Text />, {
            wrapper: Providers,
        });
    });

    it('it should be possible for the text to be rendered with all its properties correct.', () => {
        const { getByText } = render(
            <Text
                testID="text-main"
                text="I am Title"
                fontFamily="Poppins-Bold"
                color={theme.colors.black_800}
                size={1}
                align="center"
                textDecoration="none"
                width={100}
                margin={0}
                marginTop={0}
                marginBottom={0}
                marginLeft={0}
                marginRight={0}
                padding={0}
            />,
            {
                wrapper: Providers,
            },
        );

        const element = getByText('I am Title');

        expect(element).toBeTruthy();
    });
});
