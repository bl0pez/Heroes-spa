import { authReducer, types } from "../../../src/auth";


describe('Pruba en authReducer', () =>{ 

    test('debe retornar el estado por defecto', () => { 
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
     });

     test('debe de (login) llamar el login autnticar y establecer el user', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Bryan',
                id: '1234'
            }
        }

        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({ logged: true, user: action.payload });

     });

     test('debe de (logout) borrar el name del usuario y logged en false', () => {
        const state = {
            logged: true,
            user:  { name: 'Bryan', id: '1234' }
        }

        const action = {
            type: types.logout,
        }

        const newState = authReducer(state, action);

        expect(newState).toEqual({ logged: false });

     });

});