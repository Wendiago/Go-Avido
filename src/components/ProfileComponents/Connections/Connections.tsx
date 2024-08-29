import "./Connections.scss";
import { Avatar } from "../../../assets";

export const Connections = () => {
  return (
    <div className="profilepage-connections__container">
      <div className="profilepage-connections__statusbar">
        <div className="profilepage-connections__statusbar-search">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.91187 7.65931C3.91187 5.63267 5.55479 3.98975 7.58143 3.98975C9.60808 3.98975 11.251 5.63267 11.251 7.65931C11.251 9.68596 9.60808 11.3289 7.58143 11.3289C5.55479 11.3289 3.91187 9.68596 3.91187 7.65931ZM7.58143 2.48975C4.72636 2.48975 2.41187 4.80424 2.41187 7.65931C2.41187 10.5144 4.72636 12.8289 7.58143 12.8289C8.73845 12.8289 9.80669 12.4488 10.6681 11.8066L13.9961 15.1347C14.289 15.4276 14.7639 15.4276 15.0568 15.1347C15.3497 14.8418 15.3497 14.3669 15.0568 14.074L11.7287 10.746C12.3709 9.88457 12.751 8.81633 12.751 7.65931C12.751 4.80424 10.4365 2.48975 7.58143 2.48975Z"
              fill="#121212"
            />
          </svg>
          <input
            type="text"
            className="searchbox"
            placeholder="Search By Name"
          ></input>
        </div>
        <div className="profilepage-connections__statusbar-status">
          <div className="recently-added">Recently Added (6)</div>
          <div className="separator-container">
            <div className="separator"></div>
          </div>
          <div className="all">All (201)</div>
        </div>
      </div>
      <div className="profilepage-connections__connections">
        <div className="connection">
          <div className="connection__avatar">
            <img src={Avatar} alt="connection avatar" />
          </div>
          <div className="connection__name">John Doe</div>
          <div className="connection__position">Senior Software Engineer</div>
          <div className="connection__company">at Luxury</div>
        </div>

        <div className="connection">
          <div className="connection__avatar">
            <img src={Avatar} alt="connection avatar" />
          </div>
          <div className="connection__name">John Doe</div>
          <div className="connection__position">Senior Software Engineer</div>
          <div className="connection__company">at Luxury</div>
        </div>

        <div className="connection">
          <div className="connection__avatar">
            <img src={Avatar} alt="connection avatar" />
          </div>
          <div className="connection__name">John Doe</div>
          <div className="connection__position">Senior Software Engineer</div>
          <div className="connection__company">at Luxury</div>
        </div>

        <div className="connection">
          <div className="connection__avatar">
            <img src={Avatar} alt="connection avatar" />
          </div>
          <div className="connection__name">John Doe</div>
          <div className="connection__position">Senior Software Engineer</div>
          <div className="connection__company">at Luxury</div>
        </div>

        <div className="connection">
          <div className="connection__avatar">
            <img src={Avatar} alt="connection avatar" />
          </div>
          <div className="connection__name">John Doe</div>
          <div className="connection__position">Senior Software Engineer</div>
          <div className="connection__company">at Luxury</div>
        </div>

        <div className="connection">
          <div className="connection__avatar">
            <img src={Avatar} alt="connection avatar" />
          </div>
          <div className="connection__name">John Doe</div>
          <div className="connection__position">Senior Software Engineer</div>
          <div className="connection__company">at Luxury</div>
        </div>

        <div className="connection">
          <div className="connection__avatar">
            <img src={Avatar} alt="connection avatar" />
          </div>
          <div className="connection__name">John Doe</div>
          <div className="connection__position">Senior Software Engineer</div>
          <div className="connection__company">at Luxury</div>
        </div>

        <div className="connection">
          <div className="connection__avatar">
            <img src={Avatar} alt="connection avatar" />
          </div>
          <div className="connection__name">John Doe</div>
          <div className="connection__position">Senior Software Engineer</div>
          <div className="connection__company">at Luxury</div>
        </div>

        <div className="connection">
          <div className="connection__avatar">
            <img src={Avatar} alt="connection avatar" />
          </div>
          <div className="connection__name">John Doe</div>
          <div className="connection__position">Senior Software Engineer</div>
          <div className="connection__company">at Luxury</div>
        </div>
      </div>
    </div>
  );
};
