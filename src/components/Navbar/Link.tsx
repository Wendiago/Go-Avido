import { NavLink } from "react-router-dom";
import "./Link.scss";

type Props = {
  page: string;
  link: string;
};

export const Navlink = ({ page, link }: Props) => {
  return (
    <NavLink
      className={({ isActive }) => `navlink ${isActive ? "active" : ""}`}
      to={link}
    >
      {page}
    </NavLink>
  );
};
