import "./ConnectionRecommendBox.scss";
import Avatar from "../../../assets/Ellipse 2.png";

interface RecommendationInfo {
  name: string;
  position: string;
  time: string;
  avatar: string;
}

const dummyData: RecommendationInfo[] = [
  {
    name: "John Doe",
    position: "Software Engineer at Example Corp",
    time: "1 Jan at 10:00 AM",
    avatar: Avatar,
  },
  {
    name: "Jane Smith",
    position: "Product Manager at Example Inc",
    time: "2 Feb at 11:30 AM",
    avatar: Avatar,
  },
  {
    name: "Alice Johnson",
    position: "UX Designer at Example Studio",
    time: "3 Mar at 2:15 PM",
    avatar: Avatar,
  },
];

export const ConnectionRecommendBox = () => {
  return (
    <div className="connection-recommendbox-container">
      <div className="connection-recommendbox__header">
        People you might know
      </div>
      <div className="connection-recommendbox__infobox-container">
        {dummyData.map((person, index) => (
          <div className="connection-recommendbox__infobox" key={index}>
            <div className="connection-recommendbox__infobox-avatar-infogroup">
              <img
                className="connection-recommendbox__infobox-avatar"
                src={person.avatar}
                alt="avatar"
              ></img>
              <div className="connection-recommendbox__infobox-infogroup">
                <div className="connection-recommendbox__infobox-name">
                  {person.name}
                </div>
                <div className="connection-recommendbox__infobox-position">
                  {person.position}
                </div>
                <div className="connection-recommendbox__infobox-time">
                  {person.time}
                </div>
              </div>
            </div>
            <div className="connection-recommendbox__infobox-button">
              Connect
            </div>
          </div>
        ))}
      </div>
      <div className="connection-recommendbox__viewall">
        <div className="connection-recommendbox__viewall-group">
          <p>View all recommendations</p>
          <svg
            className="connection-recommendbox__viewall-chevron-right"
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
