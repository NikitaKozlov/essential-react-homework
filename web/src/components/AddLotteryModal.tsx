import { Modal, Box } from "@mui/material";
import { useModal } from "../hooks/useModal";


export default function AddLotteryModal() {
  const { isOpen, closeModal } = useModal();

  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Box>
        Add a new lottery
      </Box>
    </Modal>
  );
}