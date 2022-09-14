import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';
    login('Nombre de Prueba');

    console.log('lastPath', lastPath);

    navigate(lastPath, {
      replace: true,
    });
  }

  return (
    <div className='container'>
      <h1>Login</h1>

      <button 
        className='btn btn-primary'
        onClick={handleLogin}
        >
        Login
      </button>
    </div>
  )
}
