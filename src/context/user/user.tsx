import React, { createContext, useEffect, useState } from 'react';
import { IUserProviderProps, IAuthContextData, IAuthProviderProps } from '.';
import {
    getDataStore,
    removeDataStore,
    storeData,
} from 'src/services/storage/async-storage';

const UserContext = createContext({} as IAuthContextData);

const UserProvider = ({ children }: IAuthProviderProps) => {
    const [user, setUser] = useState<IUserProviderProps>(
        {} as IUserProviderProps,
    );

    const signIn = async (
        email: string,
        password: number | string,
        name: string,
    ) => {
        try {
            const userSaveInStorage = await getDataStore('@user');

            if (userSaveInStorage != null) {
                const user = {
                    ...(userSaveInStorage
                        ? JSON.parse(userSaveInStorage)
                        : null),
                    isLoggedIn: true,
                } as any;

                storeData('@user', JSON.stringify(user));
                handleGetUser();
            } else {
                const user = {
                    name,
                    email,
                    isLoggedIn: true,
                    password,
                } as any;
                storeData('@user', JSON.stringify(user));
                setUser(user);
            }
        } catch (error) {
            console.log('error');
        }
    };

    const signOut = async (logout: boolean) => {
        try {
            if (logout) {
                const { name, password } = user;
                setUser({
                    name,
                    password,
                    isLoggedIn: false,
                });
            } else {
                await removeDataStore('@user');
                await removeDataStore('@accounts');
                setUser({
                    email: '',
                    isLoggedIn: false,
                    password: '',
                    access_token: '',
                    name: '',
                    token: '',
                });
            }
        } catch (error) {
            //tratamento de errror
            console.log(error);
        }
    };

    const handleGetUser = async () => {
        const user = await getDataStore('@user');

        if (user != undefined) {
            const formatedUser = JSON.parse(user);
            setUser(formatedUser);
        }
    };

    useEffect(() => {
        handleGetUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, signIn, signOut, handleGetUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };
