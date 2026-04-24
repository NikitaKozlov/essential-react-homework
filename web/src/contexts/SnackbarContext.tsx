import React, { createContext, useState } from "react";

export interface ISnackbarContext {
  isShown: boolean;
  isSuccess: boolean;
  message: string;
  showSnackbar: (isSuccess: boolean, message: string) => void;
}

export const SnackbarContext = createContext<ISnackbarContext>({
  isShown: false,
  isSuccess: false,
  message: '',
  showSnackbar: (isSuccess: boolean, message: string) => {},
});

const SnackbarContextProvider = ({ children }: React.PropsWithChildren) => {
  const [isShown, setIsShown] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const showSnackbar = (isSuccess: boolean, message: string) => {
    setIsSuccess(isSuccess);
    setMessage(message);
    setIsShown(true);
  };

  return (
    <SnackbarContext.Provider
      value={{ isShown, isSuccess, message, showSnackbar }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarContextProvider;
