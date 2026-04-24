import { Modal, Box, TextField } from "@mui/material";
import { useModal } from "../hooks/useModal";
import { useState } from "react";
import { createLottery } from "../api/createLottery";
import { LoadingButton } from "@mui/lab";
import { useSnackbar } from "../hooks/useSnackbar";
import { useLotteries } from "../hooks/useLotteries";

export default function AddLotteryModal() {
  const { isOpen, closeModal } = useModal();
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [prize, setPrize] = useState("");
  const { showSnackbar } = useSnackbar();
  const { refetch } = useLotteries();

  const handleAdd = async () => {
    setLoading(true);
    const success = await createLottery({ name, prize });
    setLoading(false);
    showSnackbar(
      success,
      success ? 'Lottery added successfully!' : 'Failed to add lottery. Please try again.'
    );
    if (success) {
      setName("");
      setPrize("");
      closeModal();
      refetch();
    }
  };

  return (
    <Modal open={isOpen} onClose={closeModal} >
      <Box className="add-lottery-modal">
        <h2> Add a new lottery </h2>
        <TextField
          error={isInvalid(name) && name.length > 0} 
          id="standard-basic" 
          label="Lottery Name" 
          value={name} 
          variant="standard" 
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
        />
        <TextField
          error={isInvalid(prize) && prize.length > 0 }
          id="standard-basic" 
          label="Lottery Prize" 
          value={prize} 
          variant="standard"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPrize(event.target.value);
          }}
        />
        <LoadingButton variant="contained" disabled={(isInvalid(prize) || isInvalid(name))} onClick={handleAdd} loading={isLoading}>Add</LoadingButton>
      </Box>
    </Modal>
  );
}

function isInvalid(input: string): boolean {
  return input.length < 4;
}
