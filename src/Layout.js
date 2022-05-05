import { Box, Drawer } from "@mui/material";
import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { NavBar } from "./NavBar";
import { SideBar } from "./Sidebar";
export const UserContext = createContext();

export const Layout = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const handleOpen = () => {
    setToggleDrawer(!toggleDrawer);
  };
  return (
    <UserContext.Provider value={handleOpen}>
      <NavBar />
      <Drawer anchor={"left"} open={toggleDrawer}>
        <SideBar handleOpen={handleOpen} />
      </Drawer>
      <Box sx={{ p: 10 }}>
        <Outlet />
      </Box>
    </UserContext.Provider>
  );
};
