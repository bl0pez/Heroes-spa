import { Navigate, Route, Routes } from "react-router-dom";

import { DcPage, HeroPage, Main, MarvelPage, SearchPage } from "../heroes";
import { LoginPage } from "../auth/pages/LoginPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<Main />} >
          <Route path="dc" element={<DcPage />} />
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />
          
        </Route>

        <Route path="*" element={<Navigate to="/marvel" />} />

      </Routes>
    </>
  );
};
