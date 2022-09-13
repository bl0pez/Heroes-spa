import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {

    login('Nombre de Prueba');

    navigate("/marvel", {
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
