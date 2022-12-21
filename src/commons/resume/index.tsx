/**
 * IMPORTS
 */
import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IResumePropsColors {
    color: string;
    width: string;
    height: string;
}

const Resume = ({ color, width, height }: IResumePropsColors) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 27 27" fill="none">
            <Path
                d="M14.3438 15.1875C16.2077 15.1875 17.7188 13.6765 17.7188 11.8125C17.7188 9.94854 16.2077 8.4375 14.3438 8.4375C12.4798 8.4375 10.9688 9.94854 10.9688 11.8125C10.9688 13.6765 12.4798 15.1875 14.3438 15.1875Z"
                stroke="#989EB3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M3.375 11.3906H5.90625"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M3.375 7.17188H5.90625"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M3.375 15.6094H5.90625"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M3.375 19.8281H5.90625"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M9.28125 17.7188C9.8707 16.9328 10.635 16.2949 11.5137 15.8556C12.3924 15.4162 13.3613 15.1875 14.3438 15.1875C15.3262 15.1875 16.2951 15.4162 17.1738 15.8556C18.0525 16.2949 18.8168 16.9328 19.4062 17.7188"
                stroke="#989EB3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M22.7812 22.7812V4.21875C22.7812 3.75276 22.4035 3.375 21.9375 3.375L6.75 3.375C6.28401 3.375 5.90625 3.75276 5.90625 4.21875V22.7812C5.90625 23.2472 6.28401 23.625 6.75 23.625H21.9375C22.4035 23.625 22.7812 23.2472 22.7812 22.7812Z"
                stroke="#989EB3"
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
export { Resume };
