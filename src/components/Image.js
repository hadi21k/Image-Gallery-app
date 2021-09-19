import React from "react";

const Image = ({ image }) => {
  return (
    <>
      <img
        className="overflow-hidden transition duration-500 transform m-w-full hover:scale-105"
        src={image.webformatURL}
        alt="no content"
      />
    </>
  );
};

export default Image;
