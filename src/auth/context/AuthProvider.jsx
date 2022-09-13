import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './AuthReducer';

import { types } from '../types/types';

const initialState = {
    loading: false,
}

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer(authReducer, initialState);

    const login = ( name = '') => {
        const action = {
            type: types.login,
            payload: {
                id: '23441',
                name: name,
            }
        }

        dispatch(action);

    }


  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
    }}>
        {children}
    </AuthContext.Provider>
  )
}
