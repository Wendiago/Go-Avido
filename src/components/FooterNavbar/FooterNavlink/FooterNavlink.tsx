import "./FooterNavlink.scss";
import { NavLink } from "react-router-dom";

type FooterNavlink = {
  link: string;
  children: React.ReactNode;
};
export const FooterNavlink = ({ link, children }: FooterNavlink) => {
  return (
    <NavLink
      className={({ isActive }) => `footerNavlink ${isActive ? "active" : ""}`}
      to={link}
    >
      {children}
    </NavLink>
  );
};
