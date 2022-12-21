/**
 * IMPORTS
 */
import React from 'react';
import Svg, { Path, ClipPath, G, Defs, Rect } from 'react-native-svg';

interface ICashPropsColors {
    color: string;
    width: string;
    height: string;
}

const Cash = ({ color, width, height }: ICashPropsColors) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 29 23" fill="none">
            <G clip-path="url(#clip0_115_88)">
                <Path
                    d="M14.5476 1.79626V21.857"
                    stroke={color}
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M20.2409 5.44376H11.7009C10.644 5.44376 9.63028 5.78 8.88288 6.37852C8.13549 6.97704 7.71561 7.78881 7.71561 8.63524C7.71561 9.48167 8.13549 10.2934 8.88288 10.892C9.63028 11.4905 10.644 11.8267 11.7009 11.8267H17.3943C18.4513 11.8267 19.4649 12.163 20.2123 12.7615C20.9597 13.36 21.3796 14.1718 21.3796 15.0182C21.3796 15.8646 20.9597 16.6764 20.2123 17.2749C19.4649 17.8734 18.4513 18.2097 17.3943 18.2097H7.71561"
                    stroke={color}
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_115_88">
                    <Rect
                        width="27.328"
                        height="21.8845"
                        fill="white"
                        transform="translate(0.883606 0.88446)"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    );
};

/**
 * EXPORTS
 */
export { Cash };
