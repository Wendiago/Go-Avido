import "./Post.scss";
import { Message, Forword, PostImage } from "../../../assets/index";
import { useState, useEffect, useRef } from "react";
import { PostDetailProps } from "../../../@types/HomePageTypes";

export const Post = ({ postDetail }: { postDetail: PostDetailProps }) => {
  const [isOverflow, setOverflow] = useState<boolean>(false);
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const [isLiked, setLiked] = useState<boolean>(false);
  const [isBookmarked, setBookmarked] = useState<boolean>(false);

  //Check overflow
  const contentRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (contentRef.current) {
      setOverflow(
        contentRef.current.scrollHeight > contentRef.current.clientHeight
      );
    }
  }, [isExpanded]);
  return (
    <div className="post">
      <div className="post-header">
        <img
          src={postDetail.personAvatar}
          alt=""
          className="post-header-avatar"
        />
        <div className="post-header-personalInfo">
          <p className="post-header-name">{postDetail.personName}</p>
          <p className="post-header-position">{postDetail.personPosition}</p>
          <p className="post-header-date">{postDetail.postDateTime}</p>
        </div>
      </div>
      <div className="post-content">
        <div
          className={`post-content-text ${isExpanded ? "show-full" : ""}`}
          ref={contentRef}
        >
          {postDetail.postText}
        </div>
        {isOverflow && !isExpanded && (
          <span className="read-more" onClick={() => setExpanded(true)}>
            ... Read more
          </span>
        )}
        {!isOverflow && isExpanded && (
          <span className="read-less" onClick={() => setExpanded(false)}>
            Read less
          </span>
        )}
        {postDetail.postImage && (
          <div className="post-content-media">
            <img src={PostImage} alt="" />
          </div>
        )}
      </div>
      <div className="post-actions">
        <div className="post-actions-container-3">
          <div
            className={`post-actions-like ${isLiked ? "liked" : ""}`}
            onClick={() => setLiked(!isLiked)}
          >
            <svg
              className="like-icon"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.16661 12.8334V22.1667C8.16661 22.4761 8.04369 22.7729 7.8249 22.9916C7.6061 23.2104 7.30936 23.3334 6.99994 23.3334H4.66661C4.35719 23.3334 4.06044 23.2104 3.84165 22.9916C3.62286 22.7729 3.49994 22.4761 3.49994 22.1667V14C3.49994 13.6906 3.62286 13.3939 3.84165 13.1751C4.06044 12.9563 4.35719 12.8334 4.66661 12.8334H8.16661C9.40428 12.8334 10.5913 12.3417 11.4664 11.4665C12.3416 10.5914 12.8333 9.40436 12.8333 8.16669V7.00002C12.8333 6.38118 13.0791 5.78769 13.5167 5.3501C13.9543 4.91252 14.5478 4.66669 15.1666 4.66669C15.7854 4.66669 16.3789 4.91252 16.8165 5.3501C17.2541 5.78769 17.4999 6.38118 17.4999 7.00002V12.8334H20.9999C21.6188 12.8334 22.2123 13.0792 22.6499 13.5168C23.0874 13.9544 23.3333 14.5479 23.3333 15.1667L22.1666 21C21.9988 21.7157 21.6805 22.3303 21.2597 22.7512C20.8389 23.172 20.3383 23.3763 19.8333 23.3334H11.6666C10.7383 23.3334 9.84811 22.9646 9.19173 22.3082C8.53536 21.6519 8.16661 20.7616 8.16661 19.8334" />
              <path
                d="M8.16661 12.8334V22.1667C8.16661 22.4761 8.04369 22.7729 7.8249 22.9916C7.6061 23.2104 7.30936 23.3334 6.99994 23.3334H4.66661C4.35719 23.3334 4.06044 23.2104 3.84165 22.9916C3.62286 22.7729 3.49994 22.4761 3.49994 22.1667V14C3.49994 13.6906 3.62286 13.3939 3.84165 13.1751C4.06044 12.9563 4.35719 12.8334 4.66661 12.8334H8.16661ZM8.16661 12.8334C9.40428 12.8334 10.5913 12.3417 11.4664 11.4665C12.3416 10.5914 12.8333 9.40436 12.8333 8.16669V7.00002C12.8333 6.38118 13.0791 5.78769 13.5167 5.3501C13.9543 4.91252 14.5478 4.66669 15.1666 4.66669C15.7854 4.66669 16.3789 4.91252 16.8165 5.3501C17.2541 5.78769 17.4999 6.38118 17.4999 7.00002V12.8334H20.9999C21.6188 12.8334 22.2123 13.0792 22.6499 13.5168C23.0874 13.9544 23.3333 14.5479 23.3333 15.1667L22.1666 21C21.9988 21.7157 21.6805 22.3303 21.2597 22.7511C20.8389 23.172 20.3383 23.3763 19.8333 23.3334H11.6666C10.7383 23.3334 9.84811 22.9646 9.19173 22.3082C8.53536 21.6519 8.16661 20.7616 8.16661 19.8334"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="counter">{postDetail.postLike}</p>
          </div>
          <div className="post-actions-comment">
            <img src={Message}></img>
            <p className="counter">{postDetail.postComment}</p>
          </div>
          <div className="post-actions-share">
            <img src={Forword}></img>
            <p className="counter">{postDetail.postShare}</p>
          </div>
        </div>

        <div
          className={`post-actions-bookmark ${
            isBookmarked ? "bookmarked" : ""
          }`}
          onClick={() => setBookmarked(!isBookmarked)}
        >
          <svg
            className="bookmark-icon"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5001 4.66666H17.5001C18.1189 4.66666 18.7124 4.91249 19.15 5.35007C19.5876 5.78766 19.8334 6.38115 19.8334 6.99999V23.3333L14.0001 19.8333L8.16672 23.3333V6.99999C8.16672 6.38115 8.41255 5.78766 8.85013 5.35007C9.28772 4.91249 9.88121 4.66666 10.5001 4.66666Z"
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
