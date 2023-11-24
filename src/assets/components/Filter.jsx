import React from "react";
import { Input, Space } from "antd";
import { Select } from "antd";

const { Search } = Input;

const Filter = ({ memorizedMovies: { myMemorizedMovies }, setMyMovies }) => {
  // Filter by Rate
  const filterByRate = (rate) => {
    let filteredMovies = myMemorizedMovies.filter(
      (item) => Number(item.rating) === Number(rate)
    );
    setMyMovies(filteredMovies);
  };
  //  **************************************************************

  //  Filter by search
  const filterBySearch = (value) => {
    let filteredMovies = myMemorizedMovies.filter((item) =>
      item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase().trim())
    );
    setMyMovies(filteredMovies);
  };

  //   *****************************************************************************

  return (
    <div className="flex flex-col items-center sm:flex-row gap-4">
      <Search
        placeholder="search for movies"
        allowClear
        enterButton
        style={{ width: 200 }}
        onSearch={(value) => filterBySearch(value)}
      />

      {/* Filtering  */}
      <Select
        defaultValue="Filter by rate"
        style={{
          width: 150,
        }}
        onChange={(value) => filterByRate(value)}
        options={[
          {
            value: "1",
            label: "1",
          },
          {
            value: "2",
            label: "2",
          },
          {
            value: "3",
            label: "3",
          },
          {
            value: "4",
            label: "4",
          },
          {
            value: "5",
            label: "5",
          },
        ]}
      />
    </div>
  );
};

export default Filter;
