'use-client'


import Auth from '@/context/Auth';
import React from 'react';

const AuthProvider = ({children}) => {
    return (
        <div>
            <Auth>
                {children}
            </Auth>
        </div>
    );
};

export default AuthProvider;