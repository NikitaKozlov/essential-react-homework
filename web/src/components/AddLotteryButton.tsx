import { Fab, Icon } from "@mui/material";
import { useModal } from "../hooks/useModal";

export default function AddLotteryButton() {
  const { openModal } = useModal();

  return (
    <Fab
      variant="extended"
      color="primary"
      onClick={openModal}
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
      }}
    >
      <Icon>add</Icon>
      ADD LOTTERY
    </Fab>
  );
}