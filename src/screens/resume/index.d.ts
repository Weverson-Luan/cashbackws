/**
 * IMPORTS
 */

interface IDateSaveProps {
    totalFormatted: string | number;
    id: string;
    name: string;
    category: string;
    type: 'outings' | 'receive'
    amount: string;
    date: string;
    color?: string;
}

interface DataApi {
    key?: string;
    name: string;
    total: number;
    totalFormatted?: string;
    percent: string;
    color?: string;
}

type DataAccountStorage = {
    id: string;
    amount: string;
    category: string;
    date: string;
    name: string;
    type: string;
    color: string;
    description: string;
};

/**
 * EXPORTS
 */
export { IDateSaveProps, DataApi, DataAccountStorage };
