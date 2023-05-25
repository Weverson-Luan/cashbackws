/**
 * IMPORTS
 */

interface ICardTypeProps {
    id?: string;
    type?: string;
    value?: string;
    created_at?: string;
}


interface IHomeStackProps {
    onPressNavigationTesting?: () => void; // function for testing
    testing?: boolean;
}
/**
 * EXPORTS
 */
export { ICardTypeProps, IHomeStackProps };
