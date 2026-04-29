import React, { createContext, useState } from "react";

export interface ISnackbarContext {
  isShown: boolean;
  isSuccess: boolean;
  showSnackbar: (isSuccess: boolean) => void;
  hideSnackbar: () => void;
}

export const SnackbarContext = createContext<ISnackbarContext>({
  isShown: false,
  isSuccess: false,
  showSnackbar: (isSuccess: boolean) => {},
  hideSnackbar: () => {},
});

const SnackbarContextProvider = ({ children }: React.PropsWithChildren) => {
  const [isShown, setIsShown] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const showSnackbar = (isSuccess: boolean) => {
    setIsSuccess(isSuccess);
    setIsShown(true);
  };

  const hideSnackbar = () => {
    setIsShown(false);
  };

  return (
    <SnackbarContext.Provider
      value={{ isShown, isSuccess, showSnackbar, hideSnackbar }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarContextProvider;
