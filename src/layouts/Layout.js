import { createContext } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const UserContext = createContext();

export const Layout = () => {
  return (
    <>
      <NavBar />
      <div style={{ padding: 10 }}>
        <Outlet />
      </div>
    </>
  );
};
