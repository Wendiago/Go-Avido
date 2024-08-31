import "./PostBoxModal.scss";
import { Avatar } from "../../../assets";
import { Visibility, visibilityDescriptions } from "../../../@types/navTypes";
import { useEffect, useRef, useState } from "react";

type PostBoxModalProp = {
  isOpen: boolean;
  closeModal: () => void;
};

export const PostBoxModal = ({ isOpen, closeModal }: PostBoxModalProp) => {
  const [isVisibilityDropdownOpen, setVisibilityDropdownOpen] =
    useState<boolean>(false);
  const [visibility, setVisibility] = useState<Visibility>(Visibility.Public);

  const handleVisibilityChange = (visibility: Visibility) => {
    setVisibility(visibility);
    setVisibilityDropdownOpen(false);
  };

  const postBoxModalRef = useRef<HTMLDivElement | null>(null);
  const visibilityDropDownRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      postBoxModalRef.current &&
      !postBoxModalRef.current.contains(event.target as Node) &&
      isOpen
    ) {
      closeModal();
    }

    if (
      visibilityDropDownRef.current &&
      !visibilityDropDownRef.current.contains(event.target as Node) &&
      isVisibilityDropdownOpen
    ) {
      setVisibilityDropdownOpen(false);
    }
  };
  useEffect(() => {
    if (isOpen || isVisibilityDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.querySelector("body")?.classList.add("no-scroll");
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.querySelector("body")?.classList.remove("no-scroll");
    };
  }, [isOpen, isVisibilityDropdownOpen]);

  return (
    <div className={`modal-container ${isOpen ? "show" : ""}`}>
      <div className="postboxmodal__container" ref={postBoxModalRef}>
        <div className="postboxmodal__header">
          <div className="postboxmodal__header-avatar-infogroup-closebutton">
            <div className="postboxmodal__header-avatar-infogroup">
              <img className="postboxmodal__header-avatar" src={Avatar}></img>
              <div className="postboxmodal__header-infogroup">
                <div className="postboxmodal__header-infogroup-name">
                  Vishnu Kumar Agrawal
                </div>
                <div className="postboxmodal__header-infogroup-visibility">
                  {visibilityDescriptions[visibility]}
                </div>
              </div>
            </div>
            <div
              className="postboxmodal__header-closebutton"
              onClick={closeModal}
            >
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.8839 10.8839C31.372 10.3957 31.372 9.60427 30.8839 9.11612C30.3957 8.62796 29.6043 8.62796 29.1161 9.11612L20 18.2322L10.8839 9.11612C10.3957 8.62796 9.60427 8.62796 9.11612 9.11612C8.62796 9.60427 8.62796 10.3957 9.11612 10.8839L18.2322 20L9.11612 29.1161C8.62796 29.6043 8.62796 30.3957 9.11612 30.8839C9.60427 31.372 10.3957 31.372 10.8839 30.8839L20 21.7678L29.1161 30.8839C29.6043 31.372 30.3957 31.372 30.8839 30.8839C31.372 30.3957 31.372 29.6043 30.8839 29.1161L21.7678 20L30.8839 10.8839Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <textarea
          className="postboxmodal__header-des"
          placeholder="What do you want to talk about?"
        ></textarea>
        <div className="postboxmodal__functions">
          <svg
            className="postboxmodal__functions-emoji"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.0001 24.5C19.7991 24.5 24.5001 19.799 24.5001 14C24.5001 8.20101 19.7991 3.5 14.0001 3.5C8.20107 3.5 3.50006 8.20101 3.50006 14C3.50006 19.799 8.20107 24.5 14.0001 24.5Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5001 11.6667H10.5117"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5001 11.6667H17.5117"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.0833 17.5C11.4634 17.888 11.9172 18.1963 12.4181 18.4067C12.9189 18.6172 13.4567 18.7256 13.9999 18.7256C14.5432 18.7256 15.0809 18.6172 15.5818 18.4067C16.0826 18.1963 16.5364 17.888 16.9166 17.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            className="postboxmodal__functions-calender"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.8709 3.5C18.8709 3.08579 18.5351 2.75 18.1209 2.75C17.7067 2.75 17.3709 3.08579 17.3709 3.5V5.08333H9.53758V3.5C9.53758 3.08579 9.20179 2.75 8.78758 2.75C8.37336 2.75 8.03758 3.08579 8.03758 3.5V5.08333H6.45424C4.75137 5.08333 3.37091 6.46379 3.37091 8.16667V12.8333V22.1667C3.37091 23.8695 4.75137 25.25 6.45424 25.25H20.4542C22.1571 25.25 23.5376 23.8695 23.5376 22.1667V12.8333V8.16667C23.5376 6.46379 22.1571 5.08333 20.4542 5.08333H18.8709V3.5ZM22.0376 12.0833V8.16667C22.0376 7.29222 21.3287 6.58333 20.4542 6.58333H18.8709V8.16667C18.8709 8.58088 18.5351 8.91667 18.1209 8.91667C17.7067 8.91667 17.3709 8.58088 17.3709 8.16667V6.58333H9.53758V8.16667C9.53758 8.58088 9.20179 8.91667 8.78758 8.91667C8.37336 8.91667 8.03758 8.58088 8.03758 8.16667V6.58333H6.45424C5.57979 6.58333 4.87091 7.29222 4.87091 8.16667V12.0833H22.0376ZM4.87091 13.5833H22.0376V22.1667C22.0376 23.0411 21.3287 23.75 20.4542 23.75H6.45424C5.57979 23.75 4.87091 23.0411 4.87091 22.1667V13.5833Z"
              fill="#121212"
            />
          </svg>

          <svg
            className="postboxmodal__functions-more"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1666 14C15.1666 13.3557 14.6443 12.8334 14 12.8334C13.3556 12.8334 12.8333 13.3557 12.8333 14C12.8333 14.6444 13.3556 15.1667 14 15.1667C14.6443 15.1667 15.1666 14.6444 15.1666 14Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.3333 14C23.3333 13.3557 22.811 12.8334 22.1667 12.8334C21.5223 12.8334 21 13.3557 21 14C21 14.6444 21.5223 15.1667 22.1667 15.1667C22.811 15.1667 23.3333 14.6444 23.3333 14Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.99996 14C6.99996 13.3557 6.47762 12.8334 5.83329 12.8334C5.18896 12.8334 4.66663 13.3557 4.66663 14C4.66663 14.6444 5.18896 15.1667 5.83329 15.1667C6.47763 15.1667 6.99996 14.6444 6.99996 14Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="postboxmodal__separator"></div>
        <div className="postboxmodal__footer">
          <div className="postboxmodal__footer-visibility">
            <div className="postboxmodal__footer-visibility-button">
              Visible to: &nbsp;<span className="visibility">{visibility}</span>
              <svg
                onClick={() =>
                  setVisibilityDropdownOpen(!isVisibilityDropdownOpen)
                }
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.22705 7.5L10.2271 12.5L15.2271 7.5"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div
                className={`visibility-dropdown ${
                  isVisibilityDropdownOpen ? "show" : ""
                }`}
                ref={visibilityDropDownRef}
              >
                {Object.values(Visibility).map((value, index) => (
                  <div
                    key={index}
                    className="visibility-dropdown-option"
                    onClick={() => handleVisibilityChange(value)}
                  >
                    {value}
                  </div>
                ))}
              </div>
            </div>
            <div className="postboxmodal__footer-visibility-des">
              {visibilityDescriptions[visibility]}
            </div>
          </div>
          <div className="postboxmodal__footer-timer-postbutton">
            <div className="postboxmodal__footer-timer">
              <svg
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 4.25C8.61522 4.25 4.25 8.61522 4.25 14C4.25 19.3848 8.61522 23.75 14 23.75C19.3848 23.75 23.75 19.3848 23.75 14C23.75 8.61522 19.3848 4.25 14 4.25ZM2.75 14C2.75 7.7868 7.7868 2.75 14 2.75C20.2132 2.75 25.25 7.7868 25.25 14C25.25 20.2132 20.2132 25.25 14 25.25C7.7868 25.25 2.75 20.2132 2.75 14ZM14.75 13.25V8.16667C14.75 7.75245 14.4142 7.41667 14 7.41667C13.5858 7.41667 13.25 7.75245 13.25 8.16667V14C13.25 14.4142 13.5858 14.75 14 14.75H18.0833C18.4975 14.75 18.8333 14.4142 18.8333 14C18.8333 13.5858 18.4975 13.25 18.0833 13.25H14.75Z"
                />
              </svg>
            </div>
            <div className="postboxmodal__footer-postbutton">Post</div>
          </div>
        </div>
      </div>
    </div>
  );
};
