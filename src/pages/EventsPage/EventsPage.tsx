import "./EventsPage.scss";
import { useState } from "react";
import { UpcomingEventBox } from "../../components/HomePageComponents/UpcomingEventBox/UpcomingEventBox";
import { SearchBar } from "../../components/EventsPageComponents/SearchBar/SearchBar";
import { GeneralBox } from "../../components/EventsPageComponents/GeneralBox/GeneralBox";
import { Event } from "../../components/EventsPageComponents/Event/Event";
import { Button } from "../../components/Button/Button";
import { PlaceholderImage } from "../../assets";
import { CreateEventModal } from "../../components/EventsPageComponents/CreateEventModal/CreateEventModal";
import {
  EventAvailability,
  EventDetailProps,
} from "../../@types/EventsPageTypes";

export const EventsPage = () => {
  const [isCreateEventModalOpen, setCreateEventModalOpen] =
    useState<boolean>(false);

  const eventDetailData: EventDetailProps[] = [
    {
      eventImage: PlaceholderImage,
      eventDate: "03 Dec 2023",
      eventAvailability: EventAvailability.FillingUpFast,
      eventLocation: "IIT Delhi, New Delhi",
      eventName: "Introduction to Figma Elements",
      eventTime: "05:00 PM IST",
      eventInterested: "2.5K",
      eventAttending: "1K",
      isInterested: true,
    },
    {
      eventImage: PlaceholderImage,
      eventDate: "03 Dec 2023",
      eventAvailability: EventAvailability.Moderate,
      eventLocation: "IIT Delhi, New Delhi",
      eventName: "Introduction to Figma Elements",
      eventTime: "05:00 PM IST",
      eventInterested: "2.5K",
      eventAttending: "1K",
      isInterested: false,
    },
    {
      eventImage: PlaceholderImage,
      eventDate: "03 Dec 2023",
      eventAvailability: EventAvailability.Available,
      eventLocation: "IIT Delhi, New Delhi",
      eventName: "Introduction to Figma Elements",
      eventTime: "05:00 PM IST",
      eventInterested: "2.5K",
      eventAttending: "1K",
      isInterested: false,
    },
    {
      eventImage: PlaceholderImage,
      eventDate: "03 Dec 2023",
      eventAvailability: EventAvailability.New,
      eventLocation: "IIT Delhi, New Delhi",
      eventName: "Introduction to Figma Elements",
      eventTime: "05:00 PM IST",
      eventInterested: "2.5K",
      eventAttending: "1K",
      isInterested: false,
    },
  ];

  return (
    <div className="eventspage">
      {isCreateEventModalOpen && (
        <CreateEventModal
          isOpen={isCreateEventModalOpen}
          closeModal={() => setCreateEventModalOpen(false)}
        />
      )}

      <div className="eventspage__backgroundbanner"></div>
      <div className="eventspage__container">
        <SearchBar />
        <div className="eventspage__content-sidebar">
          <Button
            color="cyan-filled"
            size="large"
            className="create-event-button"
            borderRadius="8px"
            onClick={() => {
              setCreateEventModalOpen(true);
            }}
          >
            + Create Event
          </Button>
          <GeneralBox />
          <UpcomingEventBox />
        </div>
        <div className="eventspage__content-events">
          {eventDetailData.map((event, key) => (
            <Event eventDetail={event} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};
