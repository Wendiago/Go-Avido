import "./Following.scss";
import { Button } from "../../Button/Button";
import { Avatar } from "../../../assets";
export const Following = () => {
  return (
    <div className="profilepage-following__container">
      <div className="profilepage-following__statusbar">
        You are following 73 people out of your network
      </div>
      <div className="profilepage-following__followings">
        <div className="following">
          <div className="info">
            <img src={Avatar} alt="following avatar" />
            <div className="info-group">
              <div className="name">Vishnu Kumar Agrawal</div>
              <div className="position">Ux Designer at Divim Technology</div>
            </div>
          </div>
          <Button className="button" color="orange" size="small">
            Unfollow
          </Button>
        </div>

        <div className="following">
          <div className="info">
            <img src={Avatar} alt="following avatar" />
            <div className="info-group">
              <div className="name">Vishnu Kumar Agrawal</div>
              <div className="position">Ux Designer at Divim Technology</div>
            </div>
          </div>
          <Button className="button" color="black" size="small">
            Unfollow
          </Button>
        </div>

        <div className="following">
          <div className="info">
            <img src={Avatar} alt="following avatar" />
            <div className="info-group">
              <div className="name">Vishnu Kumar Agrawal</div>
              <div className="position">Ux Designer at Divim Technology</div>
            </div>
          </div>
          <Button className="button" color="orange" size="small">
            Unfollow
          </Button>
        </div>

        <div className="following">
          <div className="info">
            <img src={Avatar} alt="following avatar" />
            <div className="info-group">
              <div className="name">Vishnu Kumar Agrawal</div>
              <div className="position">Ux Designer at Divim Technology</div>
            </div>
          </div>
          <Button className="button" color="orange" size="small">
            Unfollow
          </Button>
        </div>

        <div className="following">
          <div className="info">
            <img src={Avatar} alt="following avatar" />
            <div className="info-group">
              <div className="name">Vishnu Kumar Agrawal</div>
              <div className="position">Ux Designer at Divim Technology</div>
            </div>
          </div>
          <Button className="button" color="orange" size="small">
            Unfollow
          </Button>
        </div>
      </div>
    </div>
  );
};
