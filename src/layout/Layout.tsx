import { Navbar } from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { FooterNavbar } from "../components/FooterNavbar/FooterNavbar";
import { useEffect, useState } from "react";
import useScroll from "../hooks/useScroll";
export const Layout = () => {
  const [isFooterHide, setFooterHide] = useState<boolean>(true);
  const scroll = useScroll();

  // update classList of nav on scroll
  useEffect(() => {
    // Avoid updates when scroll position hasn't changed
    if (scroll.lastY === scroll.y) {
      return;
    }

    if (scroll.y - scroll.lastY > 0) {
      // Scrolling down
      setFooterHide(true);
    } else {
      // Scrolling up
      setFooterHide(false);
    }
  }, [scroll.y, scroll.lastY]);

  return (
    <main>
      <Navbar></Navbar>
      <Outlet />
      <div style={{ paddingTop: "52px" }}></div>
      <FooterNavbar className={isFooterHide ? "hidden" : ""}></FooterNavbar>
    </main>
  );
};
