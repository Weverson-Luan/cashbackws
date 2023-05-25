/**
 * IMPORTS
 */
import React, { ReactNode } from 'react';

type IUserProviderProps = {
  name?: string;
  email: string;
  password: string;
  access_token?: string;
  token?: string;
  isLoggedIn: boolean;
};

type IAuthContextData = {
  /** date user  */
  user: IUserProviderProps;
  signIn: (email: string, password: string | number, name: string) => Promise<void>;
  signOut: () => Promise<void>;
};

type IAuthProviderProps = {
  children: ReactNode;
};

/**
 * EXPORTS
 */
export { IUserProviderProps, IAuthContextData, IAuthProviderProps };
