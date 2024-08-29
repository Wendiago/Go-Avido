import "./AddPositionNotiBox.scss";

export const AddPositionNotiBox = () => {
  return (
    <div className="add-position-box">
      <p className="add-position-box-des">
        members with a position get 3 times more profile views
      </p>
      <a>
        <p>Add your Position</p>
        <svg
          className="add-position-box-chevron-right"
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
