import "./ProfilePage.scss";
import { Outlet, NavLink } from "react-router-dom";
import { Avatar } from "../../assets";
import { Button } from "../../components/Button/Button";
export const ProfilePage = () => {
  return (
    <>
      <div className="profilepage-header__container">
        <div className="profilepage-header">
          <div className="profilepage-header__grid">
            <div className="profilepage-header__avatar-container">
              <img
                className="profilepage-header__avatar"
                src={Avatar}
                alt="avatar"
              ></img>
            </div>

            <div className="profilepage-header__info-basicinfo">
              <div className="profilepage-header__info-basicinfo-name">
                Vishnu Kumar Agrawal
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8041 0.117485C11.9247 0.045165 12.0753 0.0451651 12.1959 0.117486L15.1881 1.91179C15.2375 1.94144 15.2931 1.95948 15.3505 1.96455L18.8259 2.27169C18.9659 2.28406 19.0878 2.37261 19.1429 2.502L20.5089 5.71238C20.5315 5.76543 20.5658 5.81266 20.6093 5.85051L23.2404 8.14177C23.3464 8.23412 23.393 8.37738 23.3615 8.51443L22.5796 11.9146C22.5667 11.9708 22.5667 12.0292 22.5796 12.0854L23.3615 15.4856C23.393 15.6226 23.3464 15.7659 23.2404 15.8582L20.6093 18.1495C20.5658 18.1873 20.5315 18.2346 20.5089 18.2876L19.1429 21.498C19.0878 21.6274 18.9659 21.7159 18.8259 21.7283L15.3505 22.0354C15.2931 22.0405 15.2375 22.0586 15.1881 22.0882L12.1959 23.8825C12.0753 23.9548 11.9247 23.9548 11.8041 23.8825L8.81191 22.0882C8.76247 22.0586 8.70695 22.0405 8.64952 22.0354L5.17413 21.7283C5.03406 21.7159 4.91219 21.6274 4.85713 21.498L3.49108 18.2876C3.46851 18.2346 3.43419 18.1873 3.39072 18.1495L0.7596 15.8582C0.653551 15.7659 0.607003 15.6226 0.638516 15.4856L1.42037 12.0854C1.43329 12.0292 1.43329 11.9708 1.42037 11.9146L0.638516 8.51443C0.607002 8.37738 0.653551 8.23412 0.7596 8.14177L3.39072 5.85051C3.43419 5.81266 3.46851 5.76543 3.49108 5.71238L4.85713 2.502C4.91219 2.37261 5.03406 2.28406 5.17413 2.27169L8.64952 1.96455C8.70695 1.95948 8.76247 1.94144 8.81191 1.91179L11.8041 0.117485Z"
                    fill="#0BAACA"
                  />
                  <path
                    d="M5.96625 11.619L9.97418 15.627L17.9901 7.61108"
                    stroke="white"
                    strokeWidth="1.20238"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="profilepage-header__info-basicinfo-position">
                Ux Designer at Divim Technology
              </div>
              <div className="profilepage-header__info-basicinfo-place">
                Jaipur, India
              </div>
            </div>
            <div className="profilepage-header__info-workinfo">
              <div className="profilepage-header__info-workinfo-prev">
                <div className="prev title">Previous</div>
                <div className="work">Cresitatech IT Solutions</div>
                <div className="place">Jaipur, India</div>
              </div>
              <div className="separator-container">
                <div className="separator"></div>
              </div>
              <div className="profilepage-header__info-workinfo-education">
                <div className="education title">Education</div>
                <div className="school">Rajasthan University</div>
                <div className="place">Jaipur, India</div>
              </div>
            </div>
          </div>
        </div>
        <div className="profilepage-controllers-background">
          <div className="profilepage-controllers__container">
            <div className="profilepage-controllers">
              <div className="profilepage-controllers__connect">
                <Button color="teal-filled" size="small">
                  Connect
                </Button>
              </div>
              <div className="profilepage-controllers__email">
                <Button color="teal" size="small">
                  Send an email
                </Button>
              </div>
              <div className="profilepage-controllers__follow">
                <Button color="teal" size="small">
                  Follow / Unfollow
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profilepage-content__container">
        <div className="profilepage-content__box">
          <div className="profilepage-content__navlinks">
            <NavLink
              to="/profile/background"
              className={({ isActive }) =>
                `profilepage-navlink ${isActive ? "active" : ""}`
              }
            >
              Background
            </NavLink>
            <NavLink
              to="/profile/recommendations"
              className={({ isActive }) =>
                `profilepage-navlink ${isActive ? "active" : ""}`
              }
            >
              Recommendations
            </NavLink>
            <NavLink
              to="/profile/connections"
              className={({ isActive }) =>
                `profilepage-navlink ${isActive ? "active" : ""}`
              }
            >
              Connections
            </NavLink>
            <NavLink
              to="/profile/following"
              className={({ isActive }) =>
                `profilepage-navlink ${isActive ? "active" : ""}`
              }
            >
              Following
            </NavLink>
            <NavLink
              to="/profile/followers"
              className={({ isActive }) =>
                `profilepage-navlink ${isActive ? "active" : ""}`
              }
            >
              Followers
            </NavLink>
          </div>

          <div className="profilepage-content__content">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};
