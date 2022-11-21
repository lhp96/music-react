import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Top, Tab, TabItem } from "./style";
const Home = (props) => {
  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>
        <Link to="/recommend" activeClassName="selected">
          <TabItem>
            <span> 推荐 </span>
          </TabItem>
        </Link>
        <Link to="/singers" activeClassName="selected">
          <TabItem>
            <span> 歌手 </span>
          </TabItem>
        </Link>
        <Link to="/rank" activeClassName="selected">
          <TabItem>
            <span> 排行榜 </span>
          </TabItem>
        </Link>
      </Tab>
      <Outlet />
    </div>
  );
};

export default React.memo(Home);
