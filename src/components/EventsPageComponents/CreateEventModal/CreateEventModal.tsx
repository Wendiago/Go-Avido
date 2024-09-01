import "./CreateEventModal.scss";
import { Button } from "../../Button/Button";
import { PlaceholderImage } from "../../../assets";
import { useRef, useEffect, useState } from "react";
import { Dropdown } from "../../Dropdown/Dropdown";
import { DatePicker } from "../../DatePicker/DatePicker";

type CreateEventModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};
export const CreateEventModal = ({
  isOpen,
  closeModal,
}: CreateEventModalProps) => {
  const [category, setCategory] = useState<string>("");
  const [typeOfEvent, setTypeOfEvent] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as Node) &&
      isOpen
    ) {
      closeModal();
    }
  };
  const handleCategoryChange = (value: string) => {
    setCategory(value);
    console.log(`Selected category: ${value}`);
  };
  const handleTypeOfEventChange = (value: string) => {
    setTypeOfEvent(value);
    console.log(`Selected type of event: ${value}`);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      //Disable background scrolling when modal is open
      document.querySelector("body")?.classList.add("no-scroll");
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.querySelector("body")?.classList.remove("no-scroll");
    };
  }, [isOpen]);
  return (
    <div className={`modal-container ${isOpen ? "show" : ""}`}>
      <div className="createEventModal__container" ref={modalRef}>
        <div className="createEventModal__uploadimg">
          <img src={PlaceholderImage} alt="upload image" />
          <div className="upload-button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.75 11.9996C0.948912 11.9996 1.13968 12.0787 1.28033 12.2193C1.42098 12.36 1.5 12.5507 1.5 12.7496V17.9996C1.5 18.3975 1.65804 18.779 1.93934 19.0603C2.22064 19.3416 2.60218 19.4996 3 19.4996H21C21.3978 19.4996 21.7794 19.3416 22.0607 19.0603C22.342 18.779 22.5 18.3975 22.5 17.9996V12.7496C22.5 12.5507 22.579 12.36 22.7197 12.2193C22.8603 12.0787 23.0511 11.9996 23.25 11.9996C23.4489 11.9996 23.6397 12.0787 23.7803 12.2193C23.921 12.36 24 12.5507 24 12.7496V17.9996C24 18.7953 23.6839 19.5583 23.1213 20.121C22.5587 20.6836 21.7956 20.9996 21 20.9996H3C2.20435 20.9996 1.44129 20.6836 0.87868 20.121C0.316071 19.5583 0 18.7953 0 17.9996V12.7496C0 12.5507 0.0790176 12.36 0.21967 12.2193C0.360322 12.0787 0.551088 11.9996 0.75 11.9996ZM7.5 7.28064C7.64065 7.42124 7.83138 7.50023 8.03025 7.50023C8.22912 7.50023 8.41985 7.42124 8.5605 7.28064L12 3.83964L15.4395 7.27914C15.5087 7.35077 15.5914 7.40791 15.6829 7.44721C15.7744 7.48652 15.8729 7.50721 15.9724 7.50808C16.072 7.50894 16.1708 7.48996 16.263 7.45225C16.3551 7.41454 16.4389 7.35885 16.5093 7.28843C16.5797 7.21801 16.6354 7.13427 16.6731 7.0421C16.7108 6.94993 16.7298 6.85117 16.7289 6.75159C16.7281 6.652 16.7074 6.55359 16.6681 6.46208C16.6288 6.37058 16.5716 6.28782 16.5 6.21864L12.531 2.24964C12.4613 2.17979 12.3786 2.12438 12.2874 2.08657C12.1963 2.04876 12.0987 2.0293 12 2.0293C11.9013 2.0293 11.8037 2.04876 11.7125 2.08657C11.6214 2.12438 11.5387 2.17979 11.469 2.24964L7.5 6.21864C7.43016 6.28831 7.37474 6.37107 7.33693 6.46219C7.29912 6.5533 7.27966 6.65099 7.27966 6.74964C7.27966 6.84829 7.29912 6.94597 7.33693 7.03709C7.37474 7.12821 7.43016 7.21097 7.5 7.28064Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="createEventModal__header">Create Event</div>
        <form className="createEventModal__form">
          <div className="form-name">
            <p>Event Name</p>
            <input type="text" placeholder="Enter event name here..." />
          </div>
          <div className="form-category">
            <p>Category</p>
            <Dropdown
              options={["Tech", "Education", "Healthcare"]}
              value={category}
              onChange={handleCategoryChange}
              placeholder="Select Category from drop down"
            />
          </div>
          <div className="group-date">
            <div className="form-date-startdate">
              <p>Start Date</p>
              <DatePicker
                value={startDate}
                onChange={(value) => setStartDate(value)}
                placeholder="Select Start Date (DD/MM/YY)"
              ></DatePicker>
            </div>
            <div className="form-date-enddate">
              <p>End Date</p>
              <DatePicker
                value={endDate}
                onChange={(value) => setEndDate(value)}
                placeholder="Select End Date (DD/MM/YY)"
              ></DatePicker>
            </div>
          </div>
          <div className="group-time">
            <div className="form-time-starttime">
              <p>Start Time</p>
              <input
                type="datetime-local"
                placeholder="Select Start Time (HH/MM/SS)"
              />
            </div>
            <div className="form-time-endtime">
              <p>End Time</p>
              <input
                type="datetime-local"
                placeholder="Select End Time (HH/MM/SS)"
              />
            </div>
          </div>
          <div className="form-description">
            <p>Description</p>
            <input type="text" placeholder="Add Event Description here..." />
          </div>
          <div className="form-type">
            <p>Type Of Event</p>
            <Dropdown
              options={["Tech", "Education", "Healthcare"]}
              value={typeOfEvent}
              onChange={handleTypeOfEventChange}
              placeholder="Select Type of Event from drop down"
            />
          </div>
          <div className="form-broadcastLink">
            <p>Broadcast Link</p>
            <input type="text" placeholder="Enter Broadcast link here..." />
          </div>
          <div className="form-location">
            <p>Location</p>
            <input
              type="text"
              placeholder="Enter Event Location details here..."
            />
          </div>
          <div className="form-speakers">
            <p>Speakers</p>
            <input type="text" placeholder="Tag your Event Speakers here" />
          </div>
          <div className="form-hashtags">
            <p>Hashtags</p>
            <input
              type="text"
              placeholder="Enter Event-related hashtags here (Upto 5 Max)"
            />
          </div>
          <div className="form-visibility">
            <p>Visibility</p>
            <input
              type="text"
              placeholder="Select type of visibility from dropdown"
            />
          </div>
        </form>
        <div className="createEventModal__buttons">
          <Button
            className="createEventModal__buttons-cancel"
            size="large"
            borderRadius="6px"
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button
            className="createEventModal__buttons-create"
            size="large"
            color="cyan-filled"
            borderRadius="6px"
          >
            Create Events
          </Button>
        </div>
      </div>
    </div>
  );
};
