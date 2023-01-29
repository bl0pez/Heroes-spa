import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  //State para capturar el nombre del usuario
  const [user, setUser] = useState('');

  const handleLogin = () => {

    if(user.trim().length < 2) return;

    const lastPath = localStorage.getItem('lastPath') || '/';


    login(user);

    navigate(lastPath, {
      replace: true,
    });
  }

  return (
    <div className='content-center'>
      <div className='text-center d-grid gap-2 col-2 mx-auto'>
        <h1>Login</h1>

        <input type='text' placeholder='Nombre de usuario' className='form-control' value={user} onChange={(e) => setUser(e.target.value)} />

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
