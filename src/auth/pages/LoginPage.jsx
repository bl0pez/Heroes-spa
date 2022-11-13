import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';
    login('Nombre de Prueba');

    navigate(lastPath, {
      replace: true,
    });
  }

  return (
    <div className='content-center'>
      <div className='text-center d-grid gap-2 col-2 mx-auto'>
        <h1>Login</h1>

        <button
          className='btn btn-primary'
          onClick={handleLogin}
        >
          Ingresar
        </button>
      </div>
    </div>
  )
}
