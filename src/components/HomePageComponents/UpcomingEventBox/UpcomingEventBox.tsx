import "./UpcomingEventBox.scss";

export interface EventInfo {
  day: string;
  month: string;
  name: string;
  place: string;
}

export const UpcomingEventBox = () => {
  const dummyData: EventInfo[] = [
    {
      day: "03",
      month: "Dec",
      name: "Design Thinking",
      place: "@ Creative Town Hall",
    },
    {
      day: "03",
      month: "Dec",
      name: "Design Thinking",
      place: "@ Creative Town Hall",
    },
    {
      day: "03",
      month: "Dec",
      name: "Design Thinking",
      place: "@ Creative Town Hall",
    },
  ];

  return (
    <div className="upcomingeventbox-container">
      <div className="upcomingeventbox__header">Upcoming events</div>
      <div className="upcomingeventbox__infobox-container">
        {dummyData.map((event, index) => (
          <div className="upcomingeventbox__infobox" key={index}>
            <div className="upcomingeventbox__infobox-time-infogroup">
              <div className="upcomingeventbox__infobox-time">
                <div className="upcomingeventbox__infobox-time-day">
                  {event.day}
                </div>
                <div className="upcomingeventbox__infobox-time-month">
                  {event.month}
                </div>
              </div>
              <div className="upcomingeventbox__infobox-infogroup">
                <div className="upcomingeventbox__infobox-name">
                  {event.name}
                </div>
                <div className="upcomingeventbox__infobox-place">
                  {event.place}
                </div>
                <div className="upcomingeventbox__infobox-viewmore">Detail</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="upcomingeventbox__viewall">
        <div className="upcomingeventbox__viewall-group">
          <p>View more</p>
          <svg
            className="upcomingeventbox__viewall-chevron-right"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.87634 4.5L11.3763 9L6.87634 13.5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
