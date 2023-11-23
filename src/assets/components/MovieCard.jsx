import React from "react";
import { Card, Rate } from "antd";
const { Meta } = Card;
const MovieCard = ({ id, title, description, posterURL, rating }) => (
  <Card
    hoverable
    cover={<img alt="example" src={posterURL} className="h-80" />}
  >
    <Meta title={title} description={description.slice(0, 100)} />
    <Rate className="mt-4" disabled defaultValue={rating} />
  </Card>
);
export default MovieCard;
