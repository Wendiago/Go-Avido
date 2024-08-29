import { Navbar } from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Outlet />
      <div style={{ paddingTop: "52px" }}></div>
    </main>
  );
};
