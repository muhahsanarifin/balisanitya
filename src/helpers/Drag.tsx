import { ReactNode } from "react";
import Draggable from "react-draggable";

type DragProps = {
  children: ReactNode;
};

const Drag: React.FC<DragProps> = ({ children }) => {
  return <Draggable>{children}</Draggable>;
};

export default Drag;
