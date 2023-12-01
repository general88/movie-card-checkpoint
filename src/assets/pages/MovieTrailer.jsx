import React, { useState, useEffect } from "react";
import { Card, Rate, Tag } from "antd";
import { useParams } from "react-router-dom";
import { movieData } from "../../data";

const { Meta } = Card;

const MovieTrailer = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  //   write a function that will return the item frm the array
  const findMovieByID = () => {
    let movie = movieData.find((item) => String(item.id) === movieId);
    setMovie(movie);
    console.log(movie);
    return movie;
  };

  useEffect(() => {
    findMovieByID();
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  if (loading) {
    return <h1>Getting movie description...</h1>;
  }
  return (
    <div>
      <Card className="mt-5 max-w-2xl mx-auto">
        <h1 className=" text-red-800">Movie Tilte: {movie.title}</h1>
        <h3 className="underline text-blue-800 mt-3">Movie Description</h3>
        <p className="text-justify mt-3">{movie.description}</p>

        <Tag color="error">{movie.status}</Tag>
        <Tag color="error">{movie.releaseDate}</Tag>
        <Rate className="m-4" disabled defaultValue={movie.rating} />
        <div>
          <iframe
            width="640"
            height="360"
            src={movie.trailerLink}
            title="3 Idiots - Official Trailer"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </Card>
    </div>
  );
};

export default MovieTrailer;
