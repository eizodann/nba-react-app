import React from "react";
import NewsSlider from "../widgets/newslider/slider";
import NewsList from "../widgets/newsList/newsList";
import VideoList from "../widgets/videolist/videolist";

const Home = () => {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={0}
        end={3}
        settings={{ dots: false }}
      ></NewsSlider>
      <NewsList type="card" loadMore={true} start={3} amount={3} />
      {/* <VideoList type="card" loadMore={true} title={true} start={0} amount={3} /> */}
    </div>
  );
};

export default Home;
