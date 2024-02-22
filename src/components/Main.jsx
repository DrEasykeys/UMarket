import React from "react";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";
import { Outlet } from "react-router-dom";
import Footer2 from "./Footer2";

function Main() {
  return (
    <div>
      <Header1 />
      <Header2 />
      <Header3 />
      <div className="Outlet min-h-[80vh] h-[fit] ">
        <Outlet />
      </div>
      <Footer2 />
    </div>
  );
}

export default Main;
