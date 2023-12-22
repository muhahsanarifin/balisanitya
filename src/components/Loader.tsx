import React from "react";
import styled, { keyframes } from "styled-components";

const bxSpin = keyframes`
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, .9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
`;

const shadow = keyframes`
  0%, 100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
`;

const LoaderContainer = styled.div`
  width: 48px;
  height: 48px;
  margin: auto;
  position: relative;
`;

const LoaderBefore = styled.div`
  content: "";
  width: 48px;
  height: 5px;
  background: #000;
  opacity: 0.25;
  position: absolute;
  top: 60px;
  left: 0;
  border-radius: 50%;
  animation: ${shadow} 0.5s linear infinite;
`;

const LoaderAfter = styled.div`
  content: "";
  width: 100%;
  height: 100%;
  background: #0d9488;
  animation: ${bxSpin} 0.5s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
`;

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <LoaderBefore />
      <LoaderAfter />
    </LoaderContainer>
  );
};

export default Loader;

export const Loading = () => {
  return (
    <div className="border-2 broder-solid border-red-500">
      <h1>Loading.....</h1>
    </div>
  );
};
