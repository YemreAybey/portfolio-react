import React from 'react';

const StacksButton = props => {
  return (
    <span className="stacks-area_button" style={{ backgroundColor: props.bg }}>
      {props.name}
    </span>
  );
};
export default StacksButton;
