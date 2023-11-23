import React, { useState } from "react";
import { Button, Modal, Input, Rate, message } from "antd";
import { VideoCameraAddOutlined } from "@ant-design/icons";
import validator from "validator";

const { TextArea } = Input;

const CreateNewMovie = ({ setMyMovies, setRandom, memorizedMovies }) => {
  const [movieInfo, setMovieInfo] = useState({
    id: Math.random(),
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  //   a function to handle inputs
  const handleInput = (e) => {
    const { id, value } = e.target;
    setMovieInfo((preValue) => {
      return {
        ...preValue,
        [id]: value,
      };
    });
  };

  // **************************************************************************************

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    // Validates Image URL from user
    if (!validator.isURL(movieInfo.posterURL)) {
      messageApi.open({
        type: "error",
        content: "Please provide a valid image address",
      });

      return;
    }

    // Validates Movie Title from user
    if (validator.isEmpty(movieInfo.title)) {
      messageApi.open({
        type: "error",
        content: "Please provide a title",
      });

      return;
    }
    // Validates Movie rating from user
    if (movieInfo.rating < 1) {
      messageApi.open({
        type: "error",
        content: "Please rate the movie",
      });

      return;
    }

    // Validates Movie Title from user
    if (validator.isEmpty(movieInfo.description)) {
      messageApi.open({
        type: "error",
        content: "Please provide movie description",
      });

      return;
    }

    // This is to prompt that movie was succesfully added
    messageApi.open({
      type: "success",
      content: "Movie Successfully Added",
    });

    setMyMovies(() => [movieInfo, ...memorizedMovies.myMemorizedMovies]);
    // Gives ability to receive movies memorized before
    setRandom(Math.random());

    // To reset input fields - You must also go and add a value on the input fields
    setMovieInfo({
      id: Math.random(),
      title: "",
      description: "",
      posterUrl: "",
      rating: "1",
    });

    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mx-auto mb-5">
        <Button
          type="primary"
          icon={<VideoCameraAddOutlined />}
          onClick={showModal}
        >
          Add Movie
        </Button>
      </div>
      <Modal
        title="Add new movie"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* contextHolder was copied from Ant Design to help us hold state */}
        {contextHolder}
        <div className="space-y-3">
          <Input
            placeholder="Movie poster URL"
            id="posterURL"
            onChange={handleInput}
            value={movieInfo.posterURL}
          />

          <Input
            placeholder="Movie title"
            id="title"
            onChange={handleInput}
            value={movieInfo.title}
          />

          <div className="shadow my-4 rounded-md p-2 w-fit">
            <p className="font-bold">Rate Movie</p>
            {/* there is a function here to initilaised the rating from user */}
            <Rate
              defaultValue={1}
              value={movieInfo.rating}
              onChange={(value) => {
                setMovieInfo((preValue) => ({
                  ...preValue,
                  rating: value,
                }));
              }}
            />
          </div>

          <TextArea
            rows={4}
            placeholder="Movie description"
            id="description"
            onChange={handleInput}
            value={movieInfo.description}
          />
        </div>
      </Modal>
    </>
  );
};

export default CreateNewMovie;
