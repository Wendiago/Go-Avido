import "./Recommendations.scss";
import { Avatar } from "../../../assets";
import { Button } from "../../Button/Button";

export const Recommendations = () => {
  return (
    <div className="profilepage-recommendations__container">
      <div className="profilepage-recommendations__statusBar">
        <div className="group">
          <div className="receive">Received(4)</div>
          <div className="separator-container">
            <div className="separator"></div>
          </div>
          <div className="given">Given(2)</div>
        </div>
        <div className="write-a-recommendation">
          <Button color="cyan-filled" size="small">
            Write a Recommendation
          </Button>
        </div>
      </div>
      <div className="profilepage-recommendations__recommendations">
        <div className="recommendation">
          <div className="recommendation__avatar">
            <img src={Avatar} alt="recommendation avatar" />
          </div>
          <div className="recommendation__info">
            <div className="group">
              <div className="recommendation__info-name">Gaurav Sharma</div>
              <div className="recommendation__info-job">
                CTO at Divim Technology
              </div>
            </div>

            <div className="recommendation__info-recommendation">
              <div>
                <svg
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.3359 0L15.4883 0.203125C13.7448 1.4388 12.5599 2.77604 11.9336 4.21484C11.3242 5.65365 11.0195 6.86393 11.0195 7.8457C11.0195 8.0319 11.0703 8.24349 11.1719 8.48047C11.2734 8.71745 11.4173 8.83594 11.6035 8.83594C11.6374 8.83594 11.7982 8.80208 12.0859 8.73438C12.3906 8.66667 12.5938 8.63281 12.6953 8.63281C13.4062 8.63281 14.041 8.87825 14.5996 9.36914C15.1582 9.8431 15.4375 10.4609 15.4375 11.2227C15.4375 11.9674 15.1751 12.6191 14.6504 13.1777C14.1257 13.7194 13.4316 13.9902 12.5684 13.9902C11.5358 13.9902 10.6302 13.5417 9.85156 12.6445C9.07292 11.7305 8.68359 10.4779 8.68359 8.88672C8.68359 7.05859 9.19141 5.43359 10.207 4.01172C11.2396 2.58984 12.9492 1.2526 15.3359 0ZM6.65234 0L6.85547 0.203125C5.07812 1.4388 3.88477 2.76758 3.27539 4.18945C2.68294 5.61133 2.38672 6.83008 2.38672 7.8457C2.38672 8.50586 2.56445 8.83594 2.91992 8.83594C2.95378 8.83594 3.11458 8.80208 3.40234 8.73438C3.70703 8.66667 3.91016 8.63281 4.01172 8.63281C4.73958 8.63281 5.37435 8.87825 5.91602 9.36914C6.47461 9.86003 6.75391 10.4779 6.75391 11.2227C6.75391 11.9674 6.49154 12.6191 5.9668 13.1777C5.44206 13.7194 4.74805 13.9902 3.88477 13.9902C2.78451 13.9902 1.86198 13.5163 1.11719 12.5684C0.372396 11.6035 0 10.3763 0 8.88672C0 7.05859 0.507812 5.43359 1.52344 4.01172C2.55599 2.58984 4.26562 1.2526 6.65234 0Z"
                    fill="#3E3E59"
                  />
                </svg>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
            </div>
          </div>
        </div>

        <div className="recommendation">
          <div className="recommendation__avatar">
            <img src={Avatar} alt="recommendation avatar" />
          </div>
          <div className="recommendation__info">
            <div className="group">
              <div className="recommendation__info-name">Gaurav Sharma</div>
              <div className="recommendation__info-job">
                CTO at Divim Technology
              </div>
            </div>

            <div className="recommendation__info-recommendation">
              <div>
                <svg
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.3359 0L15.4883 0.203125C13.7448 1.4388 12.5599 2.77604 11.9336 4.21484C11.3242 5.65365 11.0195 6.86393 11.0195 7.8457C11.0195 8.0319 11.0703 8.24349 11.1719 8.48047C11.2734 8.71745 11.4173 8.83594 11.6035 8.83594C11.6374 8.83594 11.7982 8.80208 12.0859 8.73438C12.3906 8.66667 12.5938 8.63281 12.6953 8.63281C13.4062 8.63281 14.041 8.87825 14.5996 9.36914C15.1582 9.8431 15.4375 10.4609 15.4375 11.2227C15.4375 11.9674 15.1751 12.6191 14.6504 13.1777C14.1257 13.7194 13.4316 13.9902 12.5684 13.9902C11.5358 13.9902 10.6302 13.5417 9.85156 12.6445C9.07292 11.7305 8.68359 10.4779 8.68359 8.88672C8.68359 7.05859 9.19141 5.43359 10.207 4.01172C11.2396 2.58984 12.9492 1.2526 15.3359 0ZM6.65234 0L6.85547 0.203125C5.07812 1.4388 3.88477 2.76758 3.27539 4.18945C2.68294 5.61133 2.38672 6.83008 2.38672 7.8457C2.38672 8.50586 2.56445 8.83594 2.91992 8.83594C2.95378 8.83594 3.11458 8.80208 3.40234 8.73438C3.70703 8.66667 3.91016 8.63281 4.01172 8.63281C4.73958 8.63281 5.37435 8.87825 5.91602 9.36914C6.47461 9.86003 6.75391 10.4779 6.75391 11.2227C6.75391 11.9674 6.49154 12.6191 5.9668 13.1777C5.44206 13.7194 4.74805 13.9902 3.88477 13.9902C2.78451 13.9902 1.86198 13.5163 1.11719 12.5684C0.372396 11.6035 0 10.3763 0 8.88672C0 7.05859 0.507812 5.43359 1.52344 4.01172C2.55599 2.58984 4.26562 1.2526 6.65234 0Z"
                    fill="#3E3E59"
                  />
                </svg>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="separator"></div>
    </div>
  );
};
