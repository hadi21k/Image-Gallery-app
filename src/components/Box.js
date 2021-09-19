import BoxContent from "./BoxContent";
import Form from "./Form";
import React, { useEffect, useState } from "react";
const Box = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const search = (searchText) => {
    setTerm(searchText);
  };

  //! Fetch API
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <>
      <Form search={search} />
      <div className="container mx-auto">
        {!isLoading && images.length === 0 ? (
          <div className="mx-auto mt-64 text-5xl text-center">
            There is no Photos for Your Search!
          </div>
        ) : (
          ""
        )}
        {isLoading ? (
          <div className="mx-auto mt-64 text-5xl text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 gap-4 mx-auto mt-4 xl:grid-cols-5 lg:grid-cols-4z md:grid-cols-3">
            {images.map((image, i) => {
              return <BoxContent key={i} content={image} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Box;
