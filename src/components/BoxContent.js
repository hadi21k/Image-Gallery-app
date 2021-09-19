import React, { useState, useEffect } from "react";
import Image from "./Image";
const BoxContent = ({ content }) => {
  return (
    <>
      <div className="overflow-hidden border rounded shadow-md box">
        <Image image={content} />{" "}
        <div className="px-4 py-3 text-white bg-green-600">
          <h3>Photo by {content.user}</h3>
        </div>
        <ul className="px-4 py-3 text-white bg-green-600">
          <li>Views: {content.views}</li>
          <li>Downloads: {content.downloads}</li>
          <li>Likes: {content.likes}</li>
        </ul>
        <div className="px-4 py-3">
          {content.tags.split(",").map((tag, i) => {
            return (
              <span
                key={i}
                className="inline-block px-3 py-1 mt-2 mr-2 text-sm font-semibold text-gray-700 transition-all duration-500 bg-gray-200 rounded-full hover:text-white hover:bg-gray-500"
              >
                #{tag}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BoxContent;
