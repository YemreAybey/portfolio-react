import React from 'react';

import StacksButton from './StacksButton';
const Stacks = () => {
  return (
    <div className="stacks-area">
      <StacksButton bg="#748be0" name="React" />
      <StacksButton bg="#78dc80" name="Redux" />
      <StacksButton bg="#cfdc61" name="Javascript" />
      <StacksButton bg="#ea6363" name="Rails" />
      <StacksButton bg="#dc6e43" name="Ruby" />
      <StacksButton bg="#e07396" name="SCSS" />
      <StacksButton bg="rgb(115, 189, 224)" name="WebPack" />
      <StacksButton bg="#c75dda" name="RSPEC" />
      <StacksButton bg="#c1b2b7" name="Capybara" />
      <StacksButton bg="#a892dc" name="JEST" />
    </div>
  );
};

export default Stacks;
