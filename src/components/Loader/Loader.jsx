import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <ThreeCircles
        height="100"
        width="100"
        color="#0a0b0a"
        visible={true}
        ariaLabel="three-circles-rotating"
      />
    </div>
  );
};

export default Loader;
