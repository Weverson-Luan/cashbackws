/**
 * IMPORTS
 */

import { ViewProps } from 'react-native';

interface ICardTypeProps {
    id: string;
    name: string;
    category: string;
    type: string;
    value: string;
    date: string;
}

interface ISpendingProps extends ViewProps {
    testID?: string;
    data: ICardTypeProps[]
}
/**
 * EXPORTS
 */
export { ISpendingProps, ICardTypeProps };
