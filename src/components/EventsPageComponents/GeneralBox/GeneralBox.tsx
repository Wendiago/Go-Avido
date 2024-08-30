import "./GeneralBox.scss";
export const GeneralBox = () => {
  return (
    <div className="general-box">
      <div className="header">General</div>
      <div className="recommended-box">
        <p>Recommended</p>
        <p>{">"}</p>
      </div>
      <div className="interested-box">
        <p>Interested</p>
        <p>{">"}</p>
      </div>
      <div className="events-box">
        <p>Your Events</p>
        <p>{">"}</p>
      </div>
    </div>
  );
};
