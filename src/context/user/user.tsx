import React, { createContext, useEffect, useState } from 'react';
import { IUserProviderProps, IAuthContextData, IAuthProviderProps } from '.';
import axios from 'axios';
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
            const response = await axios.post('https://reqres.in/api/login', {
                email: 'eve.holt@reqres.in',
                password: 'cityslicka',
            });

            const user = {
                name,
                email,
                password,
                isLoggedIn: true,
            } as any;
            storeData('user', JSON.stringify(user));
            setUser(user);

            console.log('result', response.data);
        } catch (error) {
            console.log('error');
        }
    };

    const signOut = async () => {
        try {
            await removeDataStore('user');
            setUser({
                email: '',
                isLoggedIn: false,
                password: '',
            });
        } catch (error) {
            //tratamento de errror
            console.log(error);
        }
    };

    const handleGetUser = async () => {
        const user = await getDataStore('user');

        if (user != undefined) {
            const formatedUser = JSON.parse(user);
            setUser(formatedUser);
        }
    };

    useEffect(() => {
        handleGetUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };
