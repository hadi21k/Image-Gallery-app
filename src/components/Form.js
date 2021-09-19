import React, { useState } from "react";

const Form = ({ search }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    search(text);
  };
  return (
    <div className="flex items-center justify-center mt-10 space-x-2 ">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center space-x-2"
      >
        <input
          className="px-4 py-2 border rounded shadow outline-none "
          type="text"
          value={text}
          placeholder="Search Here"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="p-2 font-bold text-white bg-green-500 rounded shadow"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
