import React from "react";
import { Outlet } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <h1>Clinical Information about Pregnant Women</h1>
      </header>
      <Outlet />
    </div>
  );
}

export default Header;
