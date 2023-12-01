import React from "react";
import { Card, Rate } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const MovieCard = ({ id, title, description, posterURL, rating, }) => (
  <Link to={`${id}`}>
    <Card
      hoverable
      cover={<img alt="example" src={posterURL} className="h-80" />}
    >
      <Meta title={title} description={description.slice(0, 100)} />
      <Rate className="mt-4" disabled defaultValue={rating} />
    </Card>
  </Link>
);
export default MovieCard;
