import React from "react";
import "./DetailsMain.css";

const DetailsMain = ({
  movie_title,
  release_date,
  runtime,
  overview,
  poster_path,
}) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  
  return (
    <section className="details-main">
      <div className="vid-thumbnail">
        <img src={imageUrl} alt="video thumbnail"></img>
      </div>
      <div className="head">
        <div className="title">
          <h2 data-testid="movie-title">Title: {movie_title}</h2>
        </div>
        <div className="date">
          <h2 data-testid="movie-release-date">
            Release date (UTC): {release_date}
          </h2>
        </div>
        <div className="runtime">
          <h2 data-testid="movie-runtime">Runtime: {runtime} minutes</h2>
        </div>
      </div>
      <div className="overview">
        <h2>Overview</h2>
        <br></br>
        <p data-testid="movie-overview">{overview}</p>
      </div>
    </section>
  );
};

export default DetailsMain;
