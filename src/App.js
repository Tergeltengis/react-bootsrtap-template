import { Drawer } from "@mui/material";
import { createContext, useState } from "react";
import "./App.css";
import { NavBar } from "./NavBar";
import { ProductList } from "./ProductList";
import { SideBar } from "./Sidebar";
export const UserContext = createContext();

function App() {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const handleOpen = (event) => {
    setToggleDrawer(!toggleDrawer);
  };
  return (
    <UserContext.Provider value={handleOpen}>
      <Drawer anchor={"left"} open={toggleDrawer}>
        <SideBar handleOpen={handleOpen} />
      </Drawer>
      <NavBar>
        <ProductList />
      </NavBar>
    </UserContext.Provider>
  );
}

export default App;
