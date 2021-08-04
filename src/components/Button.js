import React from "react";

//Watched tutorial - https://www.youtube.com/watch?v=AmIdY1Eb8tY

const Button = (props) => {
  return (
    <div>
      <button
        className="add-remove"
        onClick={() => {
          props.dispatch(props.product);
        }}
      >
        {props.label}
      </button>
    </div>
  );
};

export default Button;
