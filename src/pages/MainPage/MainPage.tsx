import "./MainPage.scss";
import { PostBox } from "../../components/HomePageComponents/PostBox/PostBox";
import { Post } from "../../components/HomePageComponents/Post/Post";
import { AddPositionNotiBox } from "../../components/HomePageComponents/AddPositionNotiBox/AddPositionNotiBox";
import { PremiumAd } from "../../components/HomePageComponents/PremiumAd/PremiumAd";
import { ConnectionRecommendBox } from "../../components/HomePageComponents/ConnectionRecommendBox/ConnectionRecommendBox";
import { UpcomingEventBox } from "../../components/HomePageComponents/UpcomingEventBox/UpcomingEventBox";
import { PostBoxModal } from "../../components/HomePageComponents/PostBoxModal/PostBoxModal";
import { useState } from "react";

export const MainPage = () => {
  const [isPostBoxModalOpen, setPostBoxModelOpen] = useState<boolean>(false);
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
          <Post />
          <Post />
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
