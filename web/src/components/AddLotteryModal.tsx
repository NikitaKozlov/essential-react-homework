import { Modal, Box, TextField, Button } from "@mui/material";
import { useModal } from "../hooks/useModal";
import { useState } from "react";


export default function AddLotteryModal() {
  const { isOpen, closeModal } = useModal();
  const [name, setName] = useState("");
  const [prize, setPrize] = useState("");

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
        <Button variant="contained" disabled={(isInvalid(prize) || isInvalid(name))}>Add</Button>
      </Box>
    </Modal>
  );
}

function isInvalid(input: string): boolean {
  return input.length < 4;
}