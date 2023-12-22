import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type LazyLoadProps = {
  src: string;
  className?: string;
  alt?: string;
};

const Image: React.FC<LazyLoadProps> = ({ src, className, alt }) => {
  return (
    <LazyLoadImage effect="blur" src={src} className={className} alt={alt} />
  );
};

export default Image;
