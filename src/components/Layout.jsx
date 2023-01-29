import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className='w-full min-h-[50px] absolute z-10'>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
