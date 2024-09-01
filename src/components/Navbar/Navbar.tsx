import Logo from "../../assets/logo.png";
import BookmarkIcon from "../../assets/bookmark.png";
import SearchIcon from "../../assets/search.png";
import NotificationIcon from "../../assets/notification.png";
import Avatar from "../../assets/Avatar.png";
import { Navlink } from "./Link";
import { Navigation, NavigationLink } from "../../@types/navTypes";
import "./Navbar.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [notificationCounter, setNotificationCounter] = useState<number>(2);
  const navigate = useNavigate();
  // Handle maximum display of 99+
  const displayCounter = notificationCounter > 99 ? "99+" : notificationCounter;
  return (
    <nav>
      <div className="nav">
        <img
          src={Logo}
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
          <div>
            <img src={SearchIcon} alt="Search" className="nav-icon-img" />
          </div>
          <div>
            <img src={BookmarkIcon} alt="Bookmark" className="nav-icon-img" />
          </div>
          <div className="nav-icon-notification">
            <img
              src={NotificationIcon}
              alt="Notification"
              className="nav-icon-img"
            />
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
