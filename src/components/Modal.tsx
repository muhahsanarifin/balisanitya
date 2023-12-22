import React, { ReactNode } from "react";
import { Modal } from "react-rainbow-components";

type ModalBaseEmptyProps = {
  children?: ReactNode;
  isOpen?: boolean;
  onRequestClose?: () => void;
};

export const ModalBaseEmpty: React.FC<ModalBaseEmptyProps> = ({
  children,
  isOpen,
  onRequestClose,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      {children}
    </Modal>
  );
};
