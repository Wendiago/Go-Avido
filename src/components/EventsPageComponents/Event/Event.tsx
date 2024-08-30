import "./Event.scss";
import { Avatar } from "../../../assets";
import { LocationIcon, ClockIcon, UserIcon } from "../../../icons";
import { Button } from "../../Button/Button";
import {
  EventDetailProps,
  EventAvailabilityClass,
} from "../../../@types/EventsPageTypes";
export const Event = ({ eventDetail }: { eventDetail: EventDetailProps }) => {
  return (
    <div className="event">
      <img
        src={eventDetail.eventImage}
        alt="event-image"
        className="event__image"
      />
      <div className="event__info">
        <div className="event__info-date-availability">
          <div className="date">{eventDetail.eventDate}</div>
          <div
            className={`availability ${
              EventAvailabilityClass[eventDetail.eventAvailability]
            }`}
          >
            {eventDetail.eventAvailability}
          </div>
        </div>
        <div className="event__info-name">{eventDetail.eventName}</div>
        <div className="event__info-detail">
          <div className="location">
            <LocationIcon />
            {eventDetail.eventLocation}
          </div>
          <div className="time">
            <ClockIcon />
            {eventDetail.eventTime}
          </div>
          <div className="interested">
            <UserIcon />
            {eventDetail.eventInterested} Interested
          </div>
          <div className="attending">
            <UserIcon />
            {eventDetail.eventAttending} Attending
          </div>
        </div>
        <div className="event__info-speakers">
          <p>Speakers</p>
          <div className="avatars">
            <img src={Avatar} alt="avatar" />
            <img src={Avatar} alt="avatar" />
            <img src={Avatar} alt="avatar" />
            <img src={Avatar} alt="avatar" />
            <img src={Avatar} alt="avatar" />
            <img src={Avatar} alt="avatar" />
          </div>
        </div>
        {eventDetail.isInterested ? (
          <Button
            className="event__info-button"
            color="teal-filled"
            size="medium"
          >
            <svg
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="24"
                height="24"
                rx="12"
                strokeLinejoin="bevel"
              />
              <path
                d="M7.711 13L11.461 16.75L18.961 9.25"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Interested</p>
          </Button>
        ) : (
          <Button className="event__info-button" color="cyan" size="medium">
            <p>Interested</p>
          </Button>
        )}
      </div>
    </div>
  );
};
