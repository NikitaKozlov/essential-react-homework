import { useContext } from "react";
import { SnackbarContext } from "../contexts/SnackbarContext";

export const useSnackbar = () => {
  const {
    isShown,
    isSuccess,
    showSnackbar,
  } = useContext(SnackbarContext);

  return { isShown, isSuccess, showSnackbar };
};
