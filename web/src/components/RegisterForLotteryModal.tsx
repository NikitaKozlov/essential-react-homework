import { Modal, Box, TextField } from "@mui/material";
import { useModal } from "../hooks/useModal";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { registerForLottery } from "../api/registerForLottery";
import { useLotteries } from "../hooks/useLotteries";
import { useSnackbar } from "../hooks/useSnackbar";

export default function RegisterForLotteryModal() {
  const { isOpen, closeModal } = useModal();
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const { selectedLotteryIds } = useLotteries();
  const { showSnackbar } = useSnackbar();

  const handleRegister = async () => {
    setLoading(true);

    // Register for each selected lottery
    const results = await Promise.all(
      selectedLotteryIds.map(async (lotteryId) => {
        return registerForLottery({ lotteryId, name });
      })
    );

    //This is technically wrong logic, and we shouldn't do multiselect or have more complicated sucess/error state,
    // but in the task on a screenshot it seems like a user can register for multiple lotteries at once
    const success = results.every((result) => result === true);

    setLoading(false);
    showSnackbar(
      success,
      success ? 'Successfully registered for lottery!' : 'Failed to register. Please try again.'
    );

    if (success) {
      setName("");
      closeModal();
    }
  };

  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Box className="add-lottery-modal">
        <h2>Register for lottery</h2>
        <TextField
          error={isInvalid(name) && name.length > 0}
          id="standard-basic"
          label="Your Name"
          value={name}
          variant="standard"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
        />
        <LoadingButton
          variant="contained"
          disabled={isInvalid(name)}
          onClick={handleRegister}
          loading={isLoading}
        >
          Register
        </LoadingButton>
      </Box>
    </Modal>
  );
}

function isInvalid(input: string): boolean {
  return input.length < 4;
}
