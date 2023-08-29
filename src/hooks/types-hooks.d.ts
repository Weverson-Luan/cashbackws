/**
 * IMPORTS
 */

type IUserProps = {
    user: {
        name?: string;
        avatar?: string;
        email: string;
        password: string;
        isLoggedIn: boolean;
        access_token?: string;
        token?: string;
    };
    signIn: (email: string, password: string | number, name: string) => Promise<void>;
    signOut: (logout: boolean) => Promise<void>;
    handleGetUser: () => Promise<void>;

};

/**
 * EXPORTS
 */
export type { IUserProps };
