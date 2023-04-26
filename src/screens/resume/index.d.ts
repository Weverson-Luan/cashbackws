/**
 * IMPORTS
 */

interface IDateSaveProps {
    id: string;
    name: string;
    category: string;
    type: 'outings' | 'receive'
    amount: string;
    date: string;
    color?: string;
}

/**
 * EXPORTS
 */
export { IDateSaveProps };
