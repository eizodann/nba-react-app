import React from "react";
import NewsSlider from "../../../widgets/newslider/slider";
import NewsList from "../../../widgets/newsList/newsList";

const NewsMain = () => {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={0}
        end={3}
        settings={{ dots: false }}
      />
      <NewsList type="cardMain" loadMore={true} start={3} amount={10}/>
    </div>
  );
};

export default NewsMain;
