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
    date: string;
    color?: string;
    description?: string;
}

/**
 * EXPORTS
 */
export { Props, DataOptions, IDateSaveProps };
