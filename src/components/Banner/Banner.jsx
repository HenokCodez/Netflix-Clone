import React from "react";
import { useState, useEffect } from "react";
import bannerStyles from "../Banner/banner.module.css";
import axios from "../../utils/axios";
import requests from "../../utils/requests";

function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios
      .get(requests.fetchNetflixOriginals)
      .then((request) => {
        console.log(request);
        setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
      })
      .catch((err) => console.log("error", err));
  }, []);

  const truncate = (str, n) => (str?.length > n ? str.substring(0, n - 1) + "..." : str);

  return (
    <div
      className={bannerStyles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={bannerStyles.contents}>
        <h1 className={bannerStyles.title}>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className={bannerStyles.buttons}>
          <button className={bannerStyles.play}>Play</button>
          <button className={bannerStyles.list}>My List</button>
        </div>
        <h1 className={bannerStyles.des}>{truncate(movie?.overview, 150)}</h1>
      </div>
    </div>
  );
}

export default Banner;
