import React from "react";

const Button = (props) => {
  return (
    <button className="button-89"
     onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Button;
