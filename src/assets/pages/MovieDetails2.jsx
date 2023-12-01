import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import axios from "axios";
import MovieCard2 from "../components/MovieCard2";
import { Card, Rate, Tag } from "antd";

const MovieDetails2 = () => {
  const { movieId } = useParams();
  const [singleMovie, setSingleMovie] = useState(null);
  const [movieKey, setMovieKey] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = import.meta.env.VITE_IMDB_ACCESS_TOKEN;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  async function getMovieTrailer() {
    setLoading(true);
    try {
      // get movie info
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        options
      );
      setSingleMovie(data);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        options
      );

      setMovieKey(response.data.results[0].key);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovieTrailer();
  }, [movieId]);

  if (loading) {
    return <h1>Getting movie description...</h1>;
  }
  console.log(singleMovie);
  return (
    <div className="mx-auto max-w-2xl mt-5">
      <Card>
        <h1 className=" text-red-800">Movie Tilte: {singleMovie?.title}</h1>
        <h3 className="underline text-blue-800 mt-3">Movie Description</h3>
        <p className="text-justify mt-3">{singleMovie?.overview}</p>

        <Tag color="error">{singleMovie?.status}</Tag>
        <Tag color="error">{singleMovie?.release_date}</Tag>
        <Rate
          className="m-4"
          disabled
          defaultValue={Math.fround(singleMovie?.vote_average / 2)}
        />
        <ReactPlayer  url={`https://www.youtube.com/watch?v=${movieKey}`} />
      </Card>
    </div>
  );
};

export default MovieDetails2;
