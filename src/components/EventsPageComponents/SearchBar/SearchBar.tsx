import "./SearchBar.scss";
import { SearchIcon, LocationIcon } from "../../../icons";
import { Video, Calendar } from "../../../assets";
import { Button } from "../../Button/Button";
export const SearchBar = () => {
  return (
    <div className="eventspage__searchbar">
      <div className="eventspage__searchbar-searchbox">
        <SearchIcon width="28px" height="28px" />
        <input type="text" placeholder="Search Events here" />
      </div>
      <div className="separator"></div>
      <div className="eventspage__searchbar-filters">
        <div className="location-filter">
          <LocationIcon color="var(--cyan)" width="28px" height="28px" />
          <p>New Delhi</p>
        </div>
        <div className="event-filter">
          <img src={Video} alt="" />
          <p>Event Type</p>
        </div>
        <div className="date-filter">
          <img src={Calendar} alt="" />
          <p>Date</p>
        </div>
        <Button className="filter-button" color="cyan-filled" size="small">
          Find Events
        </Button>
      </div>
    </div>
  );
};
