import React, { createContext, useState } from "react";

export interface IModalContext {
  isOpen: boolean
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext = createContext<IModalContext>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

const ModalContextProvider = ({ children }: React.PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContextProvider;
