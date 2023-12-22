import React, { ReactNode } from "react";
import Tilt from "react-parallax-tilt";

type ParallaxTiltProps = {
  children: ReactNode;
};

const ParallaxTilt: React.FC<ParallaxTiltProps> = ({ children }) => {
  return <Tilt>{children}</Tilt>;
};

export default ParallaxTilt;
