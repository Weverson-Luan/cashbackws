/**
 * IMPORTS
 */

interface Props {
  type: 'receive' | 'outings' | 'undefined';
};

interface DataOptions {
  id: string;
  title: string;
  value: string;
}

interface IDateSaveProps {
    id: string;
    name: string;
    category: string;
    type: 'outings' | 'receive'
    amount: string;
    date: string | Date;
    color?: string;
    description?: string;
    accountNumber: number;
}

/**
 * EXPORTS
 */
export { Props, DataOptions, IDateSaveProps };
