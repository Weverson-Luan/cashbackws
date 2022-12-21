/**
 * IMPORTS
 */
import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IMenuPropsColors {
    color: string;
    width: string;
    height: string;
}

const Menu = ({ color, width, height }: IMenuPropsColors) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 28 23" fill="none">
            <Path
                d="M9.13062 6.35558H23.968"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M9.13062 11.8267H23.968"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M9.13062 17.2978H23.968"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M3.42395 6.35558H3.43504"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M3.42395 11.8267H3.43504"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M3.42395 17.2978H3.43504"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </Svg>
    );
};

/**
 * EXPORTS
 */
export { Menu };
