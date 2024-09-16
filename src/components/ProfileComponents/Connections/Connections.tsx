import "./Connections.scss";
import { Avatar } from "../../../assets";
import { SearchIcon } from "../../../icons";
export const Connections = () => {
  return (
    <div className="profilepage-connections__container">
      <div className="profilepage-connections__statusbar">
        <div className="profilepage-connections__statusbar-search">
          <SearchIcon />
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
