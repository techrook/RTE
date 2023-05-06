import { useState, useEffect } from "react";
import TopVideos from "../../component/topVideos/TopVideos.jsx";
import TopSongs from "../../component/topSongs/TopSongs.jsx";
import TopNews from "../../component/topNews/TopNews.jsx";
import "./style.css";
const Home = () => {
  const [idx, setIdx] = useState();

  return (
    <main className="Home">
      <nav className="latest-nav">
        <ul>
          <li>
            <a href="#songs">Latest songs</a>
          </li>
          <li>
            <a href="#videos">latest music videos</a>
          </li>
          <li>
            <a href="#news">latest news</a>
          </li>
        </ul>
      </nav>
      <TopSongs />
      <TopVideos />
      <TopNews />
    </main>
  );
};

export default Home;
