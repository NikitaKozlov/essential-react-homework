import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

export const useModal = () => {
  const {
    isOpen,
    openModal,
    closeModal,
  } = useContext(ModalContext);

  return { isOpen, openModal, closeModal };
};
