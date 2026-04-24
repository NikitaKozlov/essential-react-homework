import { Fab, Icon } from "@mui/material";
import { useModal } from "../hooks/useModal";

export default function AddLotteryButton() {
  const { openModal } = useModal();

  return (
    <Fab variant="extended" className="add-lottery-button" onClick={openModal}>
      <Icon>add</Icon>
      ADD LOTTERY
    </Fab>
  );
}