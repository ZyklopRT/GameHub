import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;