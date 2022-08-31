import { Outlet } from "react-router-dom";
import { Navbar } from "../../ui";

export const Main = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-2">
        <Outlet />
      </div>
    </>
  );
};
