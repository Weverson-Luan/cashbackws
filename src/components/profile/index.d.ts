/**
 * IMPORTS
 */

import { TouchableOpacityProps } from 'react-native';

interface IProfileProps extends TouchableOpacityProps {
    name: string;
    file_url: string;
    testID?: string;
}

/**
 * EXPORTS
 */
export { IProfileProps };
