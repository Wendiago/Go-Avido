import "./PremiumAd.scss";

export const PremiumAd = () => {
  return (
    <div className="premium-ad">
      <div className="premium-ad-info">
        <div className="premium-ad-info-viewer">
          <div className="counter">899</div>
          <p className="des">People viewed your profile in the past 7 days</p>
        </div>
        <div className="premium-ad-info-connections">
          <div className="counter">899</div>
          <p className="des">Connections grow your network </p>
        </div>
      </div>
      <div className="premium-ad-button">Premium</div>
      <a className="premium-ad-detail">
        <p>See who's viewed your profile in the last 90 days</p>
        <svg
          className="premium-ad-chevron-right"
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
      </a>
    </div>
  );
};
