import React from "react";
import { useState, useEffect } from "react";
import rowStyles from "./row.module.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    console.log(fetchUrl);
    axios
      .get(fetchUrl)
      .then((request) => {
        console.log(request);
        setMovies(request.data.results);
      })
      .catch((err) => console.log("error", err));
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then((url) => {
        console.log(url);
        const urlParams = new URLSearchParams(new URL(url).search);
        console.log(urlParams);
        console.log(urlParams.get("v"));
        setTrailerUrl(urlParams.get("v"));
      });
    }
  };

  const opts = {
    height: "390px",
    width: "100%",
    playVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <div className={rowStyles.row}>
        <h1>{title}</h1>
        <div className={rowStyles.poster}>
          {movies?.map((movie, index) => {
            return (
              <img key={index} onClick={() => handleClick(movie)} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`${rowStyles.row_poster} ${isLargeRow ? rowStyles.row_posterLarge : ""}`} />
            );
          })}
        </div>
        <div style={{ padding: "40px" }}>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}</div>
      </div>
    </div>
  );
}

export default Row;
