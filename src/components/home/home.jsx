import React from "react";
import NewsSlider from "../widgets/newslider/slider";

const Home = () => {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={0}
        end={3}
        settings={{ dots: false }}
      ></NewsSlider>
    </div>
  );
};

export default Home;
