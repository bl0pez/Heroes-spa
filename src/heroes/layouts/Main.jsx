import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../../ui";

export const Main = () => {

  const { pathname, search } = useLocation();

  //Guardamos la última ruta en el localStorage
  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);

  return (
    <>
      <Navbar />

      <div className="container mt-2">
        <Outlet />
      </div>
    </>
  );
};
