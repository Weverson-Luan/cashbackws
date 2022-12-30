/**
 * IMPORTS
 */

import { ViewProps } from 'react-native';

interface ISpendingProps extends ViewProps {
    testID?: string;
}

interface ICardTypeProps {
    id: string;
    name: string;
    category: string;
    type: string;
    value: string;
    date: string;
}

/**
 * EXPORTS
 */
export { ISpendingProps, ICardTypeProps };
