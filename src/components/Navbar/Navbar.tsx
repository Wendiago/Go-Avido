import { LogoLight, LogoDark } from "../../assets";
import Avatar from "../../assets/Avatar.png";
import { Navlink } from "./Link";
import { Navigation, NavigationLink } from "../../@types/navTypes";
import "./Navbar.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchIcon } from "../../icons";
import { useTheme } from "../../context/theme";

export const Navbar = () => {
  const [notificationCounter, setNotificationCounter] = useState<number>(2);
  const { theme } = useTheme();
  const navigate = useNavigate();
  // Handle maximum display of 99+
  const displayCounter = notificationCounter > 99 ? "99+" : notificationCounter;

  useEffect(() => {
    setNotificationCounter(3);
  });
  return (
    <nav>
      <div className="nav">
        <img
          src={theme == "dark" ? LogoDark : LogoLight}
          alt="Logo"
          className="nav-logo"
          onClick={() => navigate("/")}
        />
        <div className="nav-panel">
          {Object.entries(Navigation)
            .filter(([key]) => key !== "Profile")
            .map(([key, value]) => (
              <Navlink
                key={key}
                page={value}
                link={NavigationLink[key as keyof typeof NavigationLink]}
              />
            ))}
        </div>

        <div className="nav-icon">
          <SearchIcon className="nav-icon-img" />
          <ThemeToggle color="var(--yellow-600)" />
          <div className="nav-icon-notification">
            <FontAwesomeIcon icon={faBell} className="nav-icon-img" />
            {notificationCounter != 0 && (
              <div
                className={`notification-icon-counter ${
                  notificationCounter > 99 ? "large-number" : ""
                }`}
              >
                {displayCounter.toString()}
              </div>
            )}
          </div>
          <div className="nav-icon-avatar">
            <img
              src={Avatar}
              alt="Avatar"
              onClick={() => navigate("/profile")}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
