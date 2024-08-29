import "./Followers.scss";
import { Button } from "../../Button/Button";
import { Avatar } from "../../../assets";

export const Followers = () => {
  return (
    <div className="profilepage-followers__container">
      <div className="profilepage-followers__statusbar">
        193 people are following you
      </div>
      <div className="profilepage-followers__followerss">
        <div className="followers">
          <div className="info">
            <img src={Avatar} alt="followers avatar" />
            <div className="info-group">
              <div className="name">Vishnu Kumar Agrawal</div>
              <div className="position">Ux Designer at Divim Technology</div>
            </div>
          </div>
          <Button className="button" color="cyan" size="small">
            Follow Back
          </Button>
        </div>

        <div className="followers">
          <div className="info">
            <img src={Avatar} alt="followers avatar" />
            <div className="info-group">
              <div className="name">Vishnu Kumar Agrawal</div>
              <div className="position">Ux Designer at Divim Technology</div>
            </div>
          </div>
          <Button className="button" color="black" size="small">
            Follow Back
          </Button>
        </div>

        <div className="followers">
          <div className="info">
            <img src={Avatar} alt="followers avatar" />
            <div className="info-group">
              <div className="name">Vishnu Kumar Agrawal</div>
              <div className="position">Ux Designer at Divim Technology</div>
            </div>
          </div>
          <Button className="button" color="orange" size="small">
            Unfollow
          </Button>
        </div>

        <div className="followers">
          <div className="info">
            <img src={Avatar} alt="followers avatar" />
            <div className="info-group">
              <div className="name">Vishnu Kumar Agrawal</div>
              <div className="position">Ux Designer at Divim Technology</div>
            </div>
          </div>
          <Button className="button" color="black" size="small">
            Unfollow
          </Button>
        </div>

        <div className="followers">
          <div className="info">
            <img src={Avatar} alt="followers avatar" />
            <div className="info-group">
              <div className="name">Vishnu Kumar Agrawal</div>
              <div className="position">Ux Designer at Divim Technology</div>
            </div>
          </div>
          <Button className="button" color="black" size="small">
            Unfollow
          </Button>
        </div>
      </div>
    </div>
  );
};
