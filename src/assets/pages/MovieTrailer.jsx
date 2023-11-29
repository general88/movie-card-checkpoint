import React from "react";
import { Card, Rate } from "antd";
const { Meta } = Card;

const MovieTrailer = ({ movie }) => {
  return (
    <div>
      <Card hoverable>
        <iframe
          width="655"
          height="491"
          src={movie.trailerLink}
          title="3 Idiots - Official Trailer"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        ;
        <Meta title={movie.title} description={movie.description} />
        <Rate className="mt-4" disabled defaultValue={movie.rating} />
      </Card>
    </div>
  );
};

export default MovieTrailer;
