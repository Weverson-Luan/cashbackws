import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import theme from 'src/global/styles/theme/theme';

import { Profile } from '@components/profile';

const Providers: React.FC = ({ children }: any) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe('Component Profile Testing', () => {
    it('it should be possible to render the component.', () => {
        const { getAllByTestId } = render(
            <Profile name="Luan" file_url="image-profile.png" />,
            {
                wrapper: Providers,
            },
        );

        const element = getAllByTestId('component-profile');

        expect(element).toBeTruthy();
    });

    it('it must be possible for the component to be rendered with the correct properties.', () => {
        const { getByTestId } = render(
            <Profile name="Luan Dev" file_url={'image-profile.png'} />,
            {
                wrapper: Providers,
            },
        );

        const elementImage = getByTestId('image-profile');
        const elementTextNameUser = getByTestId('text-name-user');

        const verifyPropImage =
            typeof elementImage.props.source.uri === 'string';

        expect(elementTextNameUser.props.children).toEqual('Luan Dev');

        expect(verifyPropImage).toBeTruthy();
    });
});
