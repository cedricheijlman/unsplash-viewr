import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

interface LayoutInterface {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutInterface) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
