import React from "react";
import Slider from "../../components/slider";
import RecommendList from "../../components/list";

const Recommend = () => {
  //mock 数据
  const bannerList = [1, 2, 3, 4].map((item) => {
    return {
      id: item,
      imageUrl:
        "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg",
    };
  });

  const recommendList = [];
  for (let i = 1; i < 10; i++) {
    recommendList.push({
      id: i,
      picUrl:
        "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
      playCount: 17171122,
      name: "朴树、许巍、李健、郑钧、老狼、赵雷",
    });
  }

  return (
    <div>
      <Slider bannerList={bannerList}></Slider>
      <RecommendList recommendList={recommendList}></RecommendList>
    </div>
  );
};

export default React.memo(Recommend);
