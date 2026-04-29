import { useContext } from "react";
import { SnackbarContext } from "../contexts/SnackbarContext";

export const useSnackbar = () => {
  const {
    isShown,
    isSuccess,
    showSnackbar,
    hideSnackbar,
  } = useContext(SnackbarContext);

  return { isShown, isSuccess, showSnackbar, hideSnackbar };
};
