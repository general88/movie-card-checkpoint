import React, { useContext } from "react";
import { Card, Rate } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const MovieCard2 = ({ id, title, overview, poster_path, vote_average }) => {
  const baseImageUrl = import.meta.env.VITE_TMDB_IMAGE_BASEURL;
  return (
    <Link to={`${id}`}>
      <Card
        hoverable
        cover={<img alt={title} src={baseImageUrl + poster_path} />}
      >
        <Meta title={title} description={overview.slice(0, 100)} />
        <Rate
          className="mt-4"
          disabled
          defaultValue={Math.fround(vote_average / 2)}
        />
      </Card>
    </Link>
  );
};
export default MovieCard2;
