import React, { ReactNode } from "react";
import { Modal } from "react-rainbow-components";

type ModalBaseEmptyProps = {
  footer?: ReactNode;
  isOpen?: boolean;
  title?: string;
  onRequestClose?: () => void;
  children: ReactNode;
};

export const ModalBaseEmpty: React.FC<ModalBaseEmptyProps> = ({
  title,
  footer,
  isOpen,
  onRequestClose,
  children,
}) => {
  return (
    <Modal
      title={title}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      footer={footer}
    >
      {children}
    </Modal>
  );
};
