import "./PostBox.scss";
import Avatar from "../../../assets/Avatar.png";
import Photo from "../../../assets/Union.png";
import Video from "../../../assets/youtube.png";
import Events from "../../../assets/dit.png";
import Calendar from "../../../assets/calendar.png";

type PostBoxProp = {
  openModal: () => void;
};

export const PostBox = ({ openModal }: PostBoxProp) => {
  return (
    <div className="postbox">
      <div className="postbox-content">
        <img src={Avatar} alt="avatar" />
        <p onClick={openModal}>What's on your mind?</p>
      </div>
      <div className="separator"></div>
      <div className="postbox-functionality">
        <div className="postbox-functionality-function">
          <img src={Photo} alt="" />
          <p>Photo</p>
        </div>

        <div className="postbox-functionality-function">
          <img src={Video} alt="" />
          <p>Video</p>
        </div>

        <div className="postbox-functionality-function">
          <img src={Events} alt="" />
          <p>Event</p>
        </div>

        <div className="postbox-functionality-function">
          <img src={Calendar} alt="" />
          <p>Write an article</p>
        </div>
      </div>
    </div>
  );
};
