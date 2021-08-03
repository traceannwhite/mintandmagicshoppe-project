import React from "react";

//Watched tutorial - https://www.youtube.com/watch?v=AmIdY1Eb8tY

const AddButton = (props) => {
  return (
    <div>
      <button
        className="add-to-cart"
        onClick={() => {
          props.dispatch(props.product);
        }}
      >
        {props.label}
      </button>
    </div>
  );
};

export default AddButton;
