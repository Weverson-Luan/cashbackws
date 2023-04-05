/**
 * IMPORTS
 */

interface Props {
  type: 'entrada' | 'saida';
};

interface DataOptions {
  id: string;
  title: string;
  value: string;
}

/**
 * EXPORTS
 */
export { Props, DataOptions };
