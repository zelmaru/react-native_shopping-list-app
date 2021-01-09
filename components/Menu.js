import React from "react";
import SideDrawer from "./SideDrawer";
import ThemeSwitcher from "./ThemeSwitcher";

function Menu(props) {
  return (
    <SideDrawer>
      <ThemeSwitcher />
    </SideDrawer>
  );
}

export default Menu;
