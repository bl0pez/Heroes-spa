import { Navigate, Route, Routes} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../auth';

import { LoginPage } from '../auth/pages/LoginPage';
import { DcPage, HeroPage, Main, MarvelPage, SearchPage } from '../heroes';

export const AppRouter = () => {

  const { logged } = useContext(AuthContext);

  return (
    <>
      <Routes>

        {
          logged
            ?
            (
              <Route path="*" element={<Main />} >
                <Route path="dc" element={<DcPage />} />
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:id" element={<HeroPage />} />
                <Route path="*" element={<Navigate to="/marvel" />} />
              </Route>

            )

            :
            (

              <>
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </>

            )

        }

      </Routes>
    </>
  );
};
