import "./MainPage.scss";
import { PostBox } from "../../components/HomePageComponents/PostBox/PostBox";
import { Post } from "../../components/HomePageComponents/Post/Post";
import { AddPositionNotiBox } from "../../components/HomePageComponents/AddPositionNotiBox/AddPositionNotiBox";
import { PremiumAd } from "../../components/HomePageComponents/PremiumAd/PremiumAd";
import { ConnectionRecommendBox } from "../../components/HomePageComponents/ConnectionRecommendBox/ConnectionRecommendBox";
import { UpcomingEventBox } from "../../components/HomePageComponents/UpcomingEventBox/UpcomingEventBox";
import { PostBoxModal } from "../../components/HomePageComponents/PostBoxModal/PostBoxModal";
import { useState } from "react";
import { PostDetailProps } from "../../@types/HomePageTypes";
import { Avatar, PostImage } from "../../assets";
export const MainPage = () => {
  const [isPostBoxModalOpen, setPostBoxModelOpen] = useState<boolean>(false);
  const postData: PostDetailProps[] = [
    {
      personAvatar: Avatar,
      personName: "Vishnu Kumar Agrawal",
      personPosition: "Ux Designer at Divim Technology",
      postText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      postImage: PostImage,
      postLike: 100,
      postComment: 50,
      postShare: 10,
      postDateTime: "25 Nov at 12:24 PM",
    },
    {
      personAvatar: Avatar,
      personName: "Vishnu Kumar Agrawal",
      personPosition: "Ux Designer at Divim Technology",
      postText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      postLike: 100,
      postComment: 50,
      postShare: 10,
      postDateTime: "25 Nov at 12:24 PM",
    },
  ];
  return (
    <>
      {isPostBoxModalOpen && (
        <PostBoxModal
          isOpen={isPostBoxModalOpen}
          closeModal={() => setPostBoxModelOpen(false)}
        />
      )}
      <div className="main-container">
        <div className="main-section">
          <PostBox openModal={() => setPostBoxModelOpen(true)} />
          {postData.map((data, index) => (
            <Post postDetail={data} key={index} />
          ))}
        </div>
        <div className="secondary-section">
          <AddPositionNotiBox />
          <PremiumAd />
          <ConnectionRecommendBox />
          <UpcomingEventBox />
        </div>
      </div>
    </>
  );
};
